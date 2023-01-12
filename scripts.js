let apoWords = ["aujourd'hui", "prud'homme", "presqu'île", "m'as-tu-vu", "qu'en-dira-t-on", "trompe-l'œil"];

let unionWords = ["peut-être", "centre-ville", "garde-manger", "nouveau-né", "va-et-vient", "laissez-passer", 
"savoir-faire", "café-théâtre", "tête-à-tête", "pèse-personne", "cure-dents", "rouge-gorge", "blanc-bec",  
"rond-point", "libre-service", "nouveau-nés", "haut-parleur", "haut-parleurs", "tire-bouchon", "tire-bouchons", 
"sèche-cheveux", "brise-glace", "porte-monnaie", "pince-sans-rire", "prie-Dieu", "trompe-l'œil", "réveil-matin", 
"gagne-petit", "cache-cache", "croque-monsieur", "dors-bien", "on-dit", "ouï-dire", "pis-aller", "quant-à-soi", 
"perce-neige", "lave-linge"," bernard-l'ermite", "tee-shirt", "tee-shirts", "week-end", "aller-retour",
"week-ends", "coming-out", "start-up", "fast-foods", "hold-up", "pop-corn", "cow-boy", "cow-boys", "cow-girl", 
"cow-girls", "milk-shake", "milk-shakes", "coin-coin", "frou-frou", "frous-frous", "frou-frous", "bric-à-brac", 
"coin-coins", "porte-avion", "porte-avions"
];

let freqWords = ["saint", "grand", "grands", "arrière", "par", "avant", "à", "après", "au", "en", "sans", "trop", 
"petit", "petite", "petits", "petites", "demi", "contre", "mal", "entre", "hors", "non", "sous", "sur", "sus"
];

let symbols = ["", " ", "!", "?", ".", "«", "»", "(", ")", '"', "-", ";", ":", ",", "_", "`", "’", "%", "*", "<", ">", "+", "=",
"#", "^", "|", "/", String.raw`\ `.trim(), "±", "@", "£", "¢", "¤", "¬", "¦", "²", "³", "¼", "½", "¾", "~­", "¯", "&"
];

var nbCharAvailable = 10000;

function init() {
  countCharacters()
  countWords()
}

function countWords() {

  // To JS
  let text = document.getElementById("Text").value.split(/\s+|\n+|\r+/);
  countCharacters();

  // Count words
  let nbWords = 0;

  for(let w = 0; w < text.length; w++) {
    let i = text[w];
    let array = Array.from(i).join("");
    i = i.toLowerCase();


    if(!symbols.includes(i))
    {
      for(let c = 0; c < i.length; c++) {
        let j = array[c];

        if(!symbols.includes(j)) {
          // console.log(i)
          nbWords++;
          c = i.length;
        }

      }
    }

    if (array.includes("'") || array.includes("’")) {
      for(let c = 0; c < i.length; c++) {
        let j = array[c];
        let n = array[c+1];
        let p = array[c-1];

        if(
          (j == "'" || j == "’") && 
          !apoWords.includes(i) && 
          !symbols.includes(n)  && 
          !symbols.includes(p)
          )
        {
          // console.log(i)
          nbWords++;
          c = i.length;
        }

      }
    }

    else if (array.includes("-")) {
      for(let c = 0; c < i.length; c++) {
        let j = array[c];
        let n = array[c+1];
        let p = array[c-1];

        let split = Array.from(i.split("-"));

        if(j == "-" &&
          !symbols.includes(n) && 
          ( array[0] != array[0].toUpperCase || n != n.toUpperCase )  && 
          !symbols.includes(p) && 
          !unionWords.includes(i) &&
          !symbols.includes(array[array.length - 1]) &&
          !freqWords.includes(split[0])
         )
        {
          // console.log(i)
          nbWords++;
          c = i.length;
        }

      }
    }
  }

  // To HTML
  if(nbWords > 1)
    document.getElementById("nbWords").innerHTML = nbWords + " mots";
  else
    document.getElementById("nbWords").innerHTML = nbWords + " mot";
}

function countCharacters() {
  let p = document.getElementById("nbChar");
  let count = document.getElementById("Text").value.length;
  
  p.innerHTML = count + "/" + nbCharAvailable;
}