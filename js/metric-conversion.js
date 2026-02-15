
function calculate(){
  const l = Number(document.getElementById("length").value);
  const w = Number(document.getElementById("width").value);
  const h = Number(document.getElementById("height").value);
  const unit = document.getElementById("unit").value;

  if(!l || !w || !h){
    alert("Please enter all values");
    return;
  }

  let volumetricWeight;

  if(unit === "cm"){
    volumetricWeight = (l * w * h) / 5000;
  } else {
    volumetricWeight = (l * w * h) / 305;
  }

  document.getElementById("output").innerText =
    volumetricWeight.toFixed(2) + " KG";
}
