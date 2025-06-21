// 🔥 Import Firebase from CDN (Direct URL)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// 🔥 Firebase Configuration (Your Credentials)
const firebaseConfig = {
  apiKey: "AIzaSyBAglAu7aDHVF68Szg_eyaIdIuXXIzwPJM",
  authDomain: "sc9-draft.firebaseapp.com",
  databaseURL: "https://sc9-draft-default-rtdb.firebaseio.com",
  projectId: "sc9-draft",
  storageBucket: "sc9-draft.firebasestorage.app",
  messagingSenderId: "624184902731",
  appId: "1:624184902731:web:333821678a86edb143f9ce",
  measurementId: "G-H4XCMF59TL"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);

console.log("🔥 Firebase Initialized!");

const pokemonPoints = {
 "lucario": 3,
  "conkeldurr": 3,
  "excadrill": 3,
  "krookodile": 3,
  "darmanitan": 3,
  "amoonguss": 3,
  "volcarona": 3,
  "ferrothorn": 3,
  "haxorus": 3,
  "chandelure": 3,
  "skarmory": 3,
  "mienshao": 3,
  "gliscor": 3,
  "bisharp": 3,
  "starmie": 3,
  "ninetales": 3,
  "weavile": 3,
  "mamoswine": 3,
  "metagross": 3,
  "hydreigon": 3,
  "tyranitar": 3,
  "serperior": 2,
  "emboar": 2,
  "samurott": 2,
  "ampharos": 2,
  "scolipede": 2,
  "weezing": 2,
  "magnezone": 2,
  "arcanine": 2,
  "magmortar": 2,
  "electivire": 2,
  "crobat": 2,
  "gigalith": 2,
  "whimsicott": 2,
  "lilligant": 2,
  "musharna": 2,
  "clefable": 2,
  "vaporeon": 2,
  "jolteon": 2,
  "espeon": 2,
  "umbreon": 2,
  "braviary": 2,
  "mandibuzz": 2,
  "crustle": 2,
  "scrafty": 2,
  "sigilyph": 2,
  "flygon": 2,
  "cofagrigus": 2,
  "carracosta": 2,
  "archeops": 2,
  "klinklang": 2,
  "roserade": 2,
  "gothitelle": 2,
  "reuniclus": 2,
  "heracross": 2,
  "zoroark": 2,
  "escavalier": 2,
  "accelgor": 2,
  "sawsbuck": 2,
  "aggron": 2,
  "claydol": 2,
  "galvantula": 2,
  "eelektross": 2,
  "jellicent": 2,
  "durant": 2,
  "cryogonal": 2,
  "drapion": 2,
  "absol": 2,
  "tangrowth": 2,
  "seismitoad": 2,
  "lapras": 2,
  "altaria": 2,
  "bronzong": 2,
  "vanilluxe": 2,
  "ditto": 2,
  "bouffalant": 2,
  "druddigon": 2,
  "golurk": 2,
  "crawdaunt": 2,
  "yanmega": 2,
  "toxicroak": 2,
  "watchog": 1,
  "liepard": 1,
  "unfezant": 1,
  "leavanny": 1,
  "sunflora": 1,
  "stoutland": 1,
  "golduck": 1,
  "azumarill": 1,
  "dunsparce": 1,
  "audino": 1,
  "simisage": 1,
  "simisear": 1,
  "simipour": 1,
  "raticate": 1,
  "muk": 1,
  "swoobat": 1,
  "steelix": 1,
  "delcatty": 1,
  "lopunny": 1,
  "flareon": 1,
  "leafeon": 1,
  "glaceon": 1,
  "basculin": 1,
  "garbodor": 1,
  "maractus": 1,
  "vespiquen": 1,
  "emolga": 1,
  "pinsir": 1,
  "zebstrika": 1,
  "floatzel": 1,
  "swanna": 1,
  "castform": 1,
  "probopass": 1,
  "alomomola": 1,
  "zangoose": 1,
  "seviper": 1,
  "beheeyem": 1,
  "heatmor": 1,
  "beartic": 1,
  "camerupt": 1,
  "grumpig": 1,
  "drifblim": 1,
  "banette": 1,
  "pelipper": 1,
  "lunatone": 1,
  "solrock": 1,
  "stunfisk": 1,
  "shuckle": 1,
  "mantine": 1,
  "octillery": 1,
  "corsola": 1,
  "wailord": 1,
  "walrein": 1,
  "delibird": 1,
  "dewgong": 1,
  "throh": 1,
  "sawk": 1,
  "slaking": 1,
  "wigglytuff": 1,
  "lickilicky": 1,
  "tropius": 1,
  "carnivine": 1
};

