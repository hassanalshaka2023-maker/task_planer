let ALARM = "";
const audio = new Audio("audio/miku_alarm.mp3");
const audioBreak = new Audio(
  "audio/broken-glass-sound-effect-high-quality.mp3",
);

const startTime = () => {
  const today = new Date();
  let h = today.getHours().toString().padStart(2, "0");
  let m = today.getMinutes().toString().padStart(2, "0");
  let s = today.getSeconds().toString().padStart(2, "0");

  const time = h + ":" + m + ":" + s;
  document.getElementById("clock").innerHTML = time;

  if (time === ALARM) {
    // alert("😎 Alarm!");
    soundEffect();
    fall();
  }

  setTimeout(startTime, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  const setbtn = document.getElementById("set-alarm");
  setbtn.addEventListener("click", () => {
    const input = document.getElementById("alarm-time");
    ALARM = input.value;

    setbtn.style.backgroundColor = "red";
    setbtn.innerHTML = "Alarm Set!";

    console.log("Alarm set to:", ALARM);
  });

  startTime();
});

const soundEffect = async () => {
  try {
    const video = document.getElementById("miku");
    await audioBreak.play();

    await new Promise((resolve) => {
      audioBreak.onended = resolve;
    });
    video.style.display = " inline-flex";
    await audio.play();
  } catch (error) {
    console.error("Playback interrupted or blocked by browser:", error);
  }
};
