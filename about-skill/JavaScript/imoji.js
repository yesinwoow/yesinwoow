const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let emojiMap = {};
let iconMap = {};

// 🔥 Load both JSON files + content
Promise.all([
  fetch("data/emoji-map.json").then(res => res.json()),
  fetch("data/icon-map.json").then(res => res.json()),
  fetch(`data/${id}.json`).then(res => {
    if (!res.ok) throw new Error("Not found");
    return res.json();
  })
])
.then(([emojiData, iconData, content]) => {

  emojiMap = emojiData;
  iconMap = iconData;

  // Title
  document.getElementById("title").innerText = content.title;

  // Markdown → HTML
  const descEl = document.getElementById("desc");
  descEl.innerHTML = marked.parse(content.desc);

  // Optional icon
  document.getElementById("icon").innerHTML =
    `<i class="${content.icon}"></i>`;

  // Emoji replace run
  replaceEmoji(descEl);

})
.catch(err => {
  document.getElementById("title").innerText = "Content not found ❌";
  document.getElementById("desc").innerHTML = "";
  console.error(err);
});


// 🔥 Core engine: emoji → group → icon
function replaceEmoji(root) {

  if (!emojiMap || !iconMap) return;

  const regex = new RegExp(
    Object.keys(emojiMap).join("|"),
    "g"
  );

  root.querySelectorAll("p, h1, h2, h3, li,title, strong, blockquote").forEach(el => {

    el.innerHTML = el.innerHTML.replace(regex, match => {

      const group = emojiMap[match];
      const iconClass = iconMap[group];

      // fallback (if missing)
      if (!iconClass) return match;

      return `<i class="${iconClass}"></i>`;
    });

  });
}