let countdown; // Stores the countdown interval
let timeLeft = 5 * 60; // 5 minutes in seconds
let isTimerRunning = false; // Tracks if the timer is active
let isTimerPaused = false; // Tracks if the timer is paused

// ✨ Updated: getPokeMMOLink now handles both Porygon-Z and Rotom forms.
function getPokeMMOLink(pokemon) {
  const baseUrl = "https://pokemmo.shoutwiki.com/wiki/";
  const nameLower = pokemon.name.toLowerCase();

  // Special case for Porygon-Z
  if (nameLower === "porygon-z") {
    return baseUrl + "Porygon-Z";
  }
  
  // Special case for Rotom forms
  if (["rotom-heat", "rotom-wash", "rotom-mow", "rotom-fan", "rotom-frost"].includes(nameLower)) {
    return baseUrl + "Rotom#" + toPascalCase(pokemon.name);
  }
  
  // Default conversion: Capitalize the first letter
  const formattedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return baseUrl + formattedName;
}

// ✨ Updated: getPokemonTypes now expects an object with a name and an array of type names.
function getPokemonTypes(pokemon) {
  const nameLower = pokemon.name.toLowerCase();
  
  // Check for Rotom and its forms
  if (nameLower.startsWith("rotom")) {
    switch(nameLower) {
      case "rotom":
        return ["electric", "ghost"];
      case "rotom-heat":
        return ["electric", "fire"];
      case "rotom-wash":
        return ["electric", "water"];
      case "rotom-mow":
        return ["electric", "grass"];
      case "rotom-fan":
        return ["electric", "flying"];
      case "rotom-frost":
        return ["electric", "ice"];
      default:
        return pokemon.types; // Fallback if not matched
    }
  }
  return pokemon.types;
}

function toPascalCase(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

function restorePokemonToDraftBoard(pokemonName) {
  const tiersDiv = document.getElementById("tiers");
  let points = pokemonPoints[pokemonName];
  if (points === undefined) {
    console.warn(`Pokemon ${pokemonName} not found in points list.`);
    return;
  }

  let tierSection = document.getElementById(`tier-${points}`);
  if (!tierSection) {
    console.warn(`Tier ${points} not found for ${pokemonName}.`);
    return;
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      const frontSprite = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
      const backSprite = data.sprites.versions["generation-v"]["black-white"].animated.back_default;
      if (!frontSprite || !backSprite) return;

      // Use getPokeMMOLink helper for the wiki URL
      let wikiUrl = getPokeMMOLink({ name: pokemonName });

      // ✨ Updated: Use getPokemonTypes to fix typing for Rotom forms.
      let baseTypes = (data.past_types && data.past_types.length > 0)
        ? data.past_types[0].types.map(t => t.type.name)
        : data.types.map(t => t.type.name);

      let correctedTypes = getPokemonTypes({ name: pokemonName, types: baseTypes });

      console.log(`🧬 [restore] ${pokemonName} typing source:`, correctedTypes);
      
      let typesHTML = '<div class="pokemon-types">';
      correctedTypes.forEach((typeName) => {
        typesHTML += `<img src="Type Labels/${typeName}.png" alt="${typeName}" class="type-icon">`;
      });
      typesHTML += "</div>";

      // ✨ Create Card with the corrected wikiUrl and typesHTML
      let pokeDiv = document.createElement("div");
      pokeDiv.classList.add("pokemon-card", "text-center", "shadow-sm");
      pokeDiv.innerHTML = `
          <img src="${frontSprite}" class="pokemon-gif" alt="${pokemonName}" data-front="${frontSprite}" data-back="${backSprite}">
          <p class="pokemon-name">${pokemonName.toUpperCase()} (${pokemonPoints[pokemonName]} Pts)</p>
          ${typesHTML}
          <button class="draft-btn btn btn-sm" data-name="${pokemonName}">Draft</button>
          <a href="${wikiUrl}" target="_blank" class="pokemmo-btn btn btn-sm">Visit PokeMMO</a>
        `;

      pokeDiv.querySelector(".pokemon-gif").addEventListener("click", function () {
        this.src = this.src === this.dataset.front ? this.dataset.back : this.dataset.front;
      });

      tierSection.appendChild(pokeDiv);
    })
    .catch((error) => console.error("Error restoring Pokémon:", error));
}

