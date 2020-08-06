'use strict';


/**
 * searches policies
 * By passing in the appropriate options, you can search for available policies in the system 
 *
 * osName String os name
 * osVersion String device model
 * brand String device brand
 * clientVersion String frontend client version
 * policyNumber String  (optional)
 * results Integer number of records to retrun (optional)
 * pagination Integer number of records to skip for pagination (optional)
 * status String policy status (optional)
 * vehiclePlates String vehicle insured plates (optional)
 * personPhone String policy holder phone (optional)
 * personEmail String policy holder email (optional)
 * returns SearchResult
 **/
exports.searchPolicy = function (osName, osVersion, brand, clientVersion, policyNumber, results, pagination, status, vehiclePlates, personPhone, personEmail) {
  return new Promise(function (resolve, reject) {
    const person = {
      id: '59f6dece-1c10-49a1-9be6-bada6b7928c7',
      email: 'example@email.com',
      names: 'juan carlos',
      personType: 'FISICA',
      phones: [{
        number: '3320357045',
        type: 'main',
        countryNumberCode: '+52'
      }],
      rfc: 'GALJ620819V96',
      personTypeData: {
        birthdate: '1962-08-19',
        civilStatus: {
          id: 0,
          description: 'unknown'
        },
        firstLastName: 'garciía',
        secondLastName: 'luna',
        gender: {
          code: 0,
          name: 'No Definido'
        }
      }
    }
    var examples = {};
    examples['application/json'] = {
      policies: [{
        id: '81b1c0a8-4843-45c5-8836-734a0bb26718',
        number: 'ae-101',
        status: 'ISSUED',
        starteDate: '2020-07-22T17:00:07Z',
        endDate: '2021-07-22T17:00:07Z',
        issueDate: '2020-07-21T17:00:07Z',
        policyHolder: person,
        fee: 0,
        taxes: 454070,
        netPremium: 2837910,
        total: 3291980,
        subtotal: 2837910,
        policyType: {
          id: 'b6bee0c5-15ae-4ad9-8f6e-c7a0ed021103',
          name: 'valor comercial anual',
          description: 'poliza anual de valor comercial'
        },
        insuredEntities: [{
          coverages: [{
              id: '4d2a605d-a74a-41e3-b79d-a3c63988ab8a',
              coverage_type: {
                id: 'ca2ead83-5b81-4480-9a0b-744ba31601c0',
                name: 'AL'
              },
              enabled: true,
              premium: 233330
            },
            {
              id: '15503afe-19e2-470b-8d57-697fb3ac45e7',
              coverage_type: {
                id: '6c434f2a-d0f3-4442-b4c5-6680ec0fda6d',
                name: 'GM'
              },
              sum_assured: 400000,
              enabled: true,
              premium: 53500
            },
            {
              id: '650021f5-69a4-49e9-9eaf-bbb01400c7d2',
              coverage_type: {
                id: '42d81165-f6f7-4c0d-b33b-999a3f3ee905',
                name: 'RCP'
              },
              sum_assured: 1500000,
              enabled: true,
              premium: 271990
            },
            {
              id: '8b1585ce-d5be-45c5-9d7b-ba043cd06689',
              coverage_type: {
                id: 'fa67b067-ffdf-431b-aef5-53e60dfe6be6',
                name: 'RCB'
              },
              sum_assured: 1500000,
              enabled: true,
              premium: 407990
            },
            {
              id: 'f4609945-fc92-4c1f-a5f3-a7a01a8cbe91',
              coverage_type: {
                id: 'c2b3cdd7-2c89-4d92-aa04-6b343ad91425',
                name: 'DM'
              },
              deductible: 0.1,
              sum_assured: 243408,
              enabled: true,
              premium: 1167500
            },
            {
              id: '8cda7f03-1a49-4a61-a9f0-70b716d89efa',
              coverage_type: {
                id: 'ed22aeaf-8623-4d4d-ad59-106a774ed9a5',
                name: 'AV'
              },
              enabled: true,
              premium: 100000
            },
            {
              id: 'c37b9590-2d30-4fff-a94f-92fb1842357f',
              coverage_type: {
                id: 'fc9e6248-5746-4480-a9d0-d683cb6a6c10',
                name: 'RT'
              },
              deductible: 0.05,
              sum_assured: 243408,
              enabled: true,
              premium: 603600
            }
          ],
          beneficiaries: [
            person
          ],
          entity: {
            brand: {
              code: 8,
              name: 'dodge',
              amisCode: 2
            },
            model: {
              code: 171,
              name: 'challenger',
              amisCode: 1108
            },
            year: {
              code: 1116,
              name: '2014'
            },
            version: {
              code: 4804,
              name: 'srt8 atx, v8, 6.4l, 470 cp, 4 puertas, aut',
              'class': {
                code: 17,
                name: 'deportivo'
              },
              vehicleType: {
                code: 1,
                name: 'automovil'
              }
            },
            plates: 'AEJ2030',
            vin: '19XFB2F5XCE316987',
            color: {
              code: 0,
              name: 'no definido'
            },
            usage: {
              code: 1,
              name: 'particular'
            }
          },
          drivers: [
            person
          ]
        }]
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}