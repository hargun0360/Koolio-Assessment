const level2downbtn = document.getElementById("down1");
const level1downbtn = document.getElementById("down2");
const level1upbtn = document.getElementById("up1");
const level0upbtn = document.getElementById("up2");
const elevator = document.querySelector(".elevator");
const floors = document.querySelectorAll(".floor");

let currentFloor = 0;
let targetFloor = 0;

setInterval(() => {
  console.log(elevator.offsetTop);
}, 2000);

function moveElevator(targetFloor) {
  const distance = Math.abs(targetFloor - currentFloor);
  elevator.style.bottom = `${targetFloor * 33.45}%`;
  elevator.style.transitionDuration = `${5 * distance}s`;
  currentFloor = targetFloor;
  setTimeout(() => {
    if (level2downbtn.style.borderTop == "30px solid green") {
      level2downbtn.style.borderTop = "30px solid black";
    } else if (level1downbtn.style.borderTop == "30px solid green") {
      if (elevator.offsetTop < 300 && elevator.offsetTop > 200) {
        setTimeout(() => {
            level1downbtn.style.borderTop = "30px solid black";
            targetFloor = 0;
        currentFloor = 1;
        moveElevator(targetFloor);
        },1000)
      }
    }else if(level1upbtn.style.borderBottom == "30px solid green"){
        if (elevator.offsetTop < 300 && elevator.offsetTop > 200) {
            setTimeout(() => {
                level1upbtn.style.borderBottom = "30px solid black";
                targetFloor = 2;
                currentFloor = 1;
                moveElevator(targetFloor);
            },1000)
          }
    }else if(level0upbtn.style.borderBottom == "30px solid green"){
        if (elevator.offsetTop < 300 && elevator.offsetTop > 200) {
            setTimeout(() => {
                level0upbtn.style.borderBottom = "30px solid black";
                targetFloor = 2;
                currentFloor = 1;
                moveElevator(targetFloor);
            },1000)
          }else if(elevator.offsetTop > 400){
            setTimeout(() => {
                level0upbtn.style.borderBottom = "30px solid black";
            },1000)
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
  }else if(elevator.offsetTop < 350 && elevator.offsetTop > 200){
    targetFloor = 0;
    currentFloor  = 1;
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
      targetFloor = 1;
      currentFloor = 0;
      moveElevator(targetFloor);
    }else if(elevator.offsetTop < 350 && elevator.offsetTop > 200){
        targetFloor = 0;
        currentFloor = 1;
        moveElevator(targetFloor);
    } else if (elevator.offsetTop < 100) {
      targetFloor = 0;
      currentFloor = 2;
      moveElevator(targetFloor);
    }
  }
  