function toggleDraftTimer() {
  const timerElement = document.getElementById("draft-timer");

  if (isTimerPaused) {
    startTimer(); // ⏯ Resume from paused state
    return;
  }

  if (isTimerRunning) {
    clearInterval(countdown);
    isTimerRunning = false;
    isTimerPaused = true;
    timerElement.textContent += " (Paused)";
    return;
  }

  startTimer(); // ⏳ Start the timer if it's not running
}

// 🏁 Starts the countdown
function startTimer() {
  const timerElement = document.getElementById("draft-timer");
  const resetButton = document.getElementById("resetTimerBtn");

  isTimerRunning = true;
  isTimerPaused = false;
  resetButton.style.display = "inline-block"; // 🎯 Show the reset button

  function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerElement.textContent = `Draft Timer: ${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  }

  updateTimerDisplay(); // Show initial time

  countdown = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerElement.textContent = "Pokémon Draft Tier List"; // Reset title
      isTimerRunning = false;
      resetButton.style.display = "none"; // 🎯 Hide reset button when timer ends
    } else {
      timeLeft--;
      updateTimerDisplay();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(countdown);
  timeLeft = 5 * 60; // Reset to 5 minutes
  isTimerRunning = false;
  isTimerPaused = false;
  document.getElementById("draft-timer").textContent =
    "Pokémon Draft Tier List";
  document.getElementById("resetTimerBtn").style.display = "none"; // 🎯 Hide reset button
}

async function undoLastDraftForPlayer(player) {
  console.log(`🔄 Undo button clicked for ${player}...`);

  let draftedRef = ref(db, "drafted");
  let draftedSnapshot = await get(draftedRef);
  let draftedPokemons = draftedSnapshot.exists()
    ? Object.values(draftedSnapshot.val())
    : [];

  console.log(`🔍 Drafted Pokémon before undo:`, draftedPokemons);

  // 🎯 Find the last Pokémon drafted by the player
  let lastDraftIndex = draftedPokemons.map((p) => p.player).lastIndexOf(player);
  if (lastDraftIndex === -1) {
    alert(`${player} has no drafts to undo!`);
    return;
  }

  let removedPokemon = draftedPokemons[lastDraftIndex];

  console.log(`🛑 Removing only ${removedPokemon.pokemon}, not all!`);

  // 🎯 Remove from Firebase
  await remove(ref(db, `drafted/${removedPokemon.pokemon}`));
  console.log(
    `✅ Removed ${removedPokemon.pokemon} from ${player}'s draft list.`
  );

  // 🎯 1️⃣ Update Budget Table & Remove Icon
  updateBudgetTable();

  // 🎯 2️⃣ Restore Pokémon to Draft Board
  restorePokemonToDraftBoard(removedPokemon.pokemon);

  // 🎯 3️⃣ Remove Pokémon Icon from Budget Table
  let teamCell = document.getElementById(`team-${player}-icons`);
  if (teamCell) {
    let icons = teamCell.querySelectorAll("img");
    if (icons.length > 0) {
      icons[icons.length - 1].remove(); // Remove only the last added icon
    }
  }

  alert(`${removedPokemon.pokemon} has been removed from ${player}'s team.`);
}

