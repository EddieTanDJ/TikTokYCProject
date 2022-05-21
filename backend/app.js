const express = require('express')
const app = express()
const router = express.Router();
const cors = require('cors')
const port = 3001

app.use(express.json())
app.use(cors())

app.get('/helloworld', (req, res) => {
  res.send('Hello World!')
})

app.get('/programming', (req, res) => {
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
      const word = programming();
      console.log(word);
      res.send(word);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})