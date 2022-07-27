const pomodoroId1 = document.getElementById("tab1");
const pomodoroId2 = document.getElementById("tab2");
const pomodoroId3 = document.getElementById("tab3");
const pomodoroBtnBody = document.querySelector(".pomodoro__btn-body");
const pomodoroBtn = document.querySelector(".pomodoro__btn");
const pomodoroBtnStop = document.querySelector(".pomodoro__btn-stop");
const wrapper = document.querySelector(".wrapper");
const idBlue = document.getElementById("blue");
const idRed = document.getElementById("red");
const idGreen = document.getElementById("green");

//Глобальные переменные (в сек) , которые хранят в себе оставшиеся количество сек при итерации
let intervald; // принимает функцию setinterval
let timePomodoro = 25 * 60;
let timeShortBreak = 5 * 60;
let timeLongBreak = 15 * 60;

//Функции подсчёта минут и сеунд для каждого таба
function updatePomodoro() {
  let minutes = Math.floor(timePomodoro / 60);
  let seconds = timePomodoro % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  pomodoroId1.innerHTML = `${minutes}:${seconds}`;
  --timePomodoro;
}

function updateShortBreak() {
  let minutes = Math.floor(timeShortBreak / 60);
  let seconds = timeShortBreak % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  pomodoroId2.innerHTML = `${minutes}:${seconds}`;
  --timeShortBreak;
}

function updateLongBreak() {
  let minutes = Math.floor(timeLongBreak / 60);
  let seconds = timeLongBreak % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  pomodoroId3.innerHTML = `${minutes}:${seconds}`;
  timeLongBreak--;
  if (timeLongBreak < 0) {
    clearInterval(intervald);
  }
}

//При клике на кнопку старт запускаем таймер, окно которого сейчас активно
pomodoroBtn.addEventListener("click", function (event) {
  if (wrapper.classList.contains("_active-red")) {
    intervald = setInterval(updatePomodoro, 1000);
  }

  if (wrapper.classList.contains("_active-blue")) {
    intervald = setInterval(updateShortBreak, 1000);
  }

  if (wrapper.classList.contains("_active-green")) {
    intervald = setInterval(updateLongBreak, 1000);
  }
});

// Обнуляем другие таймеры, при переходе на другой
idRed.addEventListener("click", function (event) {
  if (event.target.id == "red") {
    pomodoroId3.innerHTML = `15:00`;
    pomodoroId2.innerHTML = `05:00`;
    clearInterval(intervald);
  }
});

idBlue.addEventListener("click", function (event) {
  if (event.target.id == "blue") {
    pomodoroId1.innerHTML = `25:00`;
    pomodoroId3.innerHTML = `15:00`;
    clearInterval(intervald);
  }
});

idGreen.addEventListener("click", function (event) {
  if (event.target.id == "green") {
    pomodoroId1.innerHTML = `25:00`;
    pomodoroId2.innerHTML = `05:00`;
    clearInterval(intervald);
  }
});

//При нажатии на кнопку стоп, останавливаем функцию Setinterval по id
pomodoroBtnStop.addEventListener("click", function () {
  clearInterval(intervald);
});

//Меняем цвета таймера при клике на таб, и удаляем предыдущий стиль фона таймера
document.addEventListener("click", function (event) {
  if (event.target == idRed) {
    wrapper.classList.add("_active-red");
    wrapper.classList.remove("_active-green");
    wrapper.classList.remove("_active-blue");

    idRed.classList.add("_active-red");
    idGreen.classList.remove("_active-green");
    idBlue.classList.remove("_active-blue");

    pomodoroBtnBody.classList.add("_active-color-red");
    pomodoroBtnBody.classList.remove("_active-color-green");
    pomodoroBtnBody.classList.remove("_active-color-blue");
  }

  if (event.target == idBlue) {
    wrapper.classList.add("_active-blue");
    wrapper.classList.remove("_active-green");
    wrapper.classList.remove("_active-red");

    idBlue.classList.add("_active-blue");
    idGreen.classList.remove("_active-green");
    idRed.classList.remove("_active-red");

    pomodoroBtnBody.classList.add("_active-color-blue");
    pomodoroBtnBody.classList.remove("_active-color-green");
    pomodoroBtnBody.classList.remove("_active-color-red");
  }

  if (event.target == idGreen) {
    wrapper.classList.add("_active-green");
    idBlue.classList.remove("_active-blue");
    wrapper.classList.remove("_active-red");

    idGreen.classList.add("_active-green");
    idGreen.classList.remove("_active-blue");
    idRed.classList.remove("_active-red");

    pomodoroBtnBody.classList.add("_active-color-green");
    pomodoroBtnBody.classList.remove("_active-color-blue");
    pomodoroBtnBody.classList.remove("_active-color-red");
  }
});
