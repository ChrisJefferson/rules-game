var RuleArray = (function() {
  var rulegenOffset = function(offx, offy) {
    return function(grid, x, y, step) {
      grid.flip(x + offx, y + offy);
    };
  };

  var rulegenStep = function(offx, offy) {
    return function(grid, x, y, step) {
      grid.flip(x + step * offx, y + step * offy);
    };
  };

  var rulegenSequence = function(sequence) {
    return function(grid, x, y, step) {
      grid.flip(
        x + sequence[step % sequence.length][0],
        y + sequence[step % sequence.length][1]
      );
    };
  };

  var circle = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1]
  ];

  return [
    rulegenOffset(0, 0),
    rulegenOffset(0, 1),
    rulegenStep(1, 0),
    rulegenSequence(circle)
  ];
})();
