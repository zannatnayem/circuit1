const first = document.querySelector("#R1");
const man = document.querySelector("#man");
const third = document.querySelector("#R3");
const fourth = document.querySelector("#R4");
const ee = document.querySelector("#torith");
const percent = document.querySelector("#percent");
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");

btn.addEventListener("click", function(){
    var first1 = parseFloat(first.value);
    // var second1= parseFloat(second.value);
    var third1 = parseFloat(third.value);
    var fourth1 = parseFloat(fourth.value);
    var ee1 = parseFloat(ee.value);
    var percent1 = parseFloat(percent.value);
    
    //clear input
    first.value = ""
    // second.value = ""
    third.value = ""
    fourth.value = ""
    ee.value = ""
    percent.value = ""
      
    const math1 = (first1 * (third1+fourth1)) * percent1
    const math2 =  ((third1+fourth1) + first1)* ee1
    // const math3 =  math2 * ee1
     const math3  = math1 - math2
     const math4 = ee1 - ((third1+fourth1)*percent1)
     const math5 = math3/math4
    console.log(math5)
  man.innerHTML=math5 + " ohm"

})

