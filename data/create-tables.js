const client = require('../lib/client');
const { getEmoji } = require('../lib/emoji.js');

// async/await needs to run in a function
run();

async function run() {

  try {
    // initiate connecting to db
    await client.connect();

    // run a query to create tables
    await client.query(`
                CREATE TABLE users (
                    id SERIAL PRIMARY KEY,
                    email VARCHAR(256) NOT NULL,
                    hash VARCHAR(512) NOT NULL
                );           
                CREATE TABLE messier_catalog (
                    id SERIAL PRIMARY KEY NOT NULL,
                    messier_id VARCHAR(512) NOT NULL,
                    ngc_ic_num VARCHAR(512) NOT NULL,
                    common_name VARCHAR(512) NOT NULL,
                    image VARCHAR(512) NOT NULL,
                    object_type VARCHAR(512) NOT NULL,
                    distance_from_earth_kly VARCHAR(512) NOT NULL,
                    constellation VARCHAR(512) NOT NULL, 
                    apparent_mag DECIMAL(3, 2) NOT NULL,
                    right_asc VARCHAR(512) NOT NULL,
                    declination VARCHAR(512) NOT NULL,
                    observation_completed BOOLEAN NOT NULL,
                    owner_id INTEGER NOT NULL REFERENCES users(id)
            );
        `);

    console.log('create tables complete', getEmoji(), getEmoji(), getEmoji());
  }
  catch(err) {
    // problem? let's see the error...
    console.log(err);
  }
  finally {
    // success or failure, need to close the db connection
    client.end();
  }

}
