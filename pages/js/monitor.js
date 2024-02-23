document.addEventListener("DOMContentLoaded", function () {
  // New code for generating multiple progress bars
  const soilContainer = document.getElementById("soilContainer");
  const soilData = [
    { name: "Container Water Level", percentage: 20 },
    { name: "Soil Moisture", percentage: 40 },
    { name: "pH Level", percentage: 60 },
  ];

  soilData.forEach((data) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col-md-3");

    const cardContent = `
      <div class="card border-primary align-items-center bg-secondary pt-3 pb-5 px-5 mb-4">
      <i class="bi bi-question-circle-fill align-items-right" style="font-size: 28px"></i>
      <div class="sub-menu-wrap">
        <div class="sub-menu"></div>
      </div>
        <h4 class="text-black py-3 align-items-center">${data.name}</h4>
        <div class="align-items-center">
        <div class="progress-bar" data-progress="${data.percentage}">
          <span class="progress-label">${data.percentage}%</span>
        </div>
        </div>
      </div>
    `;

    cardDiv.innerHTML = cardContent;
    soilContainer.appendChild(cardDiv);

    // Animation function for each progress bar
    const progressBar = cardDiv.querySelector(".progress-bar");
    const progressLabel = cardDiv.querySelector(".progress-label");
    const progressValue = parseInt(progressBar.dataset.progress);
    let currentProgress = 0;

    const animateProgressBar = () => {
      if (currentProgress < progressValue) {
        currentProgress++;
        progressLabel.textContent = `${currentProgress}%`;

        // Calculate the angle based on current progress percentage
        const angle = (currentProgress / 100) * 360;

        // Determine color based on progress range
        let color;
        if (currentProgress <= 25) {
          color = "red";
        } else if (currentProgress <= 50) {
          color = "orange";
        } else if (currentProgress <= 75) {
          color = "yellow";
        } else {
          color = "green";
        }

        // Set the progress bar gradient background with the determined color
        progressBar.style.background = `conic-gradient(${color} ${angle}deg, #D9D9D9 0deg)`;

        setTimeout(animateProgressBar, 15); // Smoother animation with shorter timeout
      }
    };

    animateProgressBar(); // Start the animation
  });

  // Create a single card for Temperature and Humidity
  const combinedCardDiv = document.createElement("div");
  combinedCardDiv.classList.add("col-md-3");

  const combinedCardContent = `
    <div class="card border-primary align-items-center bg-secondary py-5 px-5 mb-4">
      <h4 class="text-black py-3">Temperature</h4>
      <div class="progress-bar temperature" data-progress="28"> <!-- Adjust the initial temperature value here -->
        <span class="progress-label">28°C</span>
      </div>
      <h4 class="text-black py-4">Humidity </h4>
      <div class="progress-bar humidity" data-progress="55">
        <span class="progress-label">60%</span>
      </div>
    </div>
  `;

  combinedCardDiv.innerHTML = combinedCardContent;
  soilContainer.appendChild(combinedCardDiv);

  // Animation function for Temperature progress bar
  const temperatureProgressBar = combinedCardDiv.querySelector(
    ".progress-bar.temperature"
  );
  const temperatureProgressLabel =
    temperatureProgressBar.querySelector(".progress-label");
  const temperatureProgressValue = parseInt(
    temperatureProgressBar.dataset.progress
  );
  let currentTemperatureProgress = 0;

  const animateTemperatureProgressBar = () => {
    if (currentTemperatureProgress < temperatureProgressValue) {
      currentTemperatureProgress++;
      temperatureProgressLabel.textContent = `${currentTemperatureProgress}°C`;

      // Determine color based on temperature range
      let color;
      if (
        currentTemperatureProgress <= 18 ||
        currentTemperatureProgress >= 35
      ) {
        color = "red";
      } else if (
        (currentTemperatureProgress >= 19 &&
          currentTemperatureProgress <= 22) ||
        (currentTemperatureProgress >= 33 && currentTemperatureProgress <= 34)
      ) {
        color = "orange";
      } else if (
        (currentTemperatureProgress >= 23 &&
          currentTemperatureProgress <= 25) ||
        (currentTemperatureProgress >= 30 && currentTemperatureProgress <= 32)
      ) {
        color = "yellow";
      } else {
        color = "green";
      }

      // Calculate the angle based on the color
      let angle;
      switch (color) {
        case "red":
          angle = (25 / 100) * 360; // 25% of 360 degrees
          break;
        case "orange":
          angle = (50 / 100) * 360; // 50% of 360 degrees
          break;
        case "yellow":
          angle = (75 / 100) * 360; // 75% of 360 degrees
          break;
        case "green":
          angle = 360; // 100% of 360 degrees
          break;
      }

      // Set the progress bar gradient background with the determined color and angle
      temperatureProgressBar.style.background = `conic-gradient(${color} ${angle}deg, #D9D9D9 0deg)`;

      setTimeout(animateTemperatureProgressBar, 28); // Smoother animation with shorter timeout
    }
  };

  animateTemperatureProgressBar(); // Start the temperature animation

  // Animation function for Humidity progress bar
  const humidityProgressBar = combinedCardDiv.querySelector(
    ".progress-bar.humidity"
  );
  const humidityProgressLabel =
    humidityProgressBar.querySelector(".progress-label");
  const humidityProgressValue = parseInt(humidityProgressBar.dataset.progress);
  let currentHumidityProgress = 0;

  const animateHumidityProgressBar = () => {
    if (currentHumidityProgress < humidityProgressValue) {
      currentHumidityProgress++;
      humidityProgressLabel.textContent = `${currentHumidityProgress}%`;

      // Calculate the angle based on current humidity
      const angle = (currentHumidityProgress / 100) * 360;

      // Determine color based on humidity range
      let color;
      if (currentHumidityProgress <= 25) {
        color = "red";
      } else if (currentHumidityProgress <= 50) {
        color = "orange";
      } else if (currentHumidityProgress <= 75) {
        color = "yellow";
      } else {
        color = "green";
      }

      // Set the progress bar gradient background with the determined color
      humidityProgressBar.style.background = `conic-gradient(${color} ${angle}deg, #D9D9D9 0deg)`;

      setTimeout(animateHumidityProgressBar, 28); // Adjust speed as needed
    }
  };

  animateHumidityProgressBar(); // Start the humidity animation
});
