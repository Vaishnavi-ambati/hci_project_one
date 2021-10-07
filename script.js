function toggleClass(el, className) {
  if (el.className.indexOf(className) >= 0) {
    el.className = el.className.replace(className, "");
  } else {
    el.className += className;
  }
}

// function to highlight and unhighlight the content using unique id.
function highlight(rowName) {

    var data = document.getElementById(rowName)
    if (data.style.backgroundColor == "yellow") {
      data.style.backgroundColor = "";
    }
    else {
      data.style.backgroundColor = "yellow";
    }

  }
