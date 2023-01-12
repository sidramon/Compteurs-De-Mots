function countWords() {
    let apoWords = ["aujourd'hui", "prud'homme", "presqu'île", "m'as-tu-vu", "qu'en-dira-t-on"]

    // To JS
    let text = document.getElementById("Text").value.trim().split(" ");
    
    // Count value
    let nbWords = 0;

    for(let w = 0; w < text.length; w++) {
      let i = text[w].toLowerCase();
      let split = " " + i.split("") + " ";

      if (i != "")
      {
        nbWords++;
      }

      for(let c = 1; c < i.length; c++) {
        let j = split[c+1];
        let n = split[c+2];
        let p = split[c];

        if (j == "'" && !apoWords.includes(i) && n != "'"  && p != "'")
        {
          nbWords++;
          c = i.length;
        }
      }
    }

    // To HTML
    if(nbWords > 1)
      document.getElementById("nbWords").innerHTML = nbWords + " mots";
    else
      document.getElementById("nbWords").innerHTML = nbWords + " mot";
  }