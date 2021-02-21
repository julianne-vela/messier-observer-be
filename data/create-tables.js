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
                CREATE TABLE neos (
                    id SERIAL PRIMARY KEY NOT NULL,
                    neo_reference_id INTEGER NOT NULL,
                    name VARCHAR(512) NOT NULL,
                    nasa_jpl_url VARCHAR(512) NOT NULL,
                    absolute_magnitude_h DECIMAL(3, 5) NOT NULL,
                    estimated_diameter_min DECIMAL(18, 12) NOT NULL,
                    estimated_diameter_max DECIMAL(18, 12) NOT NULL,
                    is_potentially_hazardous_asteroid BOOLEAN NOT NULL,
                    is_sentry_object BOOLEAN NOT NULL,
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
