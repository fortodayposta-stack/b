export const productSpecifications = {
  // Toyota Land Cruiser
  2001: {
    engine: {
      type: 'i-FORCE MAX Turbocharged 2.4L Inline-4 + Electric Motor',
      typeRw: 'Moteur ya i-FORCE MAX Turbocharged 2.4L Inline-4 + Moteur Electrique',
      typeSw: 'Injini ya i-FORCE MAX Turbocharged 2.4L Inline-4 + Injini ya Umeme',
      horsepower: '326 HP @ 6,000 rpm',
      torque: '465 lb-ft @ 1,700 rpm',
      transmission: '8-speed automatic',
      driveType: 'Full-time 4WD',
    },
    dimensions: {
      length: '193.7 inches (4,920 mm)',
      width: '84.2 inches (2,139 mm)',
      height: '73.2 inches (1,859 mm)',
      groundClearance: '8.7 inches (221 mm)',
      curbWeight: '5,038 lbs (2,285 kg)',
    },
    fuel: {
      type: 'Premium Unleaded',
      typeRw: 'Essence Premium',
      typeSw: 'Petroli ya Hali ya Juu',
      tankCapacity: '17.9 gallons (67.8 L)',
      cityMpg: '22 MPG',
      highwayMpg: '25 MPG',
      combinedMpg: '23 MPG',
    },
    features: {
      seating: '5 passengers',
      cargoCapacity: '46.2 cu.ft.',
      safety: 'Toyota Safety Sense 3.0, Dynamic Radar Cruise Control, Lane Departure Alert, Blind Spot Monitor',
    },
  },
  
  // Mercedes-Benz E-Class
  2002: {
    engine: {
      type: '2.0L Turbocharged Inline-4',
      typeRw: 'Moteur 2.0L Turbocharged Inline-4',
      typeSw: 'Injini 2.0L Turbocharged Inline-4',
      horsepower: '255 HP @ 5,800 rpm',
      torque: '273 lb-ft @ 1,800 rpm',
      transmission: '9-speed automatic',
      driveType: 'Rear-Wheel Drive (RWD)',
    },
    dimensions: {
      length: '194.3 inches (4,935 mm)',
      width: '73.0 inches (1,854 mm)',
      height: '58.1 inches (1,475 mm)',
      wheelbase: '116.2 inches (2,951 mm)',
      curbWeight: '3,825 lbs (1,735 kg)',
    },
    fuel: {
      type: 'Premium Unleaded',
      typeRw: 'Essence Premium',
      typeSw: 'Petroli ya Hali ya Juu',
      tankCapacity: '17.4 gallons (65.9 L)',
      cityMpg: '23 MPG',
      highwayMpg: '32 MPG',
      combinedMpg: '26 MPG',
    },
    features: {
      seating: '5 passengers',
      interior: 'Luxury leather upholstery, Dual-zone climate control',
      safety: 'Active Brake Assist, Blind Spot Assist, Attention Assist',
    },
  },
  
  // Yamaha YZF-R6
  2101: {
    engine: {
      type: '599cc Liquid-Cooled DOHC Inline-4',
      typeRw: 'Moteur 599cc Liquid-Cooled DOHC Inline-4',
      typeSw: 'Injini 599cc Iliyopozwa kwa Maji DOHC Inline-4',
      horsepower: '117 HP @ 14,500 rpm',
      torque: '45 lb-ft @ 10,500 rpm',
      transmission: '6-speed close-ratio',
      topSpeed: '160 mph (257 km/h)',
    },
    dimensions: {
      length: '81.5 inches (2,070 mm)',
      width: '27.6 inches (700 mm)',
      height: '43.9 inches (1,115 mm)',
      seatHeight: '33.5 inches (850 mm)',
      wheelbase: '54.3 inches (1,380 mm)',
      curbWeight: '419 lbs (190 kg)',
    },
    fuel: {
      type: 'Unleaded Gasoline',
      typeRw: 'Essence Sans Plomb',
      typeSw: 'Petroli Isiyo na Risasi',
      tankCapacity: '4.6 gallons (18 L)',
      fuelConsumption: '40-45 MPG',
    },
    features: {
      suspension: 'Front: 43mm KYB inverted fork, Rear: KYB piggyback shock',
      brakes: 'Dual 320mm front discs with ABS, Single 220mm rear disc',
      electronics: 'Ride-by-wire throttle, Traction control, Quick shifter',
    },
  },
  
  // Honda CBR500R
  2102: {
    engine: {
      type: '471cc Liquid-Cooled Parallel Twin',
      typeRw: 'Moteur 471cc Liquid-Cooled Parallel Twin',
      typeSw: 'Injini 471cc Iliyopozwa kwa Maji Parallel Twin',
      horsepower: '47 HP @ 8,600 rpm',
      torque: '32 lb-ft @ 6,500 rpm',
      transmission: '6-speed',
      topSpeed: '115 mph (185 km/h)',
    },
    dimensions: {
      length: '83.7 inches (2,126 mm)',
      width: '28.3 inches (718 mm)',
      height: '46.9 inches (1,191 mm)',
      seatHeight: '31.1 inches (790 mm)',
      wheelbase: '53.7 inches (1,365 mm)',
      curbWeight: '423 lbs (192 kg)',
    },
    fuel: {
      type: 'Unleaded Gasoline',
      typeRw: 'Essence Sans Plomb',
      typeSw: 'Petroli Isiyo na Risasi',
      tankCapacity: '4.7 gallons (17.7 L)',
      fuelConsumption: '70 MPG',
    },
    features: {
      suspension: 'Front: 41mm telescopic fork, Rear: Pro-Link monoshock',
      brakes: 'Single 320mm front disc with ABS, Single 240mm rear disc',
      electronics: 'Combined ABS, Digital instrumentation',
    },
  },
  
  // Caterpillar Excavator 320
  2201: {
    engine: {
      type: 'Cat C7.1 ACERT Diesel Engine',
      typeRw: 'Moteur Cat C7.1 ACERT ya Mazutu',
      typeSw: 'Injini ya Cat C7.1 ACERT ya Dizeli',
      power: '158 HP (118 kW)',
      displacement: '7.1 L (433 cu in)',
      emissionStandard: 'Tier 4 Final / Stage V',
    },
    performance: {
      operatingWeight: '49,000 - 51,500 lbs (22,000 - 23,400 kg)',
      maxDigDepth: '21 ft 6 in (6.6 m)',
      maxReach: '31 ft 10 in (9.7 m)',
      bucketCapacity: '0.8 - 1.5 cubic yards',
    },
    dimensions: {
      transportLength: '32 ft 6 in (9.9 m)',
      transportWidth: '10 ft 2 in (3.1 m)',
      transportHeight: '10 ft 5 in (3.2 m)',
    },
    fuel: {
      tankCapacity: '103 gallons (390 L)',
      type: 'Diesel',
      typeRw: 'Mazutu',
      typeSw: 'Dizeli',
    },
    features: {
      hydraulicSystem: 'Advanced hydraulic system with load-sensing',
      cab: 'Spacious ROPS/FOPS certified cab with A/C',
      technology: 'Cat Product Link, Grade control ready',
    },
  },
  
  // John Deere Tractor
  2202: {
    engine: {
      type: 'John Deere PowerTech E Diesel',
      typeRw: 'Moteur John Deere PowerTech E ya Mazutu',
      typeSw: 'Injini ya John Deere PowerTech E ya Dizeli',
      power: '75 HP (56 kW)',
      displacement: '4.5 L (276 cu in)',
      cylinders: '4-cylinder',
    },
    performance: {
      ptoHorsepower: '65 HP',
      hydraulicFlow: '16 GPM (60 L/min)',
      liftCapacity: '4,960 lbs (2,250 kg)',
      operatingWeight: '7,695 lbs (3,490 kg)',
    },
    dimensions: {
      length: '152.8 inches (3,881 mm)',
      width: '88.2 inches (2,240 mm)',
      height: '106.3 inches (2,700 mm)',
      wheelbase: '86.6 inches (2,200 mm)',
    },
    fuel: {
      tankCapacity: '23.8 gallons (90 L)',
      type: 'Diesel',
      typeRw: 'Mazutu',
      typeSw: 'Dizeli',
    },
    features: {
      transmission: 'PowrReverser with 12F/12R gears',
      hitch: 'Category II 3-point hitch',
      comfort: 'Open operator station with suspension seat',
    },
  },
};
