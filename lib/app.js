const express = require('express');
const cors = require('cors');
const client = require('./client.js');
const app = express();
const morgan = require('morgan');
const ensureAuth = require('./auth/ensure-auth');
const createAuthRoutes = require('./auth/create-auth-routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

const authRoutes = createAuthRoutes();

// setup authentication routes to give user an auth token
// creates a /auth/signin and a /auth/signup POST route. 
// each requires a POST body with a .email and a .password
app.use('/auth', authRoutes);

// everything that starts with "/api" below here requires an auth token!
app.use('/api', ensureAuth);

// and now every request that has a token in the Authorization header will have a `req.userId` property for us to see who's talking
app.get('/api/test', (req, res) => {
    res.json({
        message: `in this proctected route, we get the user's id like so: ${req.userId}`
    });
});

app.get('/messier_catalog', async(req, res) => {
    try {
        const data = await client.query(`
            SELECT 
                messier_catalog.id,
                messier_catalog.messier_id, 
                messier_catalog.ngc_ic_num, 
                messier_catalog.common_name, 
                messier_catalog.image, 
                object_types.type as type,
                messier_catalog.type_id, 
                messier_catalog.distance_from_earth_kly, 
                messier_catalog.constellation, 
                messier_catalog.apparent_mag,
                messier_catalog.right_asc,
                messier_catalog.declination,
                messier_catalog.observation_completed,
                messier_catalog.owner_id
            FROM messier_catalog
            JOIN object_types 
            ON messier_catalog.type_id = object_types.id
        `);
        res.json(data.rows);
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
});

app.get('/object_types', async(req, res) => {
    try {
        const data = await client.query('SELECT * from object_types');
        res.json(data.rows);
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
});

app.get('/messier_catalog/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await client.query(`
            SELECT 
                messier_catalog.id,
                messier_catalog.messier_id, 
                messier_catalog.ngc_ic_num, 
                messier_catalog.common_name, 
                messier_catalog.image, 
                object_types.type as type,
                messier_catalog.type_id, 
                messier_catalog.distance_from_earth_kly, 
                messier_catalog.constellation, 
                messier_catalog.apparent_mag,
                messier_catalog.right_asc,
                messier_catalog.declination,
                messier_catalog.observation_completed,
                messier_catalog.owner_id 
            FROM messier_catalog
            JOIN object_types 
            ON messier_catalog.type_id = object_types.id
            WHERE messier_catalog.messier_id=$1`, [id]);
        res.status(200).json(data.rows[0]);
    } catch(e) {

        console.log('=============================\n');
        console.log(e.message);
        console.log('\n=============================');
        res.status(500).json({ error: e.message });
    }
});

app.post('/messier_catalog', async(req, res) => {
    try {
        const data = await client.query(`
        INSERT into messier_catalog (
            messier_id, 
            ngc_ic_num, 
            common_name, 
            image, 
            type_id, 
            distance_from_earth_kly, 
            constellation, 
            apparent_mag, 
            right_asc, 
            declination, 
            observation_completed, 
            owner_id)
        values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        returning *
        `,
        [
            req.body.messier_id,
            req.body.ngc_ic_num,
            req.body.common_name,
            req.body.image,
            req.body.type_id,
            req.body.distance_from_earth_kly,
            req.body.constellation,
            req.body.apparent_mag,
            req.body.right_asc,
            req.body.declination,
            req.body.observation_completed,
            1,
        ]);
    
        res.json(data.rows[0]);
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
});

app.delete('/messier_catalog/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await client.query('delete from messier_catalog where id=$1 returning *', [id]);
    
        res.json(data.rows[0]);
    } catch(e) {
    
        res.status(500).json({ error: e.message });
    }
});

app.put('/messier_catalog/:id', async(req, res) => {
    const id = req.params.id;

    try {
        const data = await client.query(`
        UPDATE messier_catalog 
        SET messier_id = $1, ngc_ic_num = $2, common_name = $3, image = $4, type_id = $5, distance_from_earth_kly = $6, constellation = $7, apparent_mag = $8, right_asc = $9, declination = $10, observation_completed = $11
        where id=$12 
        returning *;
    `,
        [
            req.body.messier_id,
            req.body.ngc_ic_num,
            req.body.common_name,
            req.body.image,
            req.body.type_id,
            req.body.distance_from_earth_kly,
            req.body.constellation,
            req.body.apparent_mag,
            req.body.right_asc,
            req.body.declination,
            req.body.observation_completed,
            id,
        ]);

        res.json(data.rows[0]);
    } catch(e) {
    
        res.status(500).json({ error: e.message });
    }
});

app.use(require('./middleware/error'));

module.exports = app;
