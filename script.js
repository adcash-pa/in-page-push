window.onload = function() {
  gapCalc();
  closeNote();
}
window.onresize = function() {
  gapCalc();
}

function closeNote() {
  var container = document.querySelector("#frame");
  closeArray = container.querySelectorAll("div[id*='close-']");

  for (var i = 0, len = closeArray.length; i < len; i++) {
    (function(index) {
      closeArray[index].onclick = function() {
        this.parentNode.parentNode.id = "closed-" + parseInt(index + 1);
        gapCalc();
        this.parentNode.parentNode.setAttribute('style', 'display:none');
      }
    })(i);
  }
}

function gapCalc() {
  var container = document.querySelector("#frame");
      matches   = container.querySelectorAll("div[id^='note-']");
      wWidth    = window.innerWidth;
      gap       = 0;
      firstTop  = 0;
      heightSum = 0;
      topGap    = 0;

  // mobile
  if (wWidth < 480) {
      gap      = 17;
      topGap   = 8;
  }

  for (i = 0; i < matches.length; i++) {
    if (i > 0) {
      var offsetHeight = matches[i-1].offsetHeight;
      heightSum += offsetHeight + gap;
      if (i == 1) {
        heightSum = offsetHeight + gap*2+topGap;
      }
      matches[i].setAttribute('style', 'top:' + heightSum + 'px;');
    }
    else {
      matches[i].setAttribute('style', 'top:' + parseInt(gap+topGap) + 'px;');
    }
  }
}
