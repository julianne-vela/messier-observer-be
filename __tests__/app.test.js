/* eslint-disable quotes */
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
          "id": 1,
          "neo_reference_id": 2005879,
          "name": "5879 Almeria 1992 CH1",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2005879",
          "absolute_magnitude_h": "17.600",
          "estimated_diameter_min": "0.802703167300",
          "estimated_diameter_max": "1.794898847800",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        },
        {
          "id": 2,
          "neo_reference_id": 2489235,
          "name": "489235 2006 QA58",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2489235",
          "absolute_magnitude_h": "20.400",
          "estimated_diameter_min": "0.221082810400",
          "estimated_diameter_max": "0.494356192600",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        },
        {
          "id": 3,
          "neo_reference_id": 2512234,
          "name": "512234 2015 VO66",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2512234",
          "absolute_magnitude_h": "20.500",
          "estimated_diameter_min": "0.211132444800",
          "estimated_diameter_max": "0.472106498800",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        },
        {
          "id": 4,
          "neo_reference_id": 3744324,
          "name": "2016 CD248",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3744324",
          "absolute_magnitude_h": "22.200",
          "estimated_diameter_min": "0.096506147000",
          "estimated_diameter_max": "0.215794304800",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        },
        {
          "id": 5,
          "neo_reference_id": 3759724,
          "name": "2016 SA2",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3759724",
          "absolute_magnitude_h": "28.200",
          "estimated_diameter_min": "0.006089126200",
          "estimated_diameter_max": "0.013615700200",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        },
        {
          "id": 6,
          "neo_reference_id": 3766594,
          "name": "2017 BY",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3766594",
          "absolute_magnitude_h": "25.500",
          "estimated_diameter_min": "0.021113244500",
          "estimated_diameter_max": "0.047210649900",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        },
        {
          "id": 7,
          "neo_reference_id": 54016468,
          "name": "2020 GJ1",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54016468",
          "absolute_magnitude_h": "26.171",
          "estimated_diameter_min": "0.015500830800",
          "estimated_diameter_max": "0.034660911400",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        },
        {
          "id": 8,
          "neo_reference_id": 54051321,
          "name": "2020 QZ3",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54051321",
          "absolute_magnitude_h": "21.171",
          "estimated_diameter_min": "0.155008308300",
          "estimated_diameter_max": "0.346609114500",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        },
        {
          "id": 9,
          "neo_reference_id": 54103332,
          "name": "2020 YY4",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54103332",
          "absolute_magnitude_h": "20.746",
          "estimated_diameter_min": "0.188518934600",
          "estimated_diameter_max": "0.421541152700",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        },
        {
          "id": 10,
          "neo_reference_id": 54110065,
          "name": "2021 CD1",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54110065",
          "absolute_magnitude_h": "24.102",
          "estimated_diameter_min": "0.040193421400",
          "estimated_diameter_max": "0.089875222500",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        },
        {
          "id": 11,
          "neo_reference_id": 54110075,
          "name": "2021 CQ1",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54110075",
          "absolute_magnitude_h": "21.639",
          "estimated_diameter_min": "0.124955384900",
          "estimated_diameter_max": "0.279408734800",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        },
        {
          "id": 12,
          "neo_reference_id": 54111261,
          "name": "2021 CA4",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54111261",
          "absolute_magnitude_h": "24.450",
          "estimated_diameter_min": "0.034241673100",
          "estimated_diameter_max": "0.076566708700",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        },
        {
          "id": 13,
          "neo_reference_id": 54117569,
          "name": "2021 CS6",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54117569",
          "absolute_magnitude_h": "27.756",
          "estimated_diameter_min": "0.007470591300",
          "estimated_diameter_max": "0.016704749900",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        },
        {
          "id": 14,
          "neo_reference_id": 54117596,
          "name": "2021 CW7",
          "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54117596",
          "absolute_magnitude_h": "31.207",
          "estimated_diameter_min": "0.001524596700",
          "estimated_diameter_max": "0.003409101900",
          "is_potentially_hazardous_asteroid": false,
          "is_sentry_object": false,
          "owner_id": 1
        }
      ];
      
      const data = await fakeRequest(app)
        .get('/messier_catalog')
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(data.body).toEqual(expectation);
    });

    test('returns an individual neo with the matching neo_reference_id', async() => {

      const expectation = {
        'messier_id': 'M3',
        'ngc_ic_num': 'NGC 5272',
        'common_name': '–',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Messier3_-_HST_-_Potw1914a.jpg/75px-Messier3_-_HST_-_Potw1914a.jpg',
        'object_type': 'Globular cluster',
        'distance_from_earth_kly': 33.9,
        'constellation': 'Canes Venatici',
        'apparent_mag': 6.2,
        'right_asc': '13h 42m 11.62s',
        'declination': '+28° 22′ 38.2″',
        "owner_id": 1
      };
      
      const data = await fakeRequest(app)
        .get('/messier_catalog/3')
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(data.body).toEqual(expectation);
    });
  });
});
