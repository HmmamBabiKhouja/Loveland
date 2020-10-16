let measure = (one, two) => {
  let num = 0;
  
  // it's a made up result for my friends
  // otherwise it'll return a random result 
  if (
    ((one === "عبد الرحمن" && two === "نور") || (one === "نور" && two === "عبد الرحمن"))
    ||
    ((one === "محمود" && two === "رنيم") || (one === "رنيم" && two === "محمود"))
    ||
    ((one === "همام" && two === "اسراء" || two === "إسراء") || (one === "اسراء" || one === "إسراء" && two === "همام"))
    ||
    ((one === "hmmam"|| one ===  "hmam" && two === "esra"||two === "esraa") || (one === "esra"||one === "esraa" && two === "hmmam"||two === "hmam"))
    ||
    ((one === "قمر" && two === "محمد") || (one === "محمد" && two === "قمر"))
    ||
    ((one === "هبة" && two === "اسامة") || (one === "اسامة" && two === "هبة"))
  ) {
    num = 100;
  } else {
    num = Math.floor(Math.random() * 60) + 40;
  }
  return num;
};

let measurmentShow = (measureNum) => {
  //will show a number on the result field each 0.05 of a second as it's measureing before the measureNum is passed into the result field 
  let interval = setInterval(function() {
    let temp = Math.floor(Math.random() * 100);
    document.querySelector("#meter").innerHTML = temp + "%";
  }, 28);

  setTimeout(() => {
    clearInterval(interval);
    document.querySelector("#meter").innerHTML = measureNum + "%";
  }, 2000);
};

let operate = () => {
  //will be sure the none of the inputs are empty
  let one = document.querySelector("#one").value;
  let two = document.querySelector("#two").value;

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
