const level2downbtn = document.getElementById("down1");
const level1downbtn = document.getElementById("down2");
const level1upbtn = document.getElementById("up1");
const level0upbtn = document.getElementById("up2");
const elevator = document.querySelector(".elevator");
const floors = document.querySelectorAll(".floor");
const elevatorSound = document.getElementById("elevatorSound");

function playElevatorSound() {
  elevatorSound.play();
}

function pauseElevatorSound() {
  elevatorSound.pause();
}

let currentFloor = 0;
let targetFloor = 0;

function moveElevator(targetFloor) {
  playElevatorSound();
  const distance = Math.abs(targetFloor - currentFloor);
  elevator.style.bottom = `${targetFloor * 33.45}%`;
  elevator.style.transitionDuration = `${5 * distance}s`;
  currentFloor = targetFloor;

  setTimeout(() => {
    pauseElevatorSound();
    const isLevel0UpPressed =
      level0upbtn.style.borderBottom === "30px solid green";
    const isLevel1UpPressed =
      level1upbtn.style.borderBottom === "30px solid green";
    const isLevel2DownPressed =
      level2downbtn.style.borderTop === "30px solid green";
    const isLevel1DownPressed =
      level1downbtn.style.borderTop === "30px solid green";

    if (isLevel0UpPressed && isLevel1UpPressed) {
      level0upbtn.style.borderBottom = "30px solid black";
      setTimeout(() => {
        level1upbtn.style.borderBottom = "30px solid black";
        targetFloor = 2;
        currentFloor = 1;
        moveElevator(targetFloor);
      }, 2000);
    } else if (
      isLevel2DownPressed &&
      isLevel1DownPressed &&
      elevator.offsetTop < 300 &&
      elevator.offsetTop > 150
    ) {
      level2downbtn.style.borderTop = "30px solid black";
      setTimeout(() => {
        level1downbtn.style.borderTop = "30px solid black";
        targetFloor = 0;
        currentFloor = 1;
        moveElevator(targetFloor);
      }, 2000);
    } else {
      if (isLevel2DownPressed && elevator.offsetTop < 100) {
        level2downbtn.style.borderTop = "30px solid black";
        targetFloor = 0;
        currentFloor = 2;
        moveElevator(targetFloor);
      }
      if (isLevel0UpPressed && elevator.offsetTop > 50) {
        level0upbtn.style.borderBottom = "30px solid black";
        targetFloor = 2;
        currentFloor = 0;
        moveElevator(targetFloor);
      } else if (isLevel1DownPressed && elevator.offsetTop > 400) {
        level1downbtn.style.borderTop = "30px solid black";
        targetFloor = 0;
        currentFloor = 1;
        moveElevator(targetFloor);
      } else if (
        level1downbtn.style.borderTop === "30px solid green" &&
        elevator.offsetTop < 300 &&
        elevator.offsetTop > 200
      ) {
        level1downbtn.style.borderTop = "30px solid black";
        targetFloor = 0;
        currentFloor = 1;
        moveElevator(targetFloor);
      } else if (isLevel0UpPressed && isLevel1UpPressed) {
        targetFloor = 1;
        currentFloor = 0;
        moveElevator(targetFloor);
      } else if (
        isLevel1UpPressed &&
        elevator.offsetTop < 300 &&
        elevator.offsetTop > 200
      ) {
        level1upbtn.style.borderBottom = "30px solid black";
        targetFloor = 2;
        currentFloor = 1;
        moveElevator(targetFloor);
      }
    }
  }, 5 * distance * 1000);
}

function level2down() {
  level2downbtn.style.borderTop = "30px solid green";
  targetFloor = 2;
  if (elevator.offsetTop > 400) {
    currentFloor = 0;
  } else if (elevator.offsetTop < 350 && elevator.offsetTop > 200) {
    currentFloor = 1;
  } else {
    currentFloor = 2;
    setTimeout(() => {
      level0upbtn.style.borderBottom = "30px solid black";
    }, 1000);
  }
  moveElevator(targetFloor);
}

function level1down() {
  level1downbtn.style.borderTop = "30px solid green";
  targetFloor = 0;
  if (elevator.offsetTop > 400) {
    targetFloor = 1;
    currentFloor = 0;
    moveElevator(targetFloor);
  } else if (elevator.offsetTop < 350 && elevator.offsetTop > 200) {
    targetFloor = 0;
    currentFloor = 1;
    moveElevator(targetFloor);
    setTimeout(() => {
      level1downbtn.style.borderTop = "30px solid black";
    }, 1000);
  } else if (elevator.offsetTop < 100) {
    targetFloor = 1;
    currentFloor = 2;
    moveElevator(targetFloor);
  }
}

function level1up() {
  level1upbtn.style.borderBottom = "30px solid green";
  targetFloor = 2;
  if (elevator.offsetTop > 400) {
    targetFloor = 1;
    currentFloor = 0;
    moveElevator(targetFloor);
  } else if (elevator.offsetTop < 100) {
    targetFloor = 1;
    currentFloor = 2;
    moveElevator(targetFloor);
  } else {
    currentFloor = 0;
    moveElevator(targetFloor);
  }
}

function level0up() {
  level0upbtn.style.borderBottom = "30px solid green";
  if (elevator.offsetTop > 400) {
    setTimeout(() => {
      level0upbtn.style.borderBottom = "30px solid black";
    }, 1000);
    targetFloor = 2;
    currentFloor = 0;
    moveElevator(targetFloor);
  } else if (elevator.offsetTop < 350 && elevator.offsetTop > 200) {
    targetFloor = 0;
    currentFloor = 1;
    moveElevator(targetFloor);
  } else if (elevator.offsetTop < 100) {
    targetFloor = 0;
    currentFloor = 2;
    moveElevator(targetFloor);
  }
}
