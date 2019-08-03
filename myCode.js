
let measurmentShow = (measureNum) => {
  //will show a number on the result field each 0.05 of a second as it's measureing before the measureNum is passed into the result field 
  let interval = setInterval(function() {
    let temp = Math.floor(Math.random() * 100);
    document.querySelector("#meter").innerHTML = temp + "%";
  }, 50);

  setTimeout(() => {
    clearInterval(interval);
    document.querySelector("#meter").innerHTML = measureNum + "%";
  }, 1500);
};

let operate = () => {
  //will be sure the none of the inputs are empty
  let one = document.querySelector("#one").value;
  let two = document.querySelector("#two").value;

  if (one === "" || two === "") {
    alert("please fill the input feilds first");
    return;
  }
  
  let measureNum =Math.floor(Math.random() * 50) + 50;

  measurmentShow(measureNum);
};

const app = () => {
  document.querySelector("#meter").innerHTML = 0 + "%";
};

app();
