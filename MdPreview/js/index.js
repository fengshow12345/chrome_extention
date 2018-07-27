document.body.innerHTML= "<div id='wrapper'>" + marked(document.querySelector('pre').textContent, {
  breaks: true,
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
}) + "</div>";
document.body.style.display = 'block';