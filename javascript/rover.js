var compass = ["N", "E", "S", "W"];

var planet = {
  width: 5,
  height: 5,
  getWidth: function() {
    return this.width;
  },
  setWidth: function(width) {
    this.width = width;
  },
  getHeight: function() {
    return this.height;
  },
  setHeight: function(height) {
    this.height = height;
  },
  buildWorld: function(startingWidth, startingHeight) {
    this.setWidth(startingWidth);
    this.setHeight(startingHeight);
  },
  blockedTerrain: [],
  setObstacles: function(arr) {
    this.blockedTerrain = arr;
  },
  isClear: function(x,y) {
    return this.blockedTerrain.indexOf([x,y]) === -1;
  }
};

var rover = {
  position: [0, 0],
  direction: "N",
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
  dropRover: function (startingPoint, startingDirection){
    this.setPosition(startingPoint);
    this.setDirection(startingDirection);
  },
  turn: function(command) {
    var currentDir = compass.indexOf(this.getDirection());
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
    this.setDirection(compass[newDir]);
  },
  move: function(command) {
    var x = this.position[0];
    var y = this.position[1];

    if (command === 'f') {
      if (this.direction === 'N') {
        y === planet.height ? y = -(planet.height) : y += 1;
      } else if (this.direction === 'S') {
        y === -(planet.height) ? y = planet.height : y -= 1;
      } else if (this.direction === 'E') {
        x === planet.width ? x = -(planet.width) : x += 1;
      } else if (this.direction === 'W') {
        x === -(planet.width) ? x = planet.width : x -= 1;
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
    if (planet.isClear(x,y)) {
      this.setPosition([x,y]);
    } else {
      console.error("Careful! There's an obstacle in the rover's path. It's gone as far as it can go. Please provide revised directions.");
    }
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
