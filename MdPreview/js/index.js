
window.onload = function() {
  document.body.innerHTML= "<div id='wrapper'>" + marked(document.querySelector('pre').innerText, {
    breaks: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  }) + "</div>";
  document.body.style.display = 'block';
}