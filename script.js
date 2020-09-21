window.onload  = function() {
  gapCalc();
  closeNote();
}
window.onresize = function() {
  gapCalc();
}

function closeNote() {
  var container  = document.querySelector("#frame");
      closeArray = container.querySelectorAll("div[id*='close-']");
      noteArray  = container.querySelectorAll("div[id*='note-']");

  for(var i = 0, len = closeArray.length; i < len; i++) {
      console.log(noteArray[i].id);
      noteArray[i].onclick = function() {
      this.setAttribute('style','display:none');
    }
  }
}

function gapCalc() {
  var container  = document.querySelector("#frame");
      matches    = container.querySelectorAll("div[id*='note-']");
      wWidth     = window.innerWidth;
      gap        = 0;

      if (wWidth < 480) {
        gap = 22;
      }

  for (i = 0; i < matches.length; i++) {
    if (i > 0) {
      var offestValue = parseInt(matches[i-1].offsetTop) +   parseInt(matches[i-  1].offsetHeight) + gap;
      matches[i].setAttribute('style','top:'+ offestValue + 'px');
    }
  }
}
