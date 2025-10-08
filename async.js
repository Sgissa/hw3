const picContainer = document.getElementById("pics-container");
const errorMsg = document.getElementById("error-msg");

async function fetchPics() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/20");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    displayPics(data.message);
    errorMsg.textContent = "";
  } catch (error) {
    console.error(error);
    errorMsg.textContent = "⚠️ Failed to fetch data. Please try again later.";
  }
}

async function displayPics(images) {
  picContainer.innerHTML = "";

  images.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Cute dog";
    picContainer.appendChild(img);
  });
}


fetchPics();