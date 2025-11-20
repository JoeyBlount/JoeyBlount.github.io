function makeBigger() {
  document.getElementById("textArea").style.fontSize = "24pt";
}

function applyFancyShmancy() {
  var textArea = document.getElementById("textArea");
  var fancyShmancy = document.getElementById("fancyShmancy");

  if (fancyShmancy.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooify() {
  var textArea = document.getElementById("textArea");
  var text = textArea.value.toUpperCase();

  var sentences = text.split(".");
  for (var i = 0; i < sentences.length; i++) {
    if (sentences[i].trim() !== "") {
      var words = sentences[i].trim().split(" ");
      for (var j = 0; j < words.length; j++) {
        if (words[j] !== "") {
          words[j] = words[j] + "-Moo";
        }
      }
      sentences[i] = words.join(" ");
    }
  }
  text = sentences.join(".");

  textArea.value = text;
}

alert("Hello, world!");

document.getElementById("biggerButton").onclick = makeBigger;
document.getElementById("fancyShmancy").onchange = applyFancyShmancy;
document.getElementById("boringBetty").onchange = applyFancyShmancy;
document.getElementById("mooButton").onclick = mooify;
