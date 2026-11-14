// Curated starter records. Verify every field against primary mission sources before submission.
// "inactive" means the mission ended / hardware is no longer operating; "active" means it still communicates.
// "destroyed" is used for hardware intentionally or naturally destroyed during mission operations.
export const destinations = [
  { id:"moon", name:"The Moon", description:"A record of human and robotic arrivals on Earth's natural satellite.", color:"#d7d9df" },
  { id:"mars", name:"Mars", description:"Robotic explorers that studied the Red Planet from its surface.", color:"#e77b56" },
  { id:"jupiter", name:"Jupiter", description:"A probe that entered the giant planet's atmosphere and sent back data.", color:"#d5a36d" },
  { id:"saturn", name:"Saturn system", description:"A long-lived mission that ended with a planned plunge into Saturn.", color:"#d9bd82" },
  { id:"deep", name:"Deep space", description:"Explorers travelling beyond the planets and into interstellar space.", color:"#9e9aff" },
  { id:"small", name:"Small bodies", description:"Robotic encounters with asteroids and comets.", color:"#87b8ad" }
];

export const artifacts = [
  {
    id:"apollo11-stage", name:"Apollo 11 Lunar Module — descent stage", destination:"moon", year:"1969", agency:"NASA",
    status:"inactive", statusLabel:"LEFT ON THE MOON", type:"Crewed lunar lander component",
    summary:"The descent stage delivered Neil Armstrong and Buzz Aldrin to the lunar surface. The ascent stage carried the astronauts back to orbit; the descent stage remained behind.",
    achievement:"Enabled the first crewed lunar landing and supported surface exploration during Apollo 11.",
    location:"Tranquility Base, near the lunar equator. Exact position is documented in Apollo mission records.",
    fact:"The descent stage served as the launch platform for the ascent stage.",
    caveat:"The ascent stage is a separate component and should not be confused with the descent stage.",
    sources:[["Apollo 11 Mission Overview","https://www.nasa.gov/mission/apollo-11/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  },
  {
    id:"apollo15-rover", name:"Apollo 15 Lunar Roving Vehicle", destination:"moon", year:"1971", agency:"NASA",
    status:"inactive", statusLabel:"LEFT ON THE MOON", type:"Crewed electric rover",
    summary:"The first car driven by humans on another world. Apollo 15 astronauts used it to travel farther from the lunar module and carry more samples.",
    achievement:"Expanded the range of lunar field geology and helped astronauts collect and document samples.",
    location:"Hadley–Apennine region of the Moon, near the Apollo 15 landing site.",
    fact:"Apollo 15 was the first mission to use the Lunar Roving Vehicle.",
    caveat:"The rover remains at the landing site; it is not operational.",
    sources:[["Apollo 15 Mission Overview","https://www.nasa.gov/mission/apollo-15/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  },
  {
    id:"surveyor3", name:"Surveyor 3", destination:"moon", year:"1967", agency:"NASA",
    status:"inactive", statusLabel:"LEFT ON THE MOON", type:"Robotic lunar lander",
    summary:"Surveyor 3 soft-landed on the Moon and studied the surface. Apollo 12 astronauts later visited the spacecraft and returned selected parts to Earth.",
    achievement:"Provided close-up images and surface measurements that helped prepare for crewed lunar exploration.",
    location:"Oceanus Procellarum, visited by Apollo 12.",
    fact:"Apollo 12 astronauts retrieved Surveyor 3's camera and other components for examination on Earth.",
    caveat:"Do not describe Surveyor 3 as an Apollo lander; it was a separate robotic mission.",
    sources:[["NASA Solar System Exploration — Surveyor 3","https://science.nasa.gov/mission/surveyor-3/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  },
  {
    id:"apollo17-rover", name:"Apollo 17 Lunar Roving Vehicle", destination:"moon", year:"1972", agency:"NASA",
    status:"inactive", statusLabel:"LEFT ON THE MOON", type:"Crewed electric rover",
    summary:"The final Apollo lunar rover carried astronauts across the Taurus–Littrow valley, helping them investigate a geologically diverse region.",
    achievement:"Supported extensive field geology and sample collection during the final crewed Apollo lunar surface mission.",
    location:"Taurus–Littrow valley, Moon.",
    fact:"Apollo 17 was the last crewed Apollo lunar landing mission.",
    caveat:"The rover remains on the Moon and is no longer operational.",
    sources:[["Apollo 17 Mission Overview","https://www.nasa.gov/mission/apollo-17/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  },
  {
    id:"sojourner", name:"Sojourner", destination:"mars", year:"1997", agency:"NASA",
    status:"inactive", statusLabel:"MISSION ENDED", type:"Microrover",
    summary:"A small six-wheeled rover deployed by the Pathfinder lander. It examined nearby rocks and soil, proving that a mobile robot could explore Mars.",
    achievement:"Demonstrated a lower-cost approach to robotic mobility and returned surface science from Mars.",
    location:"Ares Vallis region, Mars, near the Pathfinder lander.",
    fact:"Sojourner was the first successful wheeled rover to operate on Mars.",
    caveat:"The rover's mission ended after communication with the lander was lost.",
    sources:[["NASA Mars Pathfinder","https://science.nasa.gov/mission/mars-pathfinder/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  },
  {
    id:"spirit", name:"Spirit (MER-A)", destination:"mars", year:"2004", agency:"NASA",
    status:"inactive", statusLabel:"MISSION ENDED", type:"Mars Exploration Rover",
    summary:"Spirit explored Gusev Crater, examining rocks and soils for evidence of past water activity. It became stuck in soft soil and eventually stopped communicating.",
    achievement:"Found evidence that ancient water altered rocks in the region, helping scientists reconstruct Mars' environmental history.",
    location:"Troy area of Gusev Crater, Mars (approximate regional description).",
    fact:"Spirit operated for years beyond its original 90-sol primary mission.",
    caveat:"Its final communication was in 2010; it is not currently active.",
    sources:[["NASA Mars Exploration Rover — Spirit","https://science.nasa.gov/mission/mer-spirit/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  },
  {
    id:"opportunity", name:"Opportunity (MER-B)", destination:"mars", year:"2004", agency:"NASA",
    status:"inactive", statusLabel:"MISSION ENDED", type:"Mars Exploration Rover",
    summary:"Opportunity explored Meridiani Planum and travelled far beyond its planned mission duration, studying rocks that recorded ancient watery environments.",
    achievement:"Found geological evidence that liquid water once affected the Martian environment.",
    location:"Perseverance Valley, on the rim of Endeavour Crater, Mars.",
    fact:"Opportunity's mission ended after a planet-wide dust event in 2018 prevented it from recharging and communicating.",
    caveat:"Its final communication was received in 2018. Do not label it as currently active.",
    sources:[["NASA Mars Exploration Rover — Opportunity","https://science.nasa.gov/mission/mer-opportunity/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  },
  {
    id:"phoenix", name:"Phoenix Mars Lander", destination:"mars", year:"2008", agency:"NASA",
    status:"inactive", statusLabel:"MISSION ENDED", type:"Stationary lander",
    summary:"Phoenix landed in Mars' northern polar region and used a robotic arm to dig into icy soil, investigating the history of water and habitability.",
    achievement:"Confirmed water ice beneath the Martian surface at its landing site.",
    location:"Green Valley, Vastitas Borealis, northern Mars.",
    fact:"Phoenix used a robotic arm to expose and sample subsurface ice.",
    caveat:"Phoenix was a stationary lander, not a rover.",
    sources:[["NASA Phoenix Mars Lander","https://science.nasa.gov/mission/phoenix/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  },
  {
    id:"insight", name:"InSight", destination:"mars", year:"2018", agency:"NASA",
    status:"inactive", statusLabel:"MISSION ENDED", type:"Geophysical lander",
    summary:"InSight studied the deep interior of Mars using a seismometer and heat-flow experiment, turning marsquakes into clues about the planet's structure.",
    achievement:"Detected marsquakes and improved scientific understanding of Mars' crust, mantle and core.",
    location:"Elysium Planitia, Mars.",
    fact:"InSight's seismometer recorded seismic waves from marsquakes and meteorite impacts.",
    caveat:"The mission ended in 2022 after dust accumulation reduced power and contact was lost.",
    sources:[["NASA InSight Mission","https://science.nasa.gov/mission/insight/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  },
  {
    id:"galileo-probe", name:"Galileo atmospheric probe", destination:"jupiter", year:"1995", agency:"NASA",
    status:"destroyed", statusLabel:"ENTERED JUPITER", type:"Atmospheric entry probe",
    summary:"Released by the Galileo spacecraft, the probe descended into Jupiter's atmosphere and transmitted measurements of its composition, pressure and temperature.",
    achievement:"Returned the first direct in-situ measurements of Jupiter's atmosphere.",
    location:"Entered Jupiter's atmosphere in December 1995; it was not left intact on a surface.",
    fact:"The probe transmitted data during its descent into Jupiter's atmosphere.",
    caveat:"This object was an atmospheric probe, not a lander or rover.",
    sources:[["NASA Galileo Mission","https://science.nasa.gov/mission/galileo/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  },
  {
    id:"cassini", name:"Cassini spacecraft", destination:"saturn", year:"1997–2017", agency:"NASA / ESA / ASI partnership",
    status:"destroyed", statusLabel:"MISSION ENDED IN SATURN", type:"Orbiter",
    summary:"Cassini spent 13 years studying Saturn, its rings and moons. The mission ended with a planned descent into Saturn's atmosphere to protect potentially habitable moons.",
    achievement:"Transformed knowledge of Saturn's rings and moons, including Enceladus' water-rich plumes and Titan's lakes.",
    location:"Intentionally entered Saturn's atmosphere on 15 September 2017.",
    fact:"Cassini was a NASA-led international mission with major contributions from ESA and the Italian Space Agency.",
    caveat:"Cassini was not abandoned on a surface. It was deliberately disposed of in Saturn's atmosphere. Agency attribution is shared.",
    sources:[["NASA Cassini Mission","https://science.nasa.gov/mission/cassini/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  },
  {
    id:"voyager1", name:"Voyager 1", destination:"deep", year:"1977", agency:"NASA",
    status:"active", statusLabel:"STILL COMMUNICATING", type:"Interstellar-space probe",
    summary:"Voyager 1 explored Jupiter and Saturn before continuing outward. It crossed the heliopause and is now exploring interstellar space.",
    achievement:"Returned landmark observations of the outer planets and the environment beyond the heliosphere.",
    location:"Travelling through interstellar space; its distance changes continuously.",
    fact:"Voyager 1 is the most distant human-made object from Earth.",
    caveat:"It is not abandoned: NASA has continued to receive and work with its signals. Live operational status can change; verify before presenting.",
    sources:[["NASA Voyager Mission","https://science.nasa.gov/mission/voyager/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  },
  {
    id:"voyager2", name:"Voyager 2", destination:"deep", year:"1977", agency:"NASA",
    status:"active", statusLabel:"STILL COMMUNICATING", type:"Interstellar-space probe",
    summary:"Voyager 2 visited Jupiter, Saturn, Uranus and Neptune before continuing outward beyond the heliosphere.",
    achievement:"The only spacecraft to have visited Uranus and Neptune at close range.",
    location:"Travelling through interstellar space; its distance changes continuously.",
    fact:"Voyager 2 completed the only close-up explorations of Uranus and Neptune.",
    caveat:"It is not abandoned; it remains a NASA mission with changing operational status.",
    sources:[["NASA Voyager Mission","https://science.nasa.gov/mission/voyager/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  },
  {
    id:"pioneer10", name:"Pioneer 10", destination:"deep", year:"1972", agency:"NASA",
    status:"inactive", statusLabel:"NO LONGER COMMUNICATING", type:"Outer-planet / deep-space probe",
    summary:"Pioneer 10 was the first spacecraft to make a close-up exploration of Jupiter. It continued outward on a trajectory away from the Sun.",
    achievement:"Returned the first close-up images and measurements of Jupiter and helped prepare for later outer-planet missions.",
    location:"On an outbound trajectory from the Solar System; its precise current position is not tracked by active communications.",
    fact:"The final signal from Pioneer 10 was received in 2003.",
    caveat:"Do not present a live position as known; the spacecraft no longer communicates.",
    sources:[["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"],["NASA Space Science Data Coordinated Archive","https://nssdc.gsfc.nasa.gov/"]]
  },
  {
    id:"near", name:"NEAR Shoemaker", destination:"small", year:"1996–2001", agency:"NASA",
    status:"inactive", statusLabel:"MISSION ENDED", type:"Asteroid orbiter / landing",
    summary:"NEAR Shoemaker studied the near-Earth asteroid Eros and completed a controlled descent to its surface at the end of its mission.",
    achievement:"Delivered the first close-up study of an asteroid from orbit and returned data from the surface after landing.",
    location:"On the surface of asteroid 433 Eros.",
    fact:"The spacecraft was not originally designed as a lander, but it survived its low-speed touchdown.",
    caveat:"NEAR Shoemaker was a NASA mission; it should not be confused with later asteroid missions.",
    sources:[["NASA NEAR Shoemaker","https://science.nasa.gov/mission/near-shoemaker/"],["NASA NSSDCA Master Catalog","https://nssdc.gsfc.nasa.gov/nmc/"]]
  }
];

export const statusText = {
  inactive:"Mission ended / inactive",
  active:"Still operating / communicating",
  destroyed:"Destroyed / atmospheric entry"
};