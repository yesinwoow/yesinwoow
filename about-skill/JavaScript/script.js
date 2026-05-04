fetch("content")
  .then(res => res.json())
  .then(data => {
    document.getElementById("title").innerText = data.title;

    // Markdown to HTML
    document.getElementById("desc").innerHTML = marked.parse(data.desc);
  })
  .catch(err => {
    document.getElementById("title").innerText = "Error loading content";
    console.error(err);
  });