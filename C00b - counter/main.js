const defaultButtonColor = "#173451";
const activeButtonColor = "#992154";

const btnBye = document.querySelector('.counter__actions .btn--blue:nth-child(2)');
const btnPlay = document.querySelector(".btn--blue:nth-child(2)");
const btnPause = document.querySelector(".btn--blue:nth-child(3)");
const btnReset = document.querySelector(".btn--blue:nth-child(4)");
const startInput = document.getElementsByName("start")[0];
const endInput = document.getElementsByName("end")[0];
const valueNumber = document.querySelector(".valueNumber");
let interval; 

function setButtonColors(playColor, resetColor, pauseColor) {
    btnPlay.style.backgroundColor = playColor;
    btnReset.style.backgroundColor = resetColor;
    btnPause.style.backgroundColor = pauseColor;
}

function loadStartNumber() {
    clearInterval(interval);
    valueNumber.innerHTML = startInput.value || 0;
    setButtonColors(defaultButtonColor, defaultButtonColor, defaultButtonColor);

}

function startCount() {
    let startNumber = parseInt(valueNumber.innerHTML) || parseInt(startInput.value) || 0;
    let endNumber = parseInt(endInput.value) || 3;

    function updateNumber() {
        if (startNumber == endNumber) { 
            clearInterval(interval);
            btnPlay.disabled = false;
            valueNumber.innerHTML = endNumber;
            setButtonColors(defaultButtonColor, activeButtonColor, defaultButtonColor);
        }

        valueNumber.innerHTML = startNumber;
        startNumber++;
    }

    const timeInterval = 1000;
    interval = setInterval(updateNumber, timeInterval);
    btnPlay.disabled = true;
    setButtonColors(activeButtonColor, defaultButtonColor, defaultButtonColor);
}

function restetCount() {
    clearInterval(interval);
    btnPlay.disabled = false;
    valueNumber.innerHTML = startInput.value;
    setButtonColors(defaultButtonColor, activeButtonColor, defaultButtonColor);
}

function pauseCount() {
    clearInterval(interval);
    btnPlay.disabled = false;
    valueNumber.innerHTML = valueNumber.innerHTML;
    setButtonColors(defaultButtonColor, defaultButtonColor, activeButtonColor);
}

function greet() {
    alert("Xin chào!");
}

function farewell() {
    alert("Tạm biệt!");
}