const fetch = require('node-fetch');
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001


app.use(express.json())
app.use(cors())


// Get a word from programming category
app.get('/programming%20language', (req, res) => {
    const PROGRAMING_LANG = [
        "agda",
        "basic",
        "brainfuck",
        "c",
        "clojure",
        "crystal",
        "csharp",
        "css",
        "dart",
        "delphi",
        "elixir",
        "elm",
        "erlang",
        "fortran",
        "golang",
        "groovy",
        "haskell",
        "html",
        "idris",
        "java",
        "javascript",
        "kotlin",
        "lisp",
        "lua",
        "matlab",
        "mercury",
        "mint",
        "myrddin",
        "nim",
        "objectivec",
        "ocaml",
        "pascal",
        "perl",
        "php",
        "prolog",
        "purescript",
        "python",
        "r",
        "ruby",
        "rust",
        "scala",
        "scheme",
        "sql",
        "swift",
        "typescript",
        "vimscript",
        "zig",
      ];
      
      function programming() {
        return PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
      }
      // Uncomment for answer
      const word = programming();
      console.log(word);
      res.send(word);
})

// Get a word from food category
app.get('/food', (req, res) => {
  const FOOD = [
      "chicken",
      "beef",
      "pork",
      "fish",
      "vegetables",
      "fruits",
      "dairy",
      "eggs",
      "bread",
      "nuts",
      "cereals",
      "sweets",
      "noodles",
      "pasta",
      "soup",
      "rice",
      "potatoes",
      "yogurt",
      "cake",
      "fries",
      "breads",
      "chips",
      "sausages",
      "cheese",
      "mushrooms",
      "chocolate",
      "juice",
      "soda",
      "hamburger",
      "sandwich",
      "pizza",
      "pastries",
      "salad",
      "sushi",
      "steak",
      "taco",
      "tortilla",
      "burrito",
      "waffles",
      "french fries",
      "macaroni",
      "pancakes",
      "crackers"
    ];

    function food() {
      return FOOD[Math.floor(Math.random() * FOOD.length)];
    }
    const word = food();
    // Uncomment for answer
    console.log(word);
    res.send(word);
})

// Get a word from food category
app.get('/countries', (req, res) => {
  const COUNTRIES = [
      "afghanistan",
      "albania",
      "algeria",
      "andorra",
      "angola",
      "argentina",
      "armenia",
      "australia",
      "austria",
      "azerbaijan",
      "bahamas",
      "bahrain",
      "bangladesh",
      "barbados",
      "belarus",
      "belgium",
      "belize",
      "benin",
      "bhutan",
      "bolivia",
      "botswana",
      "brazil",
      "brunei",
      "bulgaria",
      "burundi",
      "cambodia",
      "cameroon",
      "canada",
      "chad",
      "chile",
      "china",
      "colombia",
      "comoros",
      "congo",
      "croatia",
      "cuba",
      "cyprus",
      "denmark",
      "djibouti",
      "dominica",
      "ecuador",
      "egypt",
      "eritrea",
      "estonia",
      "ethiopia",
      "fiji",
      "finland",
      "france",
      "gabon",
      "gambia",
      "georgia",
      "germany",
      "ghana",
      "greece",
      "grenada",
      "guatemala",
      "guinea",
      "guyana",
      "haiti",
      "honduras",
      "hungary",
      "iceland",
      "india",
      "indonesia",
      "iran",
      "iraq",
      "ireland",
      "isreal",
      "italy",
      "jamaica",
      "japan",
      "jordan",
      "kazakhstan",
      "kenya",
      "kiribati",
      "north korea",
      "south korea",
      "kosovo",
      "kuwait",
      "kyrgyzstan",
      "laos",
      "latvia",
      "lebanon",
      "lesotho",
      "liberia",
      "libya",
      "liechtenstein",
      "lithuania",
      "luxembourg",
      "macedonia",
      "madagascar",
      "malawi",
      "malaysia",
      "maldives",
      "mali",
      "malta",
      "mauritania",
      "mauritius",
      "mexico",
      "micronesia",
      "moldova",
      "monaco",
      "mongolia",
      "montenegro",
      "morocco",
      "mozambique",
      "myanmar",
      "namibia",
      "nauru",
      "nepal",
      "netherlands",
      "nicaragua",
      "niger",
      "nigeria",
      "norway",
      "oman",
      "pakistan",
      "palau",
      "panama",
      "paraguay",
      "peru",
      "philippines",
      "poland",
      "portugal",
      "qatar",
      "romania",
      "russia",
      "rwanda",
      "samoa",
      "senegal",
      "serbia",
      "seychelles",
      "sierra leone",
      "singapore",
      "slovakia",
      "slovenia",
      "somalia",
      "spain",
      "sudan",
      "suriname",
      "swaziland",
      "sweden",
      "switzerland",
      "syria",
      "taiwan",
      "tajikistan",
      "tanzania",
      "thailand",
      "togo",
      "tonga",
      "tunisia",
      "turkey",
      "turkmenistan",
      "tuvalu",
      "uganda",
      "ukraine",
      "uruguay",
      "uzbekistan",
      "vanuatu",
      "venezuela",
      "vietnam",
      "yemen",
      "zambia",
      "zimbabwe",
      "bosnia and herzegovina",
      "central african republic",
      "democratic Republic of the congo",
      "dominican Republic",
      "equatorial Guinea",
      "marshall Islands",
      "papua New Guinea",
      "saint Vincent and the Grenadines",
      "sierra Leone",
      "saint Kitts and Nevis",
      "saint Lucia",
      "san Marino",
      "saint tome and Principe",
      "saudi arabia",
      "sierra Leone",
      "solmon Island",
      "south africa",
      "south sudan",
      "sri Lanka",
      "trinidad and tobago",
      "united arab Emirates",
      "united Kingdom",
      "united states of america",
      "new zealand"
    ];

    function countries() {
      return COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
    }
    const word = countries();
    // Uncomment for answer
    console.log(word);
    res.send(word);
})

// Get a random word from the list
app.get('/word', (req, res) => {
    fetch('https://random-words-api.vercel.app/word')
    .then(res => res.json())
    .then(json => {
      // console.log(json);
      // Get the word from the response
      var word = json[0].word;
      word = word.toLowerCase();
      // Uncomment for answer
      console.log(word)
      res.send(word);
    })
    .catch(err => {
      console.log(err);
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})