const client = require('../lib/client');
// import our seed data:
const neos = require('./neos.js');
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
      neos.map(neo => {
        return client.query(`
                    INSERT INTO neos (
                        neo_reference_id, 
                        name, 
                        nasa_jpl_url, 
                        absolute_magnitude_h, 
                        estimated_diameter_min,
                        estimated_diameter_max, 
                        is_potentially_hazardous_asteroid, 
                        is_sentry_object, 
                        owner_id)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
                `,
        [
          neo.neo_reference_id, 
          neo.name, 
          neo.nasa_jpl_url, 
          neo.absolute_magnitude_h, 
          neo.estimated_diameter_min,
          neo.estimated_diameter_max, 
          neo.is_potentially_hazardous_asteroid, 
          neo.is_sentry_object, 
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
