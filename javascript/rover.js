var compass = ["N", "E", "S", "W"];

var rover = {
  position: [0, 0],
  direction: "N",
  dropRover: function (startingPoint, startingDirection){
    this.position = startingPoint;
    this.direction = startingDirection;
  },
  getPosition: function (){
    return this.position;
  },
  setPosition: function(newPos) {
    this.position = newPos;
  },
  getDirection: function (){
    return this.direction;
  },
  setDirection: function(newDir) {
    this.direction = newDir;
  },
  turn: function(command) {
    var currentDir = compass.indexOf(this.getDirection());
    console.log(currentDir);
    var newDir;
    if (command === 'r') {
      if (currentDir === 3) {
        newDir = 0;
      } else {
        newDir = currentDir + 1;
      }
    } else {
      if (currentDir === 0) {
        newDir = 3;
      } else {
        newDir = currentDir - 1;
      }
    }
    console.log(newDir);
    this.setDirection(compass[newDir]);
  },
  move: function(command) {
    var x = this.position[0];
    var y = this.position[1];

    if (command === 'f') {
      if (this.direction === 'N') {
        y += 1;
      } else if (this.direction === 'S') {
        y -= 1;
      } else if (this.direction === 'E') {
        x += 1;
      } else if (this.direction === 'W') {
        x -= 1;
      }
    } else {
      if (this.direction === 'N') {
        y -= 1;
      } else if (this.direction === 'S') {
        y += 1;
      } else if (this.direction === 'E') {
        x -= 1;
      } else if (this.direction === 'W') {
        x += 1;
      }
    }

    this.setPosition([x,y]);
  }
};

var journey = function(commands) {
  commands.forEach(function(command) {
    command = command.toLowerCase();
    if (command === 'l' || command === 'r') {
      rover.turn(command);
    } else if (command === 'f' || command === 'b') {
      rover.move(command);
    } else {
      console.log("There was a problem with the array of commands. Please review and resubmit.");
    }
  });
}
