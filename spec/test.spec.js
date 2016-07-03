describe('DL Mars Rover', function(){
  it('should have a position', function() {
    expect(rover.position).not.toBe(null);
  });

  it('should have a direction', function() {
    expect(rover.direction).not.toBe(null);
  });
});

describe('Given start position [0,0] and direction "N",', function(){

  // Direction
  it('should face "W" when passed "l"', function() {
    rover.dropRover([0,0], "N");
    journey(['l']);
    expect(rover.direction).toBe('W');
  });
  it('should face "E" when passed "r"', function() {
    rover.dropRover([0,0], "N");
    journey(['r']);
    expect(rover.direction).toBe('E');
  });
  it('should face "S" when passed "r,r"', function() {
    rover.dropRover([0,0], "N");
    journey(['r', 'r']);
    expect(rover.direction).toBe('S');
  });
  it('should face "S" when passed "l,l"', function() {
    rover.dropRover([0,0], "N");
    journey(['l', 'l']);
    expect(rover.direction).toBe('S');
  });

  // Position
  it('should move to [0,-1] when passed "b"', function() {
    rover.dropRover([0,0], "N");
    journey(['b']);
    expect(rover.position).toEqual([0,-1]);
  });
  it('should move to [0,1] when passed "f"', function() {
    rover.dropRover([0,0], "N");
    journey(['f']);
    expect(rover.position).toEqual([0,1]);
  });

  // Combination turning/movement
  it('should move to [2,-4] when passed "frfrfffflfflbrb"', function() {
    rover.dropRover([0,0], "N");
    journey(['f','r','f','r','f','f','f','f','l','f','f','l','b','r','b']);
    expect(rover.position).toEqual([2,-4]);
  });
});
