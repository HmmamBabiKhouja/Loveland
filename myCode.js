

$("#run").click(function(){
  var one=$("#male").val().trim();
  var two=$("#female").val().trim();

  var num=0;
  if((one==="عبد الرحمن" && two ==="نور"  ||one==="نور" && two === "عبد الرحمن")||
  (one==="محمود" && two ==="رنيم"  ||one==="رنيم" && two ==="محمود"   )||
  (one ==="fares" && two ==="nadja" ||one ==="nadja" && two ==="fares")||
  (one ==="قمر" && two ==="محمد" ||one ==="محمد" && two ==="قمر")){
    num=100;
  }else {
    num=Math.floor(Math.random() * 50)+50;
  }

  var interval =setInterval(function() {
    var temp=Math.floor(Math.random()*100);
    $("#meter").text(temp+"%");
  },50)

  setTimeout(function () {
    clearInterval(interval);
    $("#meter").text(num+"%");
  },1500)


})
