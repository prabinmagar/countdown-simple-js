

const startBtn = document.getElementById('startBtn');
const countNum = document.getElementById('showCountDown');

let num = 10; 
const colors = ['#284b63', '#ed254e', '#f6ae2d', '#7fb069', '#f8f32b', '#574ae2', '#00a878', '#001524', '#4e0250'];


startBtn.addEventListener('click', function(){
    this.style.display = "none";
    countNum.style.display = "block";

    let interval = setInterval(displayCounter, 1000);

    function displayCounter(){
        num--; // our counting will start from 9

        if(num === 0){
            countNum.innerHTML = "Go";
            clearInterval(interval);
        } else {
            countNum.innerHTML = num;
        }

        document.getElementById('showCountDown').style.color = `${colors[num]}`;
        
    }
})