// import "@material/web/button/filled-button.js";
// import "@material/web/button/outlined-button.js";
// import "@material/web/checkbox/checkbox.js";

// Fetch and insert navigation HTML using Fetch API
fetch("/components/header.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("navigation").innerHTML = html;
  })
  .catch((error) => console.error("Error fetching navigation:", error));
