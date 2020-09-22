function closeNote() {
  var container = document.querySelector("#frame");
  closeArray = container.querySelectorAll("div[id^='note-']");
  console.log(closeArray);

  for (var i = 0, len = closeArray.length; i < len; i++) {
    (function(index) {
      closeArray[index].onclick = function() {
        this.id = "closed-" + parseInt(index + 1);
        this.setAttribute('style', 'display:none');
        gapCalc();
      }
    })(i);
  }
}

function gapCalc() {
  var container = document.querySelector("#frame");
      matches   = container.querySelectorAll("div[id^='note-']");
      wWidth    = window.innerWidth;
      gap       = 12;
      firstTop  = 0;
      sum       = 0;

  // mobile
  if (wWidth < 480) {
      gap      = 18;
      firstTop = 26;
  }


  for (i = 0; i < matches.length; i++) {
    if (i > 0) {
      var offsetHeight = matches[i-1].offsetHeight;
      sum += offsetHeight + gap;
      matches[i].setAttribute('style', 'top:' + sum + 'px;');
    }
    else {
      matches[i].setAttribute('style', 'top:' + firstTop + 'px;');
    }
  }
}

closeNote();
gapCalc();
