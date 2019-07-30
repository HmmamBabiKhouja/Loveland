let measure = (one, two) => {
  let num = 0;
  if (
    ((one === "عبد الرحمن" && two === "نور") ||(one === "نور" && two === "عبد الرحمن")) ||
    ((one === "محمود" && two === "رنيم") ||(one === "رنيم" && two === "محمود")) ||
    ((one === "fares" && two === "monika") ||(one === "monika" && two === "fares")) ||
    ((one === "قمر" && two === "محمد") || (one === "محمد" && two === "قمر"))
  ) {
    num = 100;
  } else {
    num = Math.floor(Math.random() * 50) + 50;
  }

  return num;
};


let measurmentShow=(measureNum)=>{

  let interval=setInterval(()=>{
    let temp = Math.floor(Math.random * 100);
    document.querySelector("#meter").innerHTML=temp+"%";
  },50);

  setTimeout(() => {
    clearInterval(interval);
    document.querySelector("#meter").innerHTML=measureNum+"%";
  }, 1500);

}


const app = () => {
  document.querySelector("#meter").innerHTML = 0 + "%";

  let begin = document.querySelector("#begin");
  begin.addEventListener("click", () => {});
  let one = document.querySelector("#one");
  let two = document.querySelector("#two");
  one.trim().toLowerCase();
  two.trim().toLowerCase();

  let measureNum=measure(one,two);
  measurmentShow(measureNum);
};

app();
