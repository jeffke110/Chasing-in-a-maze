# Chasing-in-a-maze
https://jeffke110.github.io/Chasing-in-a-maze/
Chasing in a Maze is a JavaScript game project that puts the player in a maze filled with enemies and pellets. The goal is to navigate the maze, collect all the pellets, and avoid getting caught by the enemies. The game is played on a canvas with a size of 400x400 pixels, and each tile in the maze is 20x20 pixels.

Features
The enemy characters continuously chase the player at a speed of 1 pixel per frame.
Each enemy character computes its path using the A-Star search algorithm, but the computation occurs once every 20 to 30 frames or less.
When the player character touches a pellet, the pellet disappears, and the player progresses towards winning the game.
When the player character touches the freeze-power, the power-up disappears, and all enemies freeze for 5 seconds, during which they do not chase the player.
Neither the player character nor the enemy characters can pass through walls.
When the player character reaches the edge of the maze with no wall, they wrap around and enter from the other side.
If any enemy character catches the player, the game ends.
After the game ends, clicking anywhere on the screen restarts the game, with all characters returning to their original positions within the maze.

Controls
W - move up
A - move left
D - move right
S - move down
After the game is over, press the mouse key to play again
