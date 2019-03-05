	<!-- exercise 1 -->
<!-- 	<script>
	  // The old runLevel function. Modify this...
	  function runLevel(level, Display) {
	    let display = new Display(document.body, level);
	    let state = State.start(level);
	    let ending = 1;
	    return new Promise(resolve => {
	      runAnimation(time => {
	        state = state.update(time, arrowKeys);
	        display.syncState(state);
	        if (state.status == "playing") {
	          return true;
	        } else if (ending > 0) {
	          ending -= time;
	          return true;
	        } else {
	          display.clear();
	          resolve(state.status);
	          return false;
	        }
	      });
	    });
	  }
	  runGame(GAME_LEVELS, DOMDisplay);
	</script> -->

	
	<!-- exercise 2 -->
<!-- 	<script>
	  // The old runLevel function. Modify this...
	  function runLevel(level, Display) {
	    let display = new Display(document.body, level);
	    let state = State.start(level);
	    let ending = 1;
	    return new Promise(resolve => {
	      runAnimation(time => {
	        state = state.update(time, arrowKeys);
	        display.syncState(state);
	        if (state.status == "playing") {
	          return true;
	        } else if (ending > 0) {
	          ending -= time;
	          return true;
	        } else {
	          display.clear();
	          resolve(state.status);
	          return false;
	        }
	      });
	    });
	  }
	  runGame(GAME_LEVELS, DOMDisplay);
	</script> -->

	<!-- exercise 3 -->

  <!-- <script>
    // Complete the constructor, update, and collide methods
    class Monster {
      constructor(pos, /* ... */) {}

      get type() { return "monster"; }

      static create(pos) {
        return new Monster(pos.plus(new Vec(0, -1)));
      }

      update(time, state) {}

      collide(state) {}
    }

    Monster.prototype.size = new Vec(1.2, 2);

    levelChars["M"] = Monster;

    runLevel(new Level(`
			..................................
			.################################.
			.#..............................#.
			.#..............................#.
			.#..............................#.
			.#...........................o..#.
			.#..@...........................#.
			.##########..............########.
			..........#..o..o..o..o..#........
			..........#...........M..#........
			..........################........
			..................................
			`), DOMDisplay);
  </script> -->