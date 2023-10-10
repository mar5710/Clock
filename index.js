// let str = "asdd4sa4a7f8df45f4f4"
// let count = 0

// function foo(a) {
//     let x = str.match(/(-?\d+(\.\d+)?)/g).map(Number)
//     console.log(x);
    
// }

// foo(str)

const deg = 6;
const hr = document.querySelector('.hr');
const sc = document.querySelector('.sc');
const mn = document.querySelector(".mn")

setInterval(() => {
    let day = new Date();
    
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})