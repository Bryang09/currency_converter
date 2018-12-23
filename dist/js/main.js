let euro = document.querySelector("#euro");
let pound = document.querySelector("#pound");
let peso = document.querySelector("#peso");
let results = document.querySelector("#results");

let input = document.querySelector("#input");
input.addEventListener("input", inputListener);

function inputListener(e) {
  let value = e.target.value;
  console.log(value);

  euro.innerText = value * 0.88;
  pound.innerText = value * 0.79;
  peso.innerText = value * 19.94;

  if (value !== "") {
    results.style.display = "block";
  } else {
    return;
  }
}

console.log(euro.innerText);
