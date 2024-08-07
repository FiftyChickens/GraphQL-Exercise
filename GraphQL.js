// ### Basic Tasks

// 1. **List All Films**: Retrieve the titles of all films available in SWAPI.

//  {
//     allFilms {
//       films {
//         title
//       }
//     }
//   }

// 2. **Fetch a Specific Character**: Get the name of a specific character using their unique ID.

//  {
//   person(id: "cGVvcGxlOjIw") {
//     name
//   }
// }

// 3. **Explore Planets**: Get the names of the first 5 planets in the Star Wars universe.

//  {
//     allPlanets(first: 5) {
//       planets {
//       name
//       }
//     }
//   }

// 4. **Starships Information**: Fetch names and models of 3 starships.

//  {
//     allStarships(first: 3) {
//       starships {
//         name
//       }
//     }
//   }

// ### Intermediate Tasks

// 1. **Character and Their Starships**: For each of the first 5 characters, list the names of starships they've piloted.

//  {
//     allPeople(first: 5) {
//       people {
//         name
//         starshipConnection {
//           starships {
//             name
//           }
//         }
//       }
//     }
//   }

// 2. **Species and Their Languages**: Retrieve names and languages of 5 species.

//{
//     allSpecies(first: 5) {
//       species {
//         language
//       }
//     }
//   }

// 3. **Planets and Their Climates**: Query for the names and climates of 5 planets.
// 4. **Vehicles and Their Costs**: Get names and cost in credits for 3 vehicles.

// ### Advanced Tasks

// 1. **Characters in a Specific Film**: List all characters appearing in a given film by ID.
// 2. **Multi-Film Characters**: Find characters that appear in more than one film.
// 3. **Aggregate Film Statistics**: Calculate the total number of characters across all films.

// ### Complex Tasks

// 1. **Full Character Profiles**: Compile a full profile for a given character, including their films, starships, and homeworld.
// 2. **Link Characters with Their Planets**: Query the first 5 characters, including the name and population of their homeworld.
// 3. **Vehicles, Their Pilots, and Pilots' Species**: For the first 3 vehicles, list their names, pilots, and the species of those pilots.
// 4. **Films and Their Associated Entities**: For the first 3 films, list all related characters, planets, and starships.
