// obtaining the navs & span
const nav_bmi = document.getElementById("nav_bmi");
const nav_health_risk = document.getElementById("nav_health_risk");
const nav_nutrients = document.getElementById("nav_nutrients");
const nav_resources = document.getElementById("nav_resources");
const spanspan = document.querySelectorAll(".span");
// obtaining the sections
const bmi = document.querySelector(".bmi");
const health_risk = document.querySelector(".health_risk");
const nutrients = document.querySelector(".nutrients");
const resources = document.querySelector(".resources");
// addEventListener to nav
nav_bmi.addEventListener("click", display1);
nav_health_risk.addEventListener("click", display2);
nav_nutrients.addEventListener("click", display3);
nav_resources.addEventListener("click", display4);
spanspan.forEach(element => {
    element.addEventListener("click", display4)

});
// functions for the nav addEventlistner
function display1() {
    nav_bmi.classList.add("colorpicker");
    nav_health_risk.classList.remove("colorpicker");
    nav_nutrients.classList.remove("colorpicker");
    nav_resources.classList.remove("colorpicker");
    setTimeout(display1_time, 2);
    // ////////////////////////////
    bmi.classList.remove("nothing");
    health_risk.classList.add("nothing")
    nutrients.classList.add("nothing")
    resources.classList.add("nothing")
    health_risk.classList.remove("stretch_full");
    nutrients.classList.remove("stretch_full");
    resources.classList.remove("stretch_full");
}
function display2() {
    nav_health_risk.classList.add("colorpicker");
    nav_bmi.classList.remove("colorpicker");
    nav_nutrients.classList.remove("colorpicker");
    nav_resources.classList.remove("colorpicker");
    setTimeout(display2_time, 2);
    // ////////////////////////////
    bmi.classList.add("nothing");
    resources.classList.add("nothing")
    nutrients.classList.add("nothing")
    health_risk.classList.remove("nothing");
    bmi.classList.remove("stretch_full");
    nutrients.classList.remove("stretch_full");
    resources.classList.remove("stretch_full");
}
function display3() {
    nav_nutrients.classList.add("colorpicker");
    nav_bmi.classList.remove("colorpicker");
    nav_health_risk.classList.remove("colorpicker");
    nav_resources.classList.remove("colorpicker");
    setTimeout(display3_time, 2);
    // ////////////////////////////
    bmi.classList.add("nothing");
    resources.classList.add("nothing")
    health_risk.classList.add("nothing");
    nutrients.classList.remove("nothing");
    bmi.classList.remove("stretch_full");
    health_risk.classList.remove("stretch_full");
    resources.classList.remove("stretch_full");
}
function display4() {
    nav_resources.classList.add("colorpicker");
    nav_bmi.classList.remove("colorpicker");
    nav_health_risk.classList.remove("colorpicker");
    nav_nutrients.classList.remove("colorpicker");
    setTimeout(display4_time, 2);
    // ////////////////////////////
    bmi.classList.add("nothing");
    resources.classList.remove("nothing")
    health_risk.classList.add("nothing");
    nutrients.classList.add("nothing");
    bmi.classList.remove("stretch_full");
    nutrients.classList.remove("stretch_full");
    health_risk.classList.remove("stretch_full");
}
// function for timeout
function display1_time() {
    bmi.classList.add("stretch_full");
}
function display2_time() {
    health_risk.classList.add("stretch_full");
}
function display3_time() {
    nutrients.classList.add("stretch_full");
}
function display4_time() {
    resources.classList.add("stretch_full");
}

// yeah now that I think about it. It could have been easier to use queryselector all.

// BMI cal

const ft = document.getElementById("ft")
const ins = document.getElementById("in")
const lb = document.getElementById("lb")
const fin = document.getElementById("fin")
const sumb = document.getElementById("sumb")

sumb.addEventListener("click", bmical)

function bmical() {
    fin.classList.remove("colorred")
    let answer = 703 * parseInt(lb.value) / Math.pow(((parseInt(ft.value) * 12) + parseInt(ins.value)), 2)
    fin.value = Math.round(answer * 10) / 10
    if (fin.value == "NaN") {
        fin.value = "Please Check Inputs"
        fin.classList.add("colorred")
    }



}


