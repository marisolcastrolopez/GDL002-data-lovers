require('../src/data.js');
const injuries = require('../src/data/injuries/injuries.json');
const j = injuries;

describe('filtersYears', () => {
  it('deberia ser una funcion', () => {
    expect(typeof(window.filterObj.filtersYears)).toBe('function');
  });

it('debería devolver', () => {
  expect(window.filterObj.filtersYears(j)).toEqual([{
    "Total_Injured_Persons": 2259336,
    "Total_Injured_Persons_Air": 278,
    "Total_Injured_Persons_Bus_Occupants": 17000,
    "Total_Injured_Persons_Commuter_Carrier": 2,
    "Total_Injured_Persons_Employee_Or_Worker": 1369,
    "Total_Injured_Persons_Freight_Vessel": 254,
    "Total_Injured_Persons_Gas_Pipeline": 100,
    "Total_Injured_Persons_General_Aviation": 256,
    "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 3,
    "Total_Injured_Persons_Highway": 2239000,
    "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 222,
    "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 888,
    "Total_Injured_Persons_Industrial_Or_Other": 153,
    "Total_Injured_Persons_Motorcyclists": 82000,
    "Total_Injured_Persons_On_Demand_Air_Taxi": 3,
    "Total_Injured_Persons_Other_Counts": null,
    "Total_Injured_Persons_Other_Incident": 13000,
    "Total_Injured_Persons_Other_Incident_Transit": 4777,
    "Total_Injured_Persons_Other_Incidents": 3923,
    "Total_Injured_Persons_Other_Incidents_Railroads": 6990,
    "Total_Injured_Persons_Passenger_Car_Occupants": 1253000,
    "Total_Injured_Persons_Passenger_Or_Occupant": 19076,
    "Total_Injured_Persons_Passenger_Vessel": 210,
    "Total_Injured_Persons_Pedalcyclists": 52000,
    "Total_Injured_Persons_Pedestrians": 70000,
    "Total_Injured_Persons_Pipeline": 103,
    "Total_Injured_Persons_Rail": 4282,
    "Total_Injured_Persons_Rail_Freight": 4097,
    "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 667,
    "Total_Injured_Persons_Rail_Freight_Other_Incidents": 3067,
    "Total_Injured_Persons_Rail_Freight_Train_Accidents": 53,
    "Total_Injured_Persons_Rail_Freight_Trespassers": 310,
    "Total_Injured_Persons_Rail_Road_Trespassers": 390,
    "Total_Injured_Persons_Railroad": 718,
    "Total_Injured_Persons_Railroad_Alone": 8378,
    "Total_Injured_Persons_Railroad_Train_Accidents": 57,
    "Total_Injured_Persons_Recreational_Boating": 3153,
    "Total_Injured_Persons_Train_Accidents_Rail_Roads": 110,
    "Total_Injured_Persons_Transit_Non_Rail": 16697,
    "Total_Injured_Persons_Transit_Rail": 8436,
    "Total_Injured_Persons_Transit_Total": 25222,
    "Total_Injured_Persons_Trespassers": 80,
    "Total_Injured_Persons_Truck_Occupants_Large": 20000,
    "Total_Injured_Persons_Truck_Occupants_Light": 733000,
    "Total_Injured_Persons_US_Air_Carrier": 17,
    "Total_Injured_Persons_Water": 3770,
    "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 622,
    "Total_Injured_Persons_Water_Vessel_Related": 128,
    "Year": "2010-01-04"
  },
  {
    "Total_Injured_Persons": 2237019,
    "Total_Injured_Persons_Air": 363,
    "Total_Injured_Persons_Bus_Occupants": 13000,
    "Total_Injured_Persons_Commuter_Carrier": 0,
    "Total_Injured_Persons_Employee_Or_Worker": 1377,
    "Total_Injured_Persons_Freight_Vessel": 232,
    "Total_Injured_Persons_Gas_Pipeline": 49,
    "Total_Injured_Persons_General_Aviation": 328,
    "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 2,
    "Total_Injured_Persons_Highway": 2217000,
    "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 352,
    "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 1048,
    "Total_Injured_Persons_Industrial_Or_Other": 158,
    "Total_Injured_Persons_Motorcyclists": 81000,
    "Total_Injured_Persons_On_Demand_Air_Taxi": 15,
    "Total_Injured_Persons_Other_Counts": null,
    "Total_Injured_Persons_Other_Incident": 15000,
    "Total_Injured_Persons_Other_Incident_Transit": 5621,
    "Total_Injured_Persons_Other_Incidents": 3935,
    "Total_Injured_Persons_Other_Incidents_Railroads": 6808,
    "Total_Injured_Persons_Passenger_Car_Occupants": 1240000,
    "Total_Injured_Persons_Passenger_Or_Occupant": 15921,
    "Total_Injured_Persons_Passenger_Vessel": 352,
    "Total_Injured_Persons_Pedalcyclists": 48000,
    "Total_Injured_Persons_Pedestrians": 69000,
    "Total_Injured_Persons_Pipeline": 51,
    "Total_Injured_Persons_Rail": 4486,
    "Total_Injured_Persons_Rail_Freight": 3953,
    "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 696,
    "Total_Injured_Persons_Rail_Freight_Other_Incidents": 2873,
    "Total_Injured_Persons_Rail_Freight_Train_Accidents": 60,
    "Total_Injured_Persons_Rail_Freight_Trespassers": 324,
    "Total_Injured_Persons_Rail_Road_Trespassers": 366,
    "Total_Injured_Persons_Railroad": 830,
    "Total_Injured_Persons_Railroad_Alone": 8439,
    "Total_Injured_Persons_Railroad_Train_Accidents": 157,
    "Total_Injured_Persons_Recreational_Boating": 3081,
    "Total_Injured_Persons_Train_Accidents_Rail_Roads": 217,
    "Total_Injured_Persons_Transit_Non_Rail": 14746,
    "Total_Injured_Persons_Transit_Rail": 8057,
    "Total_Injured_Persons_Transit_Total": 22919,
    "Total_Injured_Persons_Trespassers": 42,
    "Total_Injured_Persons_Truck_Occupants_Large": 23000,
    "Total_Injured_Persons_Truck_Occupants_Light": 728000,
    "Total_Injured_Persons_US_Air_Carrier": 20,
    "Total_Injured_Persons_Water": 3823,
    "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 720,
    "Total_Injured_Persons_Water_Vessel_Related": 99,
    "Year": "2011-01-04"
  },
  {
    "Total_Injured_Persons": 2381619,
    "Total_Injured_Persons_Air": 274,
    "Total_Injured_Persons_Bus_Occupants": 12000,
    "Total_Injured_Persons_Commuter_Carrier": 0,
    "Total_Injured_Persons_Employee_Or_Worker": 1439,
    "Total_Injured_Persons_Freight_Vessel": 58,
    "Total_Injured_Persons_Gas_Pipeline": 50,
    "Total_Injured_Persons_General_Aviation": 247,
    "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 4,
    "Total_Injured_Persons_Highway": 2362000,
    "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 283,
    "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 971,
    "Total_Injured_Persons_Industrial_Or_Other": 92,
    "Total_Injured_Persons_Motorcyclists": 93000,
    "Total_Injured_Persons_On_Demand_Air_Taxi": 9,
    "Total_Injured_Persons_Other_Counts": null,
    "Total_Injured_Persons_Other_Incident": 16000,
    "Total_Injured_Persons_Other_Incident_Transit": 5726,
    "Total_Injured_Persons_Other_Incidents": 4029,
    "Total_Injured_Persons_Other_Incidents_Railroads": 6606,
    "Total_Injured_Persons_Passenger_Car_Occupants": 1328000,
    "Total_Injured_Persons_Passenger_Or_Occupant": 16160,
    "Total_Injured_Persons_Passenger_Vessel": 177,
    "Total_Injured_Persons_Pedalcyclists": 49000,
    "Total_Injured_Persons_Pedestrians": 76000,
    "Total_Injured_Persons_Pipeline": 54,
    "Total_Injured_Persons_Rail": 4425,
    "Total_Injured_Persons_Rail_Freight": 4034,
    "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 698,
    "Total_Injured_Persons_Rail_Freight_Other_Incidents": 2576,
    "Total_Injured_Persons_Rail_Freight_Train_Accidents": 429,
    "Total_Injured_Persons_Rail_Freight_Trespassers": 330,
    "Total_Injured_Persons_Rail_Road_Trespassers": 410,
    "Total_Injured_Persons_Railroad": 763,
    "Total_Injured_Persons_Railroad_Alone": 8449,
    "Total_Injured_Persons_Railroad_Train_Accidents": 33,
    "Total_Injured_Persons_Recreational_Boating": 3000,
    "Total_Injured_Persons_Train_Accidents_Rail_Roads": 462,
    "Total_Injured_Persons_Transit_Non_Rail": 15047,
    "Total_Injured_Persons_Transit_Rail": 8278,
    "Total_Injured_Persons_Transit_Total": 23325,
    "Total_Injured_Persons_Trespassers": 80,
    "Total_Injured_Persons_Truck_Occupants_Large": 25000,
    "Total_Injured_Persons_Truck_Occupants_Light": 762000,
    "Total_Injured_Persons_US_Air_Carrier": 18,
    "Total_Injured_Persons_Water": 3327,
    "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 682,
    "Total_Injured_Persons_Water_Vessel_Related": 137,
    "Year": "2012-01-04"
  },
  {
    "Total_Injured_Persons": 2333501,
    "Total_Injured_Persons_Air": 249,
    "Total_Injured_Persons_Bus_Occupants": 23000,
    "Total_Injured_Persons_Commuter_Carrier": 9,
    "Total_Injured_Persons_Employee_Or_Worker": 1554,
    "Total_Injured_Persons_Freight_Vessel": 196,
    "Total_Injured_Persons_Gas_Pipeline": 36,
    "Total_Injured_Persons_General_Aviation": 215,
    "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 6,
    "Total_Injured_Persons_Highway": 2313000,
    "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 221,
    "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 975,
    "Total_Injured_Persons_Industrial_Or_Other": 157,
    "Total_Injured_Persons_Motorcyclists": 88000,
    "Total_Injured_Persons_On_Demand_Air_Taxi": 16,
    "Total_Injured_Persons_Other_Counts": null,
    "Total_Injured_Persons_Other_Incident": 16000,
    "Total_Injured_Persons_Other_Incident_Transit": 6444,
    "Total_Injured_Persons_Other_Incidents": 4179,
    "Total_Injured_Persons_Other_Incidents_Railroads": 7002,
    "Total_Injured_Persons_Passenger_Car_Occupants": 1296000,
    "Total_Injured_Persons_Passenger_Or_Occupant": 16624,
    "Total_Injured_Persons_Passenger_Vessel": 459,
    "Total_Injured_Persons_Pedalcyclists": 48000,
    "Total_Injured_Persons_Pedestrians": 66000,
    "Total_Injured_Persons_Pipeline": 42,
    "Total_Injured_Persons_Rail": 4736,
    "Total_Injured_Persons_Rail_Freight": 4003,
    "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 754,
    "Total_Injured_Persons_Rail_Freight_Other_Incidents": 2823,
    "Total_Injured_Persons_Rail_Freight_Train_Accidents": 71,
    "Total_Injured_Persons_Rail_Freight_Trespassers": 355,
    "Total_Injured_Persons_Rail_Road_Trespassers": 434,
    "Total_Injured_Persons_Railroad": 778,
    "Total_Injured_Persons_Railroad_Alone": 8739,
    "Total_Injured_Persons_Railroad_Train_Accidents": 257,
    "Total_Injured_Persons_Recreational_Boating": 2620,
    "Total_Injured_Persons_Train_Accidents_Rail_Roads": 328,
    "Total_Injured_Persons_Transit_Non_Rail": 15805,
    "Total_Injured_Persons_Transit_Rail": 8817,
    "Total_Injured_Persons_Transit_Total": 24622,
    "Total_Injured_Persons_Trespassers": 79,
    "Total_Injured_Persons_Truck_Occupants_Large": 24000,
    "Total_Injured_Persons_Truck_Occupants_Light": 750000,
    "Total_Injured_Persons_US_Air_Carrier": 9,
    "Total_Injured_Persons_Water": 3432,
    "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 589,
    "Total_Injured_Persons_Water_Vessel_Related": 164,
    "Year": "2013-01-04"
  },
  {
    "Total_Injured_Persons": 2351372,
    "Total_Injured_Persons_Air": 263,
    "Total_Injured_Persons_Bus_Occupants": 14000,
    "Total_Injured_Persons_Commuter_Carrier": 0,
    "Total_Injured_Persons_Employee_Or_Worker": 1680,
    "Total_Injured_Persons_Freight_Vessel": 225,
    "Total_Injured_Persons_Gas_Pipeline": 93,
    "Total_Injured_Persons_General_Aviation": 234,
    "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 0,
    "Total_Injured_Persons_Highway": 2332000,
    "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 195,
    "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 872,
    "Total_Injured_Persons_Industrial_Or_Other": 144,
    "Total_Injured_Persons_Motorcyclists": 92000,
    "Total_Injured_Persons_On_Demand_Air_Taxi": 15,
    "Total_Injured_Persons_Other_Counts": null,
    "Total_Injured_Persons_Other_Incident": 10000,
    "Total_Injured_Persons_Other_Incident_Transit": 5264,
    "Total_Injured_Persons_Other_Incidents": 4345,
    "Total_Injured_Persons_Other_Incidents_Railroads": 7351,
    "Total_Injured_Persons_Passenger_Car_Occupants": 1292000,
    "Total_Injured_Persons_Passenger_Or_Occupant": 17101,
    "Total_Injured_Persons_Passenger_Vessel": 337,
    "Total_Injured_Persons_Pedalcyclists": 50000,
    "Total_Injured_Persons_Pedestrians": 65000,
    "Total_Injured_Persons_Pipeline": 93,
    "Total_Injured_Persons_Rail": 4689,
    "Total_Injured_Persons_Rail_Freight": 4102,
    "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 679,
    "Total_Injured_Persons_Rail_Freight_Other_Incidents": 3009,
    "Total_Injured_Persons_Rail_Freight_Train_Accidents": 51,
    "Total_Injured_Persons_Rail_Freight_Trespassers": 363,
    "Total_Injured_Persons_Rail_Road_Trespassers": 424,
    "Total_Injured_Persons_Railroad": 667,
    "Total_Injured_Persons_Railroad_Alone": 8786,
    "Total_Injured_Persons_Railroad_Train_Accidents": 88,
    "Total_Injured_Persons_Recreational_Boating": 2678,
    "Total_Injured_Persons_Train_Accidents_Rail_Roads": 139,
    "Total_Injured_Persons_Transit_Non_Rail": 16532,
    "Total_Injured_Persons_Transit_Rail": 7513,
    "Total_Injured_Persons_Transit_Total": 24045,
    "Total_Injured_Persons_Trespassers": 61,
    "Total_Injured_Persons_Truck_Occupants_Large": 27000,
    "Total_Injured_Persons_Truck_Occupants_Light": 782000,
    "Total_Injured_Persons_US_Air_Carrier": 14,
    "Total_Injured_Persons_Water": 3384,
    "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 608,
    "Total_Injured_Persons_Water_Vessel_Related": 98,
    "Year": "2014-01-04"
  },
  {
    "Total_Injured_Persons": 2443175,
    "Total_Injured_Persons_Air": 284,
    "Total_Injured_Persons_Bus_Occupants": null,
    "Total_Injured_Persons_Commuter_Carrier": 4,
    "Total_Injured_Persons_Employee_Or_Worker": 1794,
    "Total_Injured_Persons_Freight_Vessel": 165,
    "Total_Injured_Persons_Gas_Pipeline": 49,
    "Total_Injured_Persons_General_Aviation": 248,
    "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 0,
    "Total_Injured_Persons_Highway": 2424000,
    "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 322,
    "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 1032,
    "Total_Injured_Persons_Industrial_Or_Other": 74,
    "Total_Injured_Persons_Motorcyclists": 88000,
    "Total_Injured_Persons_On_Demand_Air_Taxi": 9,
    "Total_Injured_Persons_Other_Counts": null,
    "Total_Injured_Persons_Other_Incident": 10000,
    "Total_Injured_Persons_Other_Incident_Transit": 3563,
    "Total_Injured_Persons_Other_Incidents": 4282,
    "Total_Injured_Persons_Other_Incidents_Railroads": 7065,
    "Total_Injured_Persons_Passenger_Car_Occupants": 1378000,
    "Total_Injured_Persons_Passenger_Or_Occupant": 18895,
    "Total_Injured_Persons_Passenger_Vessel": 313,
    "Total_Injured_Persons_Pedalcyclists": 45000,
    "Total_Injured_Persons_Pedestrians": 70000,
    "Total_Injured_Persons_Pipeline": 49,
    "Total_Injured_Persons_Rail": 4969,
    "Total_Injured_Persons_Rail_Freight": 4101,
    "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 710,
    "Total_Injured_Persons_Rail_Freight_Other_Incidents": 2783,
    "Total_Injured_Persons_Rail_Freight_Train_Accidents": 263,
    "Total_Injured_Persons_Rail_Freight_Trespassers": 345,
    "Total_Injured_Persons_Rail_Road_Trespassers": 415,
    "Total_Injured_Persons_Railroad": 860,
    "Total_Injured_Persons_Railroad_Alone": 9070,
    "Total_Injured_Persons_Railroad_Train_Accidents": 295,
    "Total_Injured_Persons_Recreational_Boating": 2679,
    "Total_Injured_Persons_Train_Accidents_Rail_Roads": 558,
    "Total_Injured_Persons_Transit_Non_Rail": 16851,
    "Total_Injured_Persons_Transit_Rail": 7401,
    "Total_Injured_Persons_Transit_Total": 24252,
    "Total_Injured_Persons_Trespassers": 70,
    "Total_Injured_Persons_Truck_Occupants_Large": 30000,
    "Total_Injured_Persons_Truck_Occupants_Light": 803000,
    "Total_Injured_Persons_US_Air_Carrier": 23,
    "Total_Injured_Persons_Water": 3231,
    "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 424,
    "Total_Injured_Persons_Water_Vessel_Related": 128,
    "Year": "2015-01-04"
  }]);
});

/*describe('filtersYears is a function', () => {
  it('is a function', () => {
    expect(typeof filterObj.filtersYears()).toBe('filtersYears');
  });

  /*it('returns `example`', () => {
    expect(example()).toBe('example');
  });*/




  
/*describe('filtersYears is a function', () => {
  it('deberia ser una funcion', () => {
    expect(x.filtersYears).toBe(
      {
        "Total_Injured_Persons": 2259336,
        "Total_Injured_Persons_Air": 278,
        "Total_Injured_Persons_Bus_Occupants": 17000,
        "Total_Injured_Persons_Commuter_Carrier": 2,
        "Total_Injured_Persons_Employee_Or_Worker": 1369,
        "Total_Injured_Persons_Freight_Vessel": 254,
        "Total_Injured_Persons_Gas_Pipeline": 100,
        "Total_Injured_Persons_General_Aviation": 256,
        "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 3,
        "Total_Injured_Persons_Highway": 2239000,
        "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 222,
        "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 888,
        "Total_Injured_Persons_Industrial_Or_Other": 153,
        "Total_Injured_Persons_Motorcyclists": 82000,
        "Total_Injured_Persons_On_Demand_Air_Taxi": 3,
        "Total_Injured_Persons_Other_Counts": null,
        "Total_Injured_Persons_Other_Incident": 13000,
        "Total_Injured_Persons_Other_Incident_Transit": 4777,
        "Total_Injured_Persons_Other_Incidents": 3923,
        "Total_Injured_Persons_Other_Incidents_Railroads": 6990,
        "Total_Injured_Persons_Passenger_Car_Occupants": 1253000,
        "Total_Injured_Persons_Passenger_Or_Occupant": 19076,
        "Total_Injured_Persons_Passenger_Vessel": 210,
        "Total_Injured_Persons_Pedalcyclists": 52000,
        "Total_Injured_Persons_Pedestrians": 70000,
        "Total_Injured_Persons_Pipeline": 103,
        "Total_Injured_Persons_Rail": 4282,
        "Total_Injured_Persons_Rail_Freight": 4097,
        "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 667,
        "Total_Injured_Persons_Rail_Freight_Other_Incidents": 3067,
        "Total_Injured_Persons_Rail_Freight_Train_Accidents": 53,
        "Total_Injured_Persons_Rail_Freight_Trespassers": 310,
        "Total_Injured_Persons_Rail_Road_Trespassers": 390,
        "Total_Injured_Persons_Railroad": 718,
        "Total_Injured_Persons_Railroad_Alone": 8378,
        "Total_Injured_Persons_Railroad_Train_Accidents": 57,
        "Total_Injured_Persons_Recreational_Boating": 3153,
        "Total_Injured_Persons_Train_Accidents_Rail_Roads": 110,
        "Total_Injured_Persons_Transit_Non_Rail": 16697,
        "Total_Injured_Persons_Transit_Rail": 8436,
        "Total_Injured_Persons_Transit_Total": 25222,
        "Total_Injured_Persons_Trespassers": 80,
        "Total_Injured_Persons_Truck_Occupants_Large": 20000,
        "Total_Injured_Persons_Truck_Occupants_Light": 733000,
        "Total_Injured_Persons_US_Air_Carrier": 17,
        "Total_Injured_Persons_Water": 3770,
        "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 622,
        "Total_Injured_Persons_Water_Vessel_Related": 128,
        "Year": "2010-01-04"
      },
      {
        "Total_Injured_Persons": 2237019,
        "Total_Injured_Persons_Air": 363,
        "Total_Injured_Persons_Bus_Occupants": 13000,
        "Total_Injured_Persons_Commuter_Carrier": 0,
        "Total_Injured_Persons_Employee_Or_Worker": 1377,
        "Total_Injured_Persons_Freight_Vessel": 232,
        "Total_Injured_Persons_Gas_Pipeline": 49,
        "Total_Injured_Persons_General_Aviation": 328,
        "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 2,
        "Total_Injured_Persons_Highway": 2217000,
        "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 352,
        "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 1048,
        "Total_Injured_Persons_Industrial_Or_Other": 158,
        "Total_Injured_Persons_Motorcyclists": 81000,
        "Total_Injured_Persons_On_Demand_Air_Taxi": 15,
        "Total_Injured_Persons_Other_Counts": null,
        "Total_Injured_Persons_Other_Incident": 15000,
        "Total_Injured_Persons_Other_Incident_Transit": 5621,
        "Total_Injured_Persons_Other_Incidents": 3935,
        "Total_Injured_Persons_Other_Incidents_Railroads": 6808,
        "Total_Injured_Persons_Passenger_Car_Occupants": 1240000,
        "Total_Injured_Persons_Passenger_Or_Occupant": 15921,
        "Total_Injured_Persons_Passenger_Vessel": 352,
        "Total_Injured_Persons_Pedalcyclists": 48000,
        "Total_Injured_Persons_Pedestrians": 69000,
        "Total_Injured_Persons_Pipeline": 51,
        "Total_Injured_Persons_Rail": 4486,
        "Total_Injured_Persons_Rail_Freight": 3953,
        "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 696,
        "Total_Injured_Persons_Rail_Freight_Other_Incidents": 2873,
        "Total_Injured_Persons_Rail_Freight_Train_Accidents": 60,
        "Total_Injured_Persons_Rail_Freight_Trespassers": 324,
        "Total_Injured_Persons_Rail_Road_Trespassers": 366,
        "Total_Injured_Persons_Railroad": 830,
        "Total_Injured_Persons_Railroad_Alone": 8439,
        "Total_Injured_Persons_Railroad_Train_Accidents": 157,
        "Total_Injured_Persons_Recreational_Boating": 3081,
        "Total_Injured_Persons_Train_Accidents_Rail_Roads": 217,
        "Total_Injured_Persons_Transit_Non_Rail": 14746,
        "Total_Injured_Persons_Transit_Rail": 8057,
        "Total_Injured_Persons_Transit_Total": 22919,
        "Total_Injured_Persons_Trespassers": 42,
        "Total_Injured_Persons_Truck_Occupants_Large": 23000,
        "Total_Injured_Persons_Truck_Occupants_Light": 728000,
        "Total_Injured_Persons_US_Air_Carrier": 20,
        "Total_Injured_Persons_Water": 3823,
        "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 720,
        "Total_Injured_Persons_Water_Vessel_Related": 99,
        "Year": "2011-01-04"
      },
      {
        "Total_Injured_Persons": 2381619,
        "Total_Injured_Persons_Air": 274,
        "Total_Injured_Persons_Bus_Occupants": 12000,
        "Total_Injured_Persons_Commuter_Carrier": 0,
        "Total_Injured_Persons_Employee_Or_Worker": 1439,
        "Total_Injured_Persons_Freight_Vessel": 58,
        "Total_Injured_Persons_Gas_Pipeline": 50,
        "Total_Injured_Persons_General_Aviation": 247,
        "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 4,
        "Total_Injured_Persons_Highway": 2362000,
        "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 283,
        "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 971,
        "Total_Injured_Persons_Industrial_Or_Other": 92,
        "Total_Injured_Persons_Motorcyclists": 93000,
        "Total_Injured_Persons_On_Demand_Air_Taxi": 9,
        "Total_Injured_Persons_Other_Counts": null,
        "Total_Injured_Persons_Other_Incident": 16000,
        "Total_Injured_Persons_Other_Incident_Transit": 5726,
        "Total_Injured_Persons_Other_Incidents": 4029,
        "Total_Injured_Persons_Other_Incidents_Railroads": 6606,
        "Total_Injured_Persons_Passenger_Car_Occupants": 1328000,
        "Total_Injured_Persons_Passenger_Or_Occupant": 16160,
        "Total_Injured_Persons_Passenger_Vessel": 177,
        "Total_Injured_Persons_Pedalcyclists": 49000,
        "Total_Injured_Persons_Pedestrians": 76000,
        "Total_Injured_Persons_Pipeline": 54,
        "Total_Injured_Persons_Rail": 4425,
        "Total_Injured_Persons_Rail_Freight": 4034,
        "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 698,
        "Total_Injured_Persons_Rail_Freight_Other_Incidents": 2576,
        "Total_Injured_Persons_Rail_Freight_Train_Accidents": 429,
        "Total_Injured_Persons_Rail_Freight_Trespassers": 330,
        "Total_Injured_Persons_Rail_Road_Trespassers": 410,
        "Total_Injured_Persons_Railroad": 763,
        "Total_Injured_Persons_Railroad_Alone": 8449,
        "Total_Injured_Persons_Railroad_Train_Accidents": 33,
        "Total_Injured_Persons_Recreational_Boating": 3000,
        "Total_Injured_Persons_Train_Accidents_Rail_Roads": 462,
        "Total_Injured_Persons_Transit_Non_Rail": 15047,
        "Total_Injured_Persons_Transit_Rail": 8278,
        "Total_Injured_Persons_Transit_Total": 23325,
        "Total_Injured_Persons_Trespassers": 80,
        "Total_Injured_Persons_Truck_Occupants_Large": 25000,
        "Total_Injured_Persons_Truck_Occupants_Light": 762000,
        "Total_Injured_Persons_US_Air_Carrier": 18,
        "Total_Injured_Persons_Water": 3327,
        "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 682,
        "Total_Injured_Persons_Water_Vessel_Related": 137,
        "Year": "2012-01-04"
      },
      {
        "Total_Injured_Persons": 2333501,
        "Total_Injured_Persons_Air": 249,
        "Total_Injured_Persons_Bus_Occupants": 23000,
        "Total_Injured_Persons_Commuter_Carrier": 9,
        "Total_Injured_Persons_Employee_Or_Worker": 1554,
        "Total_Injured_Persons_Freight_Vessel": 196,
        "Total_Injured_Persons_Gas_Pipeline": 36,
        "Total_Injured_Persons_General_Aviation": 215,
        "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 6,
        "Total_Injured_Persons_Highway": 2313000,
        "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 221,
        "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 975,
        "Total_Injured_Persons_Industrial_Or_Other": 157,
        "Total_Injured_Persons_Motorcyclists": 88000,
        "Total_Injured_Persons_On_Demand_Air_Taxi": 16,
        "Total_Injured_Persons_Other_Counts": null,
        "Total_Injured_Persons_Other_Incident": 16000,
        "Total_Injured_Persons_Other_Incident_Transit": 6444,
        "Total_Injured_Persons_Other_Incidents": 4179,
        "Total_Injured_Persons_Other_Incidents_Railroads": 7002,
        "Total_Injured_Persons_Passenger_Car_Occupants": 1296000,
        "Total_Injured_Persons_Passenger_Or_Occupant": 16624,
        "Total_Injured_Persons_Passenger_Vessel": 459,
        "Total_Injured_Persons_Pedalcyclists": 48000,
        "Total_Injured_Persons_Pedestrians": 66000,
        "Total_Injured_Persons_Pipeline": 42,
        "Total_Injured_Persons_Rail": 4736,
        "Total_Injured_Persons_Rail_Freight": 4003,
        "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 754,
        "Total_Injured_Persons_Rail_Freight_Other_Incidents": 2823,
        "Total_Injured_Persons_Rail_Freight_Train_Accidents": 71,
        "Total_Injured_Persons_Rail_Freight_Trespassers": 355,
        "Total_Injured_Persons_Rail_Road_Trespassers": 434,
        "Total_Injured_Persons_Railroad": 778,
        "Total_Injured_Persons_Railroad_Alone": 8739,
        "Total_Injured_Persons_Railroad_Train_Accidents": 257,
        "Total_Injured_Persons_Recreational_Boating": 2620,
        "Total_Injured_Persons_Train_Accidents_Rail_Roads": 328,
        "Total_Injured_Persons_Transit_Non_Rail": 15805,
        "Total_Injured_Persons_Transit_Rail": 8817,
        "Total_Injured_Persons_Transit_Total": 24622,
        "Total_Injured_Persons_Trespassers": 79,
        "Total_Injured_Persons_Truck_Occupants_Large": 24000,
        "Total_Injured_Persons_Truck_Occupants_Light": 750000,
        "Total_Injured_Persons_US_Air_Carrier": 9,
        "Total_Injured_Persons_Water": 3432,
        "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 589,
        "Total_Injured_Persons_Water_Vessel_Related": 164,
        "Year": "2013-01-04"
      },
      {
        "Total_Injured_Persons": 2351372,
        "Total_Injured_Persons_Air": 263,
        "Total_Injured_Persons_Bus_Occupants": 14000,
        "Total_Injured_Persons_Commuter_Carrier": 0,
        "Total_Injured_Persons_Employee_Or_Worker": 1680,
        "Total_Injured_Persons_Freight_Vessel": 225,
        "Total_Injured_Persons_Gas_Pipeline": 93,
        "Total_Injured_Persons_General_Aviation": 234,
        "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 0,
        "Total_Injured_Persons_Highway": 2332000,
        "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 195,
        "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 872,
        "Total_Injured_Persons_Industrial_Or_Other": 144,
        "Total_Injured_Persons_Motorcyclists": 92000,
        "Total_Injured_Persons_On_Demand_Air_Taxi": 15,
        "Total_Injured_Persons_Other_Counts": null,
        "Total_Injured_Persons_Other_Incident": 10000,
        "Total_Injured_Persons_Other_Incident_Transit": 5264,
        "Total_Injured_Persons_Other_Incidents": 4345,
        "Total_Injured_Persons_Other_Incidents_Railroads": 7351,
        "Total_Injured_Persons_Passenger_Car_Occupants": 1292000,
        "Total_Injured_Persons_Passenger_Or_Occupant": 17101,
        "Total_Injured_Persons_Passenger_Vessel": 337,
        "Total_Injured_Persons_Pedalcyclists": 50000,
        "Total_Injured_Persons_Pedestrians": 65000,
        "Total_Injured_Persons_Pipeline": 93,
        "Total_Injured_Persons_Rail": 4689,
        "Total_Injured_Persons_Rail_Freight": 4102,
        "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 679,
        "Total_Injured_Persons_Rail_Freight_Other_Incidents": 3009,
        "Total_Injured_Persons_Rail_Freight_Train_Accidents": 51,
        "Total_Injured_Persons_Rail_Freight_Trespassers": 363,
        "Total_Injured_Persons_Rail_Road_Trespassers": 424,
        "Total_Injured_Persons_Railroad": 667,
        "Total_Injured_Persons_Railroad_Alone": 8786,
        "Total_Injured_Persons_Railroad_Train_Accidents": 88,
        "Total_Injured_Persons_Recreational_Boating": 2678,
        "Total_Injured_Persons_Train_Accidents_Rail_Roads": 139,
        "Total_Injured_Persons_Transit_Non_Rail": 16532,
        "Total_Injured_Persons_Transit_Rail": 7513,
        "Total_Injured_Persons_Transit_Total": 24045,
        "Total_Injured_Persons_Trespassers": 61,
        "Total_Injured_Persons_Truck_Occupants_Large": 27000,
        "Total_Injured_Persons_Truck_Occupants_Light": 782000,
        "Total_Injured_Persons_US_Air_Carrier": 14,
        "Total_Injured_Persons_Water": 3384,
        "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 608,
        "Total_Injured_Persons_Water_Vessel_Related": 98,
        "Year": "2014-01-04"
      },
      {
        "Total_Injured_Persons": 2443175,
        "Total_Injured_Persons_Air": 284,
        "Total_Injured_Persons_Bus_Occupants": null,
        "Total_Injured_Persons_Commuter_Carrier": 4,
        "Total_Injured_Persons_Employee_Or_Worker": 1794,
        "Total_Injured_Persons_Freight_Vessel": 165,
        "Total_Injured_Persons_Gas_Pipeline": 49,
        "Total_Injured_Persons_General_Aviation": 248,
        "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 0,
        "Total_Injured_Persons_Highway": 2424000,
        "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 322,
        "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 1032,
        "Total_Injured_Persons_Industrial_Or_Other": 74,
        "Total_Injured_Persons_Motorcyclists": 88000,
        "Total_Injured_Persons_On_Demand_Air_Taxi": 9,
        "Total_Injured_Persons_Other_Counts": null,
        "Total_Injured_Persons_Other_Incident": 10000,
        "Total_Injured_Persons_Other_Incident_Transit": 3563,
        "Total_Injured_Persons_Other_Incidents": 4282,
        "Total_Injured_Persons_Other_Incidents_Railroads": 7065,
        "Total_Injured_Persons_Passenger_Car_Occupants": 1378000,
        "Total_Injured_Persons_Passenger_Or_Occupant": 18895,
        "Total_Injured_Persons_Passenger_Vessel": 313,
        "Total_Injured_Persons_Pedalcyclists": 45000,
        "Total_Injured_Persons_Pedestrians": 70000,
        "Total_Injured_Persons_Pipeline": 49,
        "Total_Injured_Persons_Rail": 4969,
        "Total_Injured_Persons_Rail_Freight": 4101,
        "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 710,
        "Total_Injured_Persons_Rail_Freight_Other_Incidents": 2783,
        "Total_Injured_Persons_Rail_Freight_Train_Accidents": 263,
        "Total_Injured_Persons_Rail_Freight_Trespassers": 345,
        "Total_Injured_Persons_Rail_Road_Trespassers": 415,
        "Total_Injured_Persons_Railroad": 860,
        "Total_Injured_Persons_Railroad_Alone": 9070,
        "Total_Injured_Persons_Railroad_Train_Accidents": 295,
        "Total_Injured_Persons_Recreational_Boating": 2679,
        "Total_Injured_Persons_Train_Accidents_Rail_Roads": 558,
        "Total_Injured_Persons_Transit_Non_Rail": 16851,
        "Total_Injured_Persons_Transit_Rail": 7401,
        "Total_Injured_Persons_Transit_Total": 24252,
        "Total_Injured_Persons_Trespassers": 70,
        "Total_Injured_Persons_Truck_Occupants_Large": 30000,
        "Total_Injured_Persons_Truck_Occupants_Light": 803000,
        "Total_Injured_Persons_US_Air_Carrier": 23,
        "Total_Injured_Persons_Water": 3231,
        "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 424,
        "Total_Injured_Persons_Water_Vessel_Related": 128,
        "Year": "2015-01-04"
      });
    });
  });*/});