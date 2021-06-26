/*** Personal Info ***/
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;
words[currentWord].style.opacity = 1;

for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}


function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

/*** Skills ***/
var words2 = document.getElementsByClassName('word2');
var wordArray2 = [];
var currentWord2 = 0;
words2[currentWord2].style.opacity = 1;

for (var i = 0; i < words2.length; i++) {
  splitLetters2(words2[i]);
}

function changeWord2() {
  var cw2 = wordArray2[currentWord2];
  var nw2 = currentWord2 == words2.length-1 ? wordArray2[0] : wordArray2[currentWord2+1];
  for (var i = 0; i < cw2.length; i++) {
    animateLetterOut2(cw2, i);
  }

  for (var i = 0; i < nw2.length; i++) {
    nw2[i].className = 'letter2 behind';
    nw2[0].parentElement.style.opacity = 1;
    animateLetterIn2(nw2, i);
  }

  currentWord2 = (currentWord2 == wordArray2.length-1) ? 0 : currentWord2+1;
}

function animateLetterOut2(cw2, i) {
  setTimeout(function() {
    cw2[i].className = 'letter2 out';
  }, i*80);
}

function animateLetterIn2(nw2, i) {
  setTimeout(function() {
    nw2[i].className = 'letter2 in';
  }, 340+(i*80));
}

function splitLetters2(word2) {
  var content2 = word2.innerHTML;
  word2.innerHTML = '';
  var letters2 = [];
  for (var i = 0; i < content2.length; i++) {
    var letter2 = document.createElement('span');
    letter2.className = 'letter2';
    letter2.innerHTML = content2.charAt(i);
    word2.appendChild(letter2);
    letters2.push(letter2);
  }
  
  wordArray2.push(letters2);
}


changeWord();
setInterval(changeWord, 4000);

changeWord2();
setInterval(changeWord2, 4000);



/*** Mo ***/

/*
// function([string1, string2],target id,[color1,color2])    
consoleText(['Luis Miranda', 'Developer', 'Costa Rica'], 'text',['#16a085','coral','#2980b9']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
*/