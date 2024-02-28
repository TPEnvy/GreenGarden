fetch("/components/account-management.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("account-management").innerHTML = html;
  })
  .catch((error) => console.error("Error fetching account management:", error));
