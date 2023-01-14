let spacedWordsOn = true;
let aposWordsOn = true;
let hyphenWordsOn = true;
let symbolsOn = [];

function init() {
    var options = document.getElementsByName("options");
    for (var i = 0; i < options.length; i++) {
        options[i].style.display = "none";
    }
  
    document.getElementById("options").addEventListener("click", function() {
      for (var i = 0; i < options.length; i++) {
          if(options[i].style.display === "none") {
              options[i].style.display = "flex";
          } else {
              options[i].style.display = "none";
          }
      }
    });
  
    document.getElementById("hyphen").addEventListener("change", function() {
      hyphenWordsOn = !hyphenWordsOn;
      countWords();
    });
    document.getElementById("spaced").addEventListener("change", function() {
      spacedWordsOn = !spacedWordsOn;
      countWords();
    });
    document.getElementById("apos").addEventListener("change", function() {
      aposWordsOn = !aposWordsOn;
      countWords();
    });
    document.getElementById("char").addEventListener("change", function() {
      if(this.checked) {
        symbols = symbolsOn;
      }
      else {
        symbols = [];
      }

      countWords();
    });
  
    countCharacters()
    countWords()
  
  
    for (let i = 0; i < 65532; i++) {
      const char = String.fromCodePoint(i);
      if (!latinGreekLetters.test(char) && !accentLetters.test(char) && !number.test(char)) {
        symbols.push(char)
      }
  
    }
    symbolsOn = symbols;
  }