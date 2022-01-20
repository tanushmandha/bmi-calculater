var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var form = document.getElementById("form");

const validateForm=()=>{
    if(age.value=="" ||height.value=="" || weight.value=="" ){
        alert("ALL FIELDS ARE REQUIRED!!");
        document.getElementById("submit").removeEventListenner("click",countBmi);
    }else{
        countBmi();
    }
}

document.getElementById("submit").addEventListener("click",validateForm);

const countBmi=()=>{
    var p=[age.value, height.value,weight.value];
    form.reset();

    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])*100)

    var result='';
    if(bmi<18.5){
        result='Oops! You are underweight. You gotta add pounds healtfully';
    }else if (18.5<=bmi&&bmi<=24.9){
        result='Yay! you are healthy. You can have a pizza or two';
    }else if (25<=bmi&&bmi<=29.9){
        result='You gotta cut down on your unheathy stuff & and you will be perfectly healthy';
    }else if (30<=bmi&&bmi<=34.9){
        result='Oops! Its high time you traun ur brain to hate junk food ';
    }else if (30<=bmi){
        result='Obesity alert! No more junk food '
    }           
}
