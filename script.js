async function getCities() {
  try {
    const buttonText = document.getElementById("get-cities-button-text");
    buttonText.innerHTML = "Loading...";

    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries/population/cities"
    );
    const json = await response.json();

    buttonText.innerHTML = "Get all cities";

    console.log(json);
  } catch (error) {
    console.log("error:", error);
  }
}
