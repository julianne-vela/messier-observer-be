const client = require('../lib/client');
// import our seed data:
const messier_catalog = require('./messier-catalog.js');
const usersData = require('./users.js');
const { getEmoji } = require('../lib/emoji.js');

run();

async function run() {

  try {
    await client.connect();

    const users = await Promise.all(
      usersData.map(user => {
        return client.query(`
                      INSERT INTO users (email, hash)
                      VALUES ($1, $2)
                      RETURNING *;
                  `,
        [user.email, user.hash]);
      })
    );
      
    const user = users[0].rows[0];

    await Promise.all(
      messier_catalog.map(messier_object => {
        return client.query(`
                    INSERT INTO messier_catalog (
                        messier_id, 
                        ngc_ic_num, 
                        common_name, 
                        image, 
                        object_type, 
                        distance_from_earth_kly, constellation, 
                        apparent_mag,
                        right_asc,
                        declination,
                        observation_completed, 
                        owner_id)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
                `,
        [
          messier_object.messier_id, 
          messier_object.ngc_ic_num, 
          messier_object.common_name, 
          messier_object.image, 
          messier_object.object_type,
          messier_object.distance_from_earth_kly, 
          messier_object.constellation, 
          messier_object.apparent_mag,
          messier_object.right_asc,
          messier_object.declination,
          messier_object.observation_completed, 
          user.id
        ]);
      })
    );
    

    console.log('seed data load complete', getEmoji(), getEmoji(), getEmoji());
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}
