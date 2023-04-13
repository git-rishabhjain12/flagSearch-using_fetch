const input = document.querySelector("input");
const anchorButton = document.querySelector("a");
const flagbox = document.querySelector("#box2");

anchorButton.onclick = (e) => {
  e.preventDefault();
  flagbox.innerHTML = "";

  async function fetchData() {
    const response = await fetch("https://flagcdn.com/en/codes.json");
    const result = await response.json();
    // console.log(result);
    showFlag(result);
  }
  fetchData();
};

function showFlag(flags) {
  let error = 1;
  flagbox.innerHTML = "";
  const flagName = input.value;
  const flagCapitalize =
    flagName.charAt(0).toUpperCase() + flagName.slice(1).toLowerCase();

  for (let [key, value] of Object.entries(flags)) {
    if (value === flagCapitalize) {
      const img = document.createElement("img");
      img.src = "https://flagcdn.com/160x120/" + [key][0] + ".png";
      flagbox.append(img);
      error = 0;
    }
  }
  if (error === 1) {
    const span = document.createElement("span");
    span.innerHTML = "Please check the spelling";
    flagbox.append(span);
  }
}
