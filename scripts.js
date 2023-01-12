const apoWords = ["aujourd'hui", "prud'homme", "presqu'île", "m'as-tu-vu", "qu'en-dira-t-on", "trompe-l'œil"];

const unionWords = ["peut-être", "centre-ville", "garde-manger", "nouveau-né", "va-et-vient", "laissez-passer", 
"savoir-faire", "café-théâtre", "tête-à-tête", "pèse-personne", "cure-dents", "rouge-gorge", "blanc-bec",  
"rond-point", "libre-service", "nouveau-nés", "tire-bouchon", "tire-bouchons", "porte-avion", "porte-avions",
"sèche-cheveux", "brise-glace", "porte-monnaie", "pince-sans-rire", "prie-Dieu", "trompe-l'œil", "réveil-matin", 
"gagne-petit", "cache-cache", "croque-monsieur", "dors-bien", "on-dit", "ouï-dire", "pis-aller", "quant-à-soi", 
"perce-neige", "lave-linge"," bernard-l'ermite", "tee-shirt", "tee-shirts", "week-end", "aller-retour",
"week-ends", "coming-out", "start-up", "fast-foods", "hold-up", "pop-corn", "cow-boy", "cow-boys", "cow-girl", 
"cow-girls", "milk-shake", "milk-shakes", "coin-coin", "frou-frou", "frous-frous", "frou-frous", "bric-à-brac", 
"coin-coins"
];

const freqWords = ["saint", "grand", "grands", "arrière", "par", "avant", "à", "après", "au", "en", "sans", "trop", 
"petit", "petite", "petits", "petites", "demi", "contre", "mal", "entre", "hors", "non", "sous", "sur", "sus", "bas", "haut"
];

let symbols = [];
const latinGreekLetters = /[a-zA-Z\u0370-\u03ff\u1f00-\u1fff]/u;
const accentLetters = /[\u00e0-\u00ff\u0101\u0103\u0105\u0107\u0109\u010d\u010f\u0111\u0113\u0115\u0117\u0119\u011b\u011d\u011f\u0121\u0123\u0125\u0127\u0129\u012b\u012d\u012f\u0131\u0133\u0135\u0137\u0138\u013a\u013c\u013e\u0140\u0142\u0144\u0146\u0148\u0149\u014b\u014d\u014f\u0151\u0153\u0155\u0157\u0159\u015b\u015d\u015f\u0161\u0163\u0165\u0167\u0169\u016b\u016d\u016f\u0171\u0173\u0175\u0177\u017a\u017c\u017e\u017f\u0180\u0183\u0185\u0188\u018c\u018d\u0192\u0195\u0199\u019a\u019b\u019e\u01a1\u01a3\u01a5\u01a8\u01aa\u01ab\u01ad\u01b0\u01b4\u01b6\u01b9\u01ba\u01bd-\u01bf\u01c6\u01c9\u01cc\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u01dd\u01df\u01e1\u01e3\u01e5\u01e7\u01e9\u01eb\u01ed\u01ef\u01f0\u01f3\u01f5\u01f9\u01fb\u01fd\u01ff\u0201\u0203\u0205\u0207\u0209\u020b\u020d\u020f\u0211\u0213\u0215\u0217\u0219\u021b\u021d\u021f\u0221\u0223\u0225\u0227\u0229\u022b\u022d\u022f\u0231\u0233\u023c\u023f\u0240\u0242\u0247\u0249]/u;
const number = /[0-9]/;

var nbCharAvailable = 10000;

function init() {
  countCharacters()
  countWords()


  for (let i = 0; i < 65532; i++) {
    const char = String.fromCodePoint(i);
    if (!latinGreekLetters.test(char) && !accentLetters.test(char) && !number.test(char)) {
      symbols.push(char)
    }

  }
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
          ( array[0] != array[0].toUpperCase() || n != n.toUpperCase() ) && 
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