async function fetchPokemonData() {
  try {
    console.log("Fetching Pokémon data...");

    const response = await fetch("https://pokeapi.co/api/v2/pokedex/9");
    if (!response.ok) throw new Error("Failed to fetch Pokédex data");

    const data = await response.json();
    let pokemonEntries = data.pokemon_entries.map((entry) =>
      entry.pokemon_species.name.toLowerCase()
    );
    pokemonEntries.sort();

    // ✅ Ensure Rotom Forms Are Included
    let rotomForms = [
      "rotom-heat",
      "rotom-wash",
      "rotom-mow",
      "rotom-fan",
      "rotom-frost",
    ];
    rotomForms.forEach((form) => {
      if (!pokemonEntries.includes(form)) {
        pokemonEntries.push(form);
        console.log(`✅ Added missing Rotom form: ${form}`);
      }
    });

    const tiersDiv = document.getElementById("tiers");
    if (!tiersDiv) {
      console.error("Tiers container not found!");
      return;
    }

    // 🎯 Clear the draft board before reloading
    tiersDiv.innerHTML = "";

    const tierElements = {};
    const uniquePoints = [...new Set(Object.values(pokemonPoints))].sort(
      (a, b) => b - a
    );

    for (const points of uniquePoints) {
      if (!(points in tierElements)) {
        const tierDiv = document.createElement("div");
        tierDiv.classList.add("tier", "col-12", "p-3", "shadow-sm");
        tierDiv.innerHTML = `<button class='btn btn-primary w-100 mb-2' data-bs-toggle='collapse' data-bs-target='#tier-${points}'>Tier ${points} Points</button><div class='collapse show' id='tier-${points}'></div>`;
        tiersDiv.appendChild(tierDiv);
        tierElements[points] = tierDiv.querySelector(`#tier-${points}`);
      }
    }

    console.log("Fetching Firebase drafted Pokémon...");
    let draftedSnapshot = await get(ref(db, "drafted"));
    let draftedPokemons = draftedSnapshot.exists()
      ? Object.keys(draftedSnapshot.val())
      : [];

    await Promise.all(
      pokemonEntries.map(async (name) => {
        if (!(name in pokemonPoints)) {
          console.warn(`⚠ Skipping ${name} (no point value found)`);
          return;
        }
          
        if (draftedPokemons.includes(name)) {
          console.warn(`⚠ Skipping ${name} (already drafted)`);
          return;
        }
          
        // 🎯 Correct Rotom Form Names for API Fetching
        let formattedName = name;
        const rotomForms = {
          "rotom-heat": "rotom-heat",
          "rotom-wash": "rotom-wash",
          "rotom-mow": "rotom-mow",
          "rotom-fan": "rotom-fan",
          "rotom-frost": "rotom-frost",
        };

        if (rotomForms[name]) {
          formattedName = rotomForms[name]; // Convert to correct PokéAPI format
        }

        console.log(`🔍 Fetching Pokémon: ${formattedName}`);

        // 🎯 Fetch Pokémon Data
        let pokemonResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${formattedName}`
        );

        if (!pokemonResponse.ok) {
          console.warn(
            `⚠ API did not return data for ${formattedName} (Status: ${pokemonResponse.status}). Trying alternative fetch...`
          );

          // 🔄 Try fetching from base Rotom and extracting its forms
          let baseRotomResponse = await fetch(
            "https://pokeapi.co/api/v2/pokemon/rotom"
          );
          if (baseRotomResponse.ok) {
            let baseRotomData = await baseRotomResponse.json();
            let formData = baseRotomData.forms.find(
              (f) => f.name === formattedName
            );

            if (formData) {
              console.log(
                `✅ Found alternative form data for ${formattedName}: ${formData.url}`
              );
              pokemonResponse = await fetch(formData.url);
            }
          }
        }

        if (!pokemonResponse.ok) {
          console.warn(
            `⚠ Failed to retrieve Pokémon data for ${formattedName} after alternative fetch.`
          );
          return;
        }

        const pokemonData = await pokemonResponse.json();
        console.log(`✅ API Data Found for ${formattedName}`);

        // 🎯 Get Front & Back Sprites
        const frontSprite =
          pokemonData.sprites.versions["generation-v"]["black-white"].animated
            .front_default;
        const backSprite =
          pokemonData.sprites.versions["generation-v"]["black-white"].animated
            .back_default;

        if (!frontSprite || !backSprite) {
          console.warn(`⚠ Missing sprites for ${formattedName}`);
          return;
        }

        console.log(`✅ Creating Pokémon card for ${formattedName}`);

        // ✨ Updated: Build types using getPokemonTypes.
        let baseTypes = pokemonData.past_types && pokemonData.past_types.length > 0
          ? pokemonData.past_types[0].types.map(t => t.type.name)
          : pokemonData.types.map(t => t.type.name);
    
        console.log(
          `${pokemonData.name} typing source: ${
            pokemonData.past_types && pokemonData.past_types.length > 0 ? "past_types (Gen V)" : "types (Current)"
          }`
        );
    
        let correctedTypes = getPokemonTypes({ name: pokemonData.name, types: baseTypes });
      
        let typesHTML = '<div class="pokemon-types">';
        correctedTypes.forEach((typeName) => {
          typesHTML += `<img src="Type Labels/${typeName}.png" alt="${typeName}" class="type-icon">`;
        });
        typesHTML += "</div>";

        // ✨ Use getPokeMMOLink for the PokeMMO link.
        const pokeLink = getPokeMMOLink(pokemonData);

        const pokeDiv = document.createElement("div");
        pokeDiv.classList.add("pokemon-card", "text-center", "shadow-sm");
        pokeDiv.innerHTML = `
          <img src="${frontSprite}" class="pokemon-gif" alt="${name}" data-front="${frontSprite}" data-back="${backSprite}">
          <div class="pokemon-header">
            <p class="pokemon-name">${pokemonData.name.toUpperCase()} (${pokemonPoints[pokemonData.name]} Pts)</p>
            ${typesHTML}
            <button class="draft-btn btn btn-sm" data-name="${pokemonData.name}">Draft</button>
            <a href="${pokeLink}" target="_blank" class="pokemmo-btn btn btn-sm">Visit PokeMMO</a>
          </div>
        `;

        // ✅ Click to Toggle Sprite
        pokeDiv
          .querySelector(".pokemon-gif")
          .addEventListener("click", function () {
            this.src =
              this.src === this.dataset.front
                ? this.dataset.back
                : this.dataset.front;
          });

        tierElements[pokemonPoints[name]].appendChild(pokeDiv);
        console.log(`✅ Added ${formattedName} to the draft board.`);
      })
    );

    console.log("✅ Pokémon data loaded successfully!");
  } catch (error) {
    console.error("❌ Error in fetchPokemonData:", error);
  }
}

async function fetchPokemonIcon(pokemonName) {
  console.log(`🔍 Calling fetchPokemonIcon() for: ${pokemonName}`);

  try {
    let formattedName = pokemonName.toLowerCase().replace(" ", "-"); // 🔄 Fix name formatting
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${formattedName}`
    );

    if (!response.ok) {
      console.warn(
        `⚠ Pokémon API returned ${response.status} for ${formattedName}`
      );
      return null; // Don't break execution
    }

    let data = await response.json();
    let iconUrl = data.sprites.versions["generation-viii"].icons.front_default;

    if (iconUrl) {
      console.log(`✅ Icon found for ${pokemonName}: ${iconUrl}`);
    } else {
      console.warn(`⚠ No icon found for ${pokemonName}`);
    }

    return iconUrl;
  } catch (error) {
    console.error(`❌ Error fetching icon for ${pokemonName}:`, error);
    return null;
  }
}

async function updateBudgetTable() {
  console.log("🔄 Updating budget table...");

  let table = document.getElementById("budget-table"); // ✅ Ensure correct table ID
  if (!table) {
    console.error("❌ Budget table not found!");
    return;
  }

  let draftedSnapshot = await get(ref(db, "drafted"));
  let draftedPokemons = draftedSnapshot.exists()
    ? Object.values(draftedSnapshot.val())
    : [];

  table.querySelectorAll("tbody tr").forEach((row) => {
    let playerName = row.cells[0].innerText.trim();
    let playerPokemons = draftedPokemons.filter(
      (entry) => entry.player === playerName
    );

    let usedCell = row.cells[1];
    let remainingCell = row.cells[2];
    let teamCell = row.cells[3];

    // 🎯 1️⃣ Update Points Used & Remaining Budget
    let usedPoints = playerPokemons.reduce(
      (sum, entry) => sum + Number(entry.points),
      0
    );
    let remainingBudget = 13 - usedPoints; // Ensure 13 is the correct starting budget

    usedCell.textContent = usedPoints;
    remainingCell.textContent = remainingBudget;

    // 🎯 2️⃣ Clear and Update Pokémon Icons
    teamCell.innerHTML = "";
    playerPokemons.forEach(async (entry) => {
      console.log(`🎨 Attempting to fetch icon for ${entry.pokemon}...`);
      let iconUrl = await fetchPokemonIcon(entry.pokemon);

      if (iconUrl) {
        let img = document.createElement("img");
        img.src = iconUrl;
        img.classList.add("team-icon");
        teamCell.appendChild(img);
        console.log(
          `✅ Added icon for ${entry.pokemon} to ${playerName}'s team.`
        );
      } else {
        console.warn(`⚠ No icon available for ${entry.pokemon}.`);
      }
    });
  });

  console.log("✅ Budget table updated!");
}

async function removeDraftedFromBoard() {
  console.log("Greyscaling drafted Pokémon...");

  let draftedSnapshot = await get(ref(db, "drafted"));
  if (!draftedSnapshot.exists()) {
    console.log("No drafted Pokémon found.");
    return;
  }

  let draftedPokemons = Object.values(draftedSnapshot.val());

  draftedPokemons.forEach(({ pokemon }) => {
    const draftBtn = document.querySelector(`.draft-btn[data-name="${pokemon}"]`);
    if (!draftBtn) {
      console.warn(`❌ Could not find Draft button for ${pokemon}`);
      return;
    }
    
    const card = draftBtn.closest(".pokemon-card");
    if (!card) {
      console.warn(`❌ Could not find card container for ${pokemon}`);
      return;
    }
    
    card.classList.add("disabled");
    draftBtn.disabled = true;
    console.log(`✅ Greyed out ${pokemon}`);
    
    if (card) {
      card.classList.add("disabled");

      const draftBtn = card.querySelector(".draft-btn");
      if (draftBtn) draftBtn.disabled = true;

      console.log(`✅ Greyed out \${pokemon}`);
    }
  });

  console.log("✅ Drafted Pokémon greyed out successfully!");
}

// 🔹 Attach event listener to the H1 title
document
  .getElementById("draft-timer")
  .addEventListener("click", toggleDraftTimer);

// 🔹 Attach event listeners to all undo buttons
document.querySelectorAll(".undo-btn").forEach((button) => {
  button.addEventListener("click", function () {
    let player = this.getAttribute("data-player");
    undoLastDraftForPlayer(player);
  });
});

// 🔥 Listen for real-time updates from Firebase and update UI
onValue(ref(db, "drafted"), async (snapshot) => {
  console.log("🔥 Firebase draft data updated!");

  let draftedPokemons = [];
  if (snapshot.exists()) {
    draftedPokemons = Object.values(snapshot.val());
  }

  // 🎯 Store in localStorage for session persistence
  localStorage.setItem("draftedPokemons", JSON.stringify(draftedPokemons));

  // 🛑 Ensure no duplicate drafts appear
  removeDraftedFromBoard();

  // ✅ Refresh the budget table and UI in real-time
  await updateBudgetTable();
});

// 2️⃣ Setup the Modal & Event Listeners
let draftModal = new bootstrap.Modal(document.getElementById("draftModal"));
let selectedPokemon = null; // Stores selected Pokémon temporarily
document.addEventListener("click", function (event) {
  const draftBtn = event.target.closest(".draft-btn");

  if (draftBtn) {
    event.preventDefault();

    // Store selected Pokémon data
    selectedPokemon = {
      name: draftBtn.getAttribute("data-name"),
      points: pokemonPoints[draftBtn.getAttribute("data-name")],
      sprite: draftBtn.parentElement.querySelector("img").src,
    };

    // Update modal text with Pokémon name
    document.getElementById("pokemonNamePlaceholder").textContent =
      selectedPokemon.name.toUpperCase();

    // Show the modal
    draftModal.show();
  }
});

// 3️⃣ Confirm Draft Logic (🔹 Place this right after draft button listener)
document
  .getElementById("confirmDraft")
  .addEventListener("click", async function () {
    if (!selectedPokemon) return;

    let selectedPlayer = document.getElementById("playerSelect").value;
    let draftedRef = ref(db, "drafted");

    // 🔥 Fetch current draft data from Firebase
    let draftedSnapshot = await get(draftedRef);
    let draftedPokemons = draftedSnapshot.exists()
      ? Object.values(draftedSnapshot.val())
      : [];

    // 🎯 1️⃣ Check if Pokémon is already drafted
    if (
      draftedPokemons.some((entry) => entry.pokemon === selectedPokemon.name)
    ) {
      alert(`${selectedPokemon.name} is already selected.`);
      return;
    }

    // 🎯 2️⃣ Calculate remaining budget
    let usedPoints = draftedPokemons
      .filter((entry) => entry.player === selectedPlayer)
      .reduce((sum, entry) => sum + Number(entry.points), 0);
    let remainingBudget = 13 - usedPoints;

    // 🎯 3️⃣ Check if player has enough points
    if (remainingBudget - selectedPokemon.points < 0) {
      alert(
        `${selectedPlayer} does not have enough points to draft ${selectedPokemon.name}.`
      );
      return;
    }

    // 🎯 4️⃣ Save to Firebase (Syncs for All Players)
    await set(ref(db, `drafted/${selectedPokemon.name}`), {
      player: selectedPlayer,
      pokemon: selectedPokemon.name,
      sprite: selectedPokemon.sprite,
      points: selectedPokemon.points,
    });

    alert(`${selectedPokemon.name} added to ${selectedPlayer}'s team!`);

    // ✅ Update the UI Immediately
    updateBudgetTable();
    removeDraftedFromBoard();
    // ✅ Close the modal after drafting
    let draftModal = document.getElementById("draftModal");
    let modalInstance = bootstrap.Modal.getInstance(draftModal);
    if (modalInstance) modalInstance.hide();
  });

// 4️⃣ Page Initialization (Keep existing document ready functions)
document.addEventListener("DOMContentLoaded", async function () {
  await fetchPokemonData(); // ✅ Ensure Pokémon load first
  setTimeout(removeDraftedFromBoard, 500); // ✅ Wait before removing drafted Pokémon
});

async function resetDraft() {
  console.log("🔄 Resetting draft...");

  try {
    // 🚨 1️⃣ Remove All Draft Data from Firebase
    await remove(ref(db, "drafted"));
    console.log("✅ Firebase draft data cleared!");

    // 🚨 2️⃣ Reset Budget Table
    updateBudgetTable();

    // 🚨 3️⃣ Reload Pokémon to the Draft Board
    await fetchPokemonData();
    console.log("✅ Pokémon draft board restored!");

    // 🚨 4️⃣ Clear "Current Team" Icons for All Players
    let table = document.getElementById("budget-table");
    if (table) {
      table.querySelectorAll("tbody tr").forEach((row) => {
        let teamCell = row.cells[3]; // Column index for "Current Team"
        if (teamCell) {
          teamCell.innerHTML = "";
        }
      });
      console.log("✅ Current Team icons cleared.");
    } else {
      console.error("❌ Budget table not found!");
    }

    alert("Draft has been reset successfully!");
  } catch (error) {
    console.error("❌ Error resetting draft:", error);
    alert("An error occurred while resetting the draft.");
  }
}

// The following setTimeout call is now redundant since removal is handled after fetch completion.
// setTimeout(removeDraftedFromBoard, 100);

document.getElementById("resetDraftBtn").addEventListener("click", resetDraft);

// ==============================
// ⏰ Live Clock Functionality
// ==============================
function updateClock() {
  const clockElement = document.getElementById("live-clock");
  if (!clockElement) return;

  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  clockElement.textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call
