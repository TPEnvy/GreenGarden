document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/filters.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("filters").innerHTML = html;

      var selectSelected = document.querySelector(".select-selected");
      var selectItems = document.querySelectorAll(".select-item");
      var selectedValueInput = document.getElementById("selected-value");

      selectSelected.addEventListener("click", function () {
        var selectItemsContainer = this.nextElementSibling;
        selectItemsContainer.style.display =
          selectItemsContainer.style.display === "block" ? "none" : "block";
      });

      selectItems.forEach(function (item) {
        item.addEventListener("click", function () {
          var selectedValue = this.dataset.value;
          var selectedText = this.innerText;
          selectSelected.innerText = selectedText;
          selectedValueInput.value = selectedValue;
          closeAllSelect();
        });
      });

      function closeAllSelect() {
        var selectItemsContainers = document.querySelectorAll(".select-items");
        selectItemsContainers.forEach(function (container) {
          container.style.display = "none";
        });
      }

      document.addEventListener("click", function (event) {
        if (!event.target.closest(".custom-select")) {
          closeAllSelect();
        }
      });
    })
    .catch((error) => console.error("Error fetching filters:", error));
});
