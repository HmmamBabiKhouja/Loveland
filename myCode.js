let measure = (one, two) => {
  // it's a made up result for my friends
  // otherwise it'll return a random result 
  let num = 0;
  if (
    ((one === "عبد الرحمن" && two === "نور") ||
      (one === "نور" && two === "عبد الرحمن")) ||
    ((one === "محمود" && two === "رنيم") ||
      (one === "رنيم" && two === "محمود")) ||
    ((one === "fares" && two === "monika") ||
      (one === "monika" && two === "fares")) ||
    ((one === "قمر" && two === "محمد") ||
      (one === "محمد" && two === "قمر"))
  ) {
    num = 100;
  } else {
    num = Math.floor(Math.random() * 50) + 50;
  }
  return num;
};


let measurmentShow = (measureNum) => {
  //will show a number on the result field each 0.05 of a second as it's measureing before the measureNum is passed into the result field 
  let interval = setInterval(function() {
    let temp = Math.floor(Math.random() * 100);
    document.querySelector("#meter").innerHTML = temp + "%";
  }, 50);

  setTimeout(() => {
    clearInterval(interval);
    document.querySelector("#meter").innerHTML = measureNum + "%";
  }, 1000);
};

let operate = () => {
  //will be sure the none of the inputs are empty
  let one = document.querySelector("#one").value;
  let two = document.querySelector("#two").value;
  one.toLowerCase().trim();
  two.toLowerCase().trim();
  alert(one);
  alert(two);
  if (one === "" || two === "") {
    alert("املا البيانات في خانات الكتابة! من قضلك");
    return;
  }
  
  let measureNum = measure(one,two);
  measurmentShow(measureNum);
};

const app = () => {
  document.querySelector("#meter").innerHTML = 0 + "%";
};

app();
