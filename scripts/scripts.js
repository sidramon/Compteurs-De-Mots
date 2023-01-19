let symbols = [];

let nbCharAvailable = 10000;

let words = [];

function countWords() {
  words = [];

  // To JS
  let text = document.getElementById("Text").value.split(/\s+|\n+|\r+/);
  countCharacters();

  // Count words
  let nbWords = 0;

  for(let w = 0; w < text.length; w++) {
    let i = text[w];
    i = cleanWord(i);
    // console.log(i)
    let array = i.split("");

    if(!symbols.includes(i.toLowerCase()))
    {
      for(let c = 0; c < i.length; c++) {
        let j = array[c];

        if(!symbols.includes(j)) {
          // console.log(i)
          nbWords++;
          // console.log(i)
          words.push(i);
          c = i.length;
        }

      }
    }
    if ((array.includes("'") || array.includes("’")) && aposWordsOn) {
      for(let c = 0; c < i.length; c++) {
        let j = array[c];
        let n = array[c+1];
        let p = array[c-1];
        // console.log(i)
        if(
          (j == "'" || j == "’") && !(array[0] == "'" || array[0] == "’") && 
          !apoWords.includes(i.toLowerCase()) && 
          !symbols.includes(n)  && 
          !symbols.includes(p)
          )
        {
          let split = i.split(j);
          words.pop();
          words.push(split[0]+j, split[1]);

          console.log(i)
          nbWords++;
          c = i.length;
        }

      }
    }
    else if (array.includes("-") && hyphenWordsOn) {
      array.push(" ");
      for(let c = 0; c < i.length; c++) {
        let j = array[c];
        let n = array[c+1];
        let p = array[c-1];

        let split = Array.from(i.split("-"));

        console.log(i);
        if(j == "-" &&
          !symbols.includes(n) && 
          ( array[0] != array[0].toUpperCase() || n != n.toUpperCase() ) && 
          !symbols.includes(p) && 
          !unionWords.includes(i.toLowerCase()) &&
          !freqWords.includes(split[0])
         )
        {
          let split = i.split(j);
          words.pop();
          words.push(split[0], split[1]);

          // console.log(i)
          nbWords++;
          c = i.length;
        }

      }
    }
  }

  // console.log(words);
  // To HTML
  if(nbWords > 1)
    document.getElementById("nbWords").innerHTML = nbWords + " mots";
  else
    document.getElementById("nbWords").innerHTML = nbWords + " mot";
}

function countCharacters() {
  let p = document.getElementById("nbChar");
  let count = document.getElementById("Text").value.length;
  
  p.innerHTML = count + "/" + nbCharAvailable + " caractères";
}

function cleanWord(word) {

  
  let cleanWord = word;

  for(let x = 0; x < word.length; x++) {
    if(symbols.includes(word[x]) && !["'", "’", "-"].includes(word[x])) {
      console.log(word[x])
      cleanWord = cleanWord.replace(word[x], '');
    }
  }
  
  return cleanWord;
}