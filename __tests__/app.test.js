/* eslint-disable */
require('dotenv').config();

const { execSync } = require('child_process');

const fakeRequest = require('supertest');
const app = require('../lib/app');
const client = require('../lib/client');

describe('app routes', () => {
  describe('routes', () => {
    let token;
  
    beforeAll(async done => {
      execSync('npm run setup-db');
  
      client.connect();
  
      const signInData = await fakeRequest(app)
        .post('/auth/signup')
        .send({
          email: 'jon@user.com',
          password: '1234'
        });
      
      token = signInData.body.token; // eslint-disable-line
  
      return done();
    });
  
    afterAll(done => {
      return client.end(done);
    });

    test('returns messier_catalog', async() => {

      const expectation = [
            {
                "id": 10,
                "messier_id": "M10",
                "ngc_ic_num": "NGC 6254",
                "common_name": "–",
                "image": "//upload.wikimedia.org/wikipedia/commons/thumb/6/67/Messier_10_Hubble_WikiSky.jpg/75px-Messier_10_Hubble_WikiSky.jpg",
                "type_id": 1,
                "distance_from_earth_kly": "14.3",
                "constellation": "Ophiuchus",
                "apparent_mag": "6.4",
                "right_asc": "16h 57m 8.92s",
                "declination": "−04° 05′ 58.07″",
                "observation_completed": false,
                "owner_id": 1
            },
            {
                "id": 9,
                "messier_id": "M9",
                "ngc_ic_num": "NGC 6333",
                "common_name": "–",
                "image": "//upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Globular_cluster_Messier_9_%28captured_by_the_Hubble_Space_Telescope%29.tif/lossy-page1-75px-Globular_cluster_Messier_9_%28captured_by_the_Hubble_Space_Telescope%29.tif.jpg",
                "type_id": 1,
                "distance_from_earth_kly": "25.8",
                "constellation": "Ophiuchus",
                "apparent_mag": "8.4",
                "right_asc": "17h 19m 11.78s",
                "declination": "−18° 30′ 58.5″",
                "observation_completed": false,
                "owner_id": 1
            },
            {
                "id": 5,
                "messier_id": "M5",
                "ngc_ic_num": "NGC 5904",
                "common_name": "–",
                "image": "//upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Messier_5_-_HST.jpg/75px-Messier_5_-_HST.jpg",
                "type_id": 1,
                "distance_from_earth_kly": "24.5",
                "constellation": "Serpens",
                "apparent_mag": "6.7",
                "right_asc": "15h 18m 33.22s",
                "declination": "+02° 04′ 51.7″",
                "observation_completed": false,
                "owner_id": 1
            },
            {
                "id": 4,
                "messier_id": "M4",
                "ngc_ic_num": "NGC 6121",
                "common_name": "–",
                "image": "//upload.wikimedia.org/wikipedia/commons/thumb/9/90/Globular_star_cluster_Messier_4.jpg/75px-Globular_star_cluster_Messier_4.jpg",
                "type_id": 1,
                "distance_from_earth_kly": "7.2",
                "constellation": "Scorpius",
                "apparent_mag": "5.9",
                "right_asc": "16h 23m 35.22s",
                "declination": "−26° 31′ 32.7″",
                "observation_completed": false,
                "owner_id": 1
            },
            {
                "id": 3,
                "messier_id": "M3",
                "ngc_ic_num": "NGC 5272",
                "common_name": "–",
                "image": "//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Messier3_-_HST_-_Potw1914a.jpg/75px-Messier3_-_HST_-_Potw1914a.jpg",
                "type_id": 1,
                "distance_from_earth_kly": "33.9",
                "constellation": "Canes Venatici",
                "apparent_mag": "6.2",
                "right_asc": "13h 42m 11.62s",
                "declination": "+28° 22′ 38.2″",
                "observation_completed": false,
                "owner_id": 1
            },
            {
                "id": 2,
                "messier_id": "M2",
                "ngc_ic_num": "NGC 7089",
                "common_name": "–",
                "image": "//upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Messier2_-_HST_-_Potw1913a.jpg/75px-Messier2_-_HST_-_Potw1913a.jpg",
                "type_id": 1,
                "distance_from_earth_kly": "33",
                "constellation": "Aquarius",
                "apparent_mag": "6.3",
                "right_asc": "21h 33m 27.02s",
                "declination": "−00° 49′ 23.7″",
                "observation_completed": false,
                "owner_id": 1
            },
            {
                "id": 8,
                "messier_id": "M8",
                "ngc_ic_num": "NGC 6523",
                "common_name": "Lagoon Nebula",
                "image": "//upload.wikimedia.org/wikipedia/commons/thumb/7/76/LagoonHunterWilson.jpg/75px-LagoonHunterWilson.jpg",
                "type_id": 2,
                "distance_from_earth_kly": "4.1",
                "constellation": "Sagittarius",
                "apparent_mag": "6.0",
                "right_asc": "18h 03m 37s",
                "declination": "−24° 23′ 12″",
                "observation_completed": false,
                "owner_id": 1
            },
            {
                "id": 11,
                "messier_id": "M11",
                "ngc_ic_num": "NGC 6705",
                "common_name": "Wild Duck Cluster",
                "image": "//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Eso1430a.jpg/75px-Eso1430a.jpg",
                "type_id": 3,
                "distance_from_earth_kly": "6.2",
                "constellation": "Scutum",
                "apparent_mag": "6.3",
                "right_asc": "18h 51.1m",
                "declination": "−06° 16′",
                "observation_completed": false,
                "owner_id": 1
            },
            {
                "id": 7,
                "messier_id": "M7",
                "ngc_ic_num": "NGC 6475",
                "common_name": "Ptolemy Cluster",
                "image": "//upload.wikimedia.org/wikipedia/commons/thumb/a/a5/The_star_cluster_Messier_7.jpg/75px-The_star_cluster_Messier_7.jpg",
                "type_id": 3,
                "distance_from_earth_kly": "0.65–1.31",
                "constellation": "Scorpius",
                "apparent_mag": "3.3",
                "right_asc": "17h 53m 51.2s",
                "declination": "−34° 47′ 34″",
                "observation_completed": false,
                "owner_id": 1
            },
            {
                "id": 6,
                "messier_id": "M6",
                "ngc_ic_num": "NGC 6405",
                "common_name": "Butterfly Cluster",
                "image": "//upload.wikimedia.org/wikipedia/commons/thumb/7/7f/M6a.jpg/75px-M6a.jpg",
                "type_id": 3,
                "distance_from_earth_kly": "1.6",
                "constellation": "Scorpius",
                "apparent_mag": "4.2",
                "right_asc": "17h 40.1m",
                "declination": "−32° 13′",
                "observation_completed": false,
                "owner_id": 1
            },
            {
                "id": 1,
                "messier_id": "M1",
                "ngc_ic_num": "NGC 1952",
                "common_name": "Crab Nebula",
                "image": "//upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/75px-Crab_Nebula.jpg",
                "type_id": 4,
                "distance_from_earth_kly": "4.9–8.1",
                "constellation": "Taurus",
                "apparent_mag": "8.4",
                "right_asc": "05h 34m 31.94s",
                "declination": "+22° 00′ 52.2″",
                "observation_completed": false,
                "owner_id": 1
            }
        ];
      
      const data = await fakeRequest(app)
        .get('/messier_catalog')
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(data.body).toEqual(expectation);
    });

    test('returns an individual messierObject with the matching id', async() => {

      const expectation = {
        "id": 3,
        "messier_id": "M3",
        "ngc_ic_num": "NGC 5272",
        "common_name": "–",
        "image": "//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Messier3_-_HST_-_Potw1914a.jpg/75px-Messier3_-_HST_-_Potw1914a.jpg",
        "type_id": 1,
        "distance_from_earth_kly": "33.9",
        "constellation": "Canes Venatici",
        "apparent_mag": "6.2",
        "right_asc": "13h 42m 11.62s",
        "declination": "+28° 22′ 38.2″",
        "observation_completed": false,
        "owner_id": 1
      };
      
      const data = await fakeRequest(app)
        .get('/messier_catalog/3')
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(data.body).toEqual(expectation);
    });

    test('creates a new entry and that new entry is in our messier_catalog DB', async() => {

      const newEntry = {
        "messier_id": "Mtest",
        "ngc_ic_num": "NGC test",
        "common_name": "test Cluster",
        "image": "//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/test.jpg/75px-test.jpg",
        "type_id": 3,
        "distance_from_earth_kly": "6.2",
        "constellation": "test",
        "apparent_mag": "6.3",
        "right_asc": "test",
        "declination": "test",
        "observation_completed": false
      };

      const expectedEntry = {
        ...newEntry,
        id: 12,
        owner_id: 1,
      };
      
      const data = await fakeRequest(app)
        .post('/messier_catalog')
        .send(newEntry)
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(data.body).toEqual(expectedEntry);

      const messier_catalog = await fakeRequest(app)
        .get('/messier_catalog') 
        .send(newEntry)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(messier_catalog.body).toContainEqual(expectedEntry);
    });

    test('deletes a single entry with the matching id', async() => {

      const expectation = {
        "id": 11,
        "messier_id": "M11",
        "ngc_ic_num": "NGC 6705",
        "common_name": "Wild Duck Cluster",
        "image": "//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Eso1430a.jpg/75px-Eso1430a.jpg",
        "type_id": 3,
        "distance_from_earth_kly": "6.2",
        "constellation": "Scutum",
        "apparent_mag": "6.3",
        "right_asc": "18h 51.1m",
        "declination": "−06° 16′",
        "observation_completed": false,
        "owner_id": 1
      }

      const data = await fakeRequest(app)
        .delete('/messier_catalog/12')
        .expect('Content-Type', /json/)
        .expect(200);

      const nothing = await fakeRequest(app)
        .get('/messier_catalog/12')
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(nothing.body).toEqual('');
    });

    test('updates an entry in our DB', async() => {

      const newEntry = {
          "id": 1,
          "messier_id": "M1",
          "ngc_ic_num": "NGC 1952",
          "common_name": "Crab Nebula",
          "image": "//upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/75px-Crab_Nebula.jpg",
          "type_id": 4,
          "distance_from_earth_kly": "4.9–8.1",
          "constellation": "Taurus",
          "apparent_mag": "8.4",
          "right_asc": "05h 34m 31.94s",
          "declination": "+22° 00′ 52.2″",
          "observation_completed": false,
      };

      const expectedEntry = {
        ...newEntry,
        id: 1,
        owner_id: 1,
      };
      
      await fakeRequest(app)
        .put('/messier_catalog/1')
        .send(newEntry)
        .expect('Content-Type', /json/)
        .expect(200);

      const updatedObject = await fakeRequest(app)
        .get('/messier_catalog/1')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(updatedObject.body).toEqual(expectedEntry);
    });
  });
});
