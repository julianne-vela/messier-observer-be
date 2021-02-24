/* eslint-disable */
const { getTypeId } = require('../data/dataUtils.js');

describe('data utils', () => {

    test('getTypeId should take in an object and all types then return the appropriate id for the matching object.', async() => {
        const expectation = 3;
        const object = {
            messier_id: "M11",
            object_type: "Open cluster",
        };
        const types = [
            {
                id: 1,
                type: 'Globular cluster',
            },
            {
                id: 2,
                type: 'Nebula with cluster',
            
            },
            {
                id: 3,
                type: 'Open cluster',
            
            },
            {
                id: 4,
                type: 'Supernova remnant',
            
            }
        ];

        const result = getTypeId(object, types);

        expect(result).toEqual(expectation);

    });
    
  });
