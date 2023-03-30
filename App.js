const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");

function calulateBMI(){
    //console.log("click");
    const heightValue = document.getElementById("height").value/100
    const weightValue = document.getElementById("weight").value

    //console.log(heightValue, weightValue);

    const bmiValue = weightValue/(heightValue*heightValue);

    //console.log(bmiValue);
    bmiInputEl.value = bmiValue;
    

}


btnEl.addEventListener("click", calulateBMI)