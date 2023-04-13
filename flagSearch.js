const input = document.querySelector("input");
const anchorButton = document.querySelector("a");

anchorButton.onclick = (e) => {
  e.preventDefault();
  const flagbox = document.querySelector("#box2");
  flagbox.innerHTML = "";

  async function fetchData() {
    const response = await fetch("https://flagcdn.com/en/codes.json");
    const result = await response.json();
    console.log(result);
    showFlag(result);
  }
  fetchData();
};

function showFlag(flags) {
  const flagName = input.value;
  const flagCapitalize =
    flagName.charAt(0).toUpperCase() + flagName.slice(1).toLowerCase();

  for (let [key, value] of Object.entries(flags)) {
    if (value === flagCapitalize) {
      const img = document.createElement("img");
      img.src = "https://flagcdn.com/160x120/" + [key][0] + ".png";
      document.querySelector("#box2").append(img);
    }
  }
}
