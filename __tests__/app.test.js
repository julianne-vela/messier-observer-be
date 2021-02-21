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

    test('returns neos', async() => {

      const expectation = [
        {
          'neo_reference_id': '2005879',
          'name': '5879 Almeria 1992 CH1',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2005879',
          'absolute_magnitude_h': 17.6,
          'estimated_diameter_min': 0.8027031673,
          'estimated_diameter_max': 1.7948988478,  'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        },
        {
          'neo_reference_id': '2489235',
          'name': '489235 2006 QA58',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2489235',
          'absolute_magnitude_h': 20.4,
          'estimated_diameter_min': 0.2210828104,
          'estimated_diameter_max': 0.4943561926,
          'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        },
        {
          'neo_reference_id': '2512234',
          'name': '512234 2015 VO66',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2512234',
          'absolute_magnitude_h': 20.5,
          'estimated_diameter_min': 0.2111324448,
          'estimated_diameter_max': 0.4721064988,
          'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        },
        {
          'neo_reference_id': '3744324',
          'name': '2016 CD248',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3744324',
          'absolute_magnitude_h': 22.2,
          'estimated_diameter_min': 0.096506147,
          'estimated_diameter_max': 0.2157943048,
          'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        },
        {
          'neo_reference_id': '3759724',
          'name': '2016 SA2',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3759724',
          'absolute_magnitude_h': 28.2,
          'estimated_diameter_min': 0.0060891262,
          'estimated_diameter_max': 0.0136157002,
          'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        },
        {
          'neo_reference_id': '3766594',
          'name': '2017 BY',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3766594',
          'absolute_magnitude_h': 25.5,
          'estimated_diameter_min': 0.0211132445,
          'estimated_diameter_max': 0.0472106499,
          'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        },
        {
          'neo_reference_id': '54016468',
          'name': '2020 GJ1',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54016468',
          'absolute_magnitude_h': 26.171,
          'estimated_diameter_min': 0.0155008308,
          'estimated_diameter_max': 0.0346609114,
          'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        },
        {
          'neo_reference_id': '54051321',
          'name': '2020 QZ3',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54051321',
          'absolute_magnitude_h': 21.171,
          'estimated_diameter_min': 0.1550083083,
          'estimated_diameter_max': 0.3466091145,
          'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        },
        {
          'neo_reference_id': '54103332',
          'name': '2020 YY4',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54103332',
          'absolute_magnitude_h': 20.746,
          'estimated_diameter_min': 0.1885189346,
          'estimated_diameter_max': 0.4215411527,
          'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        },
        {
          'neo_reference_id': '54110065',
          'name': '2021 CD1',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54110065',
          'absolute_magnitude_h': 24.102,
          'estimated_diameter_min': 0.0401934214,
          'estimated_diameter_max': 0.0898752225,
          'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        },
        {
          'neo_reference_id': '54110075',
          'name': '2021 CQ1',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54110075',
          'absolute_magnitude_h': 21.639,
          'estimated_diameter_min': 0.1249553849,
          'estimated_diameter_max': 0.2794087348,
          'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        },
        {
          'neo_reference_id': '54111261',
          'name': '2021 CA4',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54111261',
          'absolute_magnitude_h': 24.45,
          'estimated_diameter_min': 0.0342416731,
          'estimated_diameter_max': 0.0765667087,
          'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        },
        {
          'neo_reference_id': '54117569',
          'name': '2021 CS6',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54117569',
          'absolute_magnitude_h': 27.756,
          'estimated_diameter_min': 0.0074705913,
          'estimated_diameter_max': 0.0167047499,
          'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        },
        {
          'neo_reference_id': '54117596',
          'name': '2021 CW7',
          'nasa_jpl_url': 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54117596',
          'absolute_magnitude_h': 31.207,
          'estimated_diameter_min': 0.0015245967,
          'estimated_diameter_max': 0.0034091019,
          'is_potentially_hazardous_asteroid': false,
          'is_sentry_object': false
        }
      ];

      const data = await fakeRequest(app)
        .get('/neos')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });
  });
});
