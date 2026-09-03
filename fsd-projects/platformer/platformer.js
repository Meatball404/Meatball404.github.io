$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 700, 30, 490)
    createPlatform(450, 600, 250, 40, "red");
    createPlatform(800, 500, 200, 50, "red");
    createPlatform(500, 400, 200, 50, "red")
     createPlatform(800, 320, 200, 50, "red")
    createPlatform(650, 1100, 200, 50, "red")
    createPlatform(400, 250, 200, 50, "red");
    
   




    // TODO 3 - Create Collectable
    createCollectable("steve", 300,  50);
    createCollectable("steve", 1000, 300, 50);



    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
createCannon("right", 250, 1000);
createcannon("left", 500, 100);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
