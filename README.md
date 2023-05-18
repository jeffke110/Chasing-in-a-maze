# Chasing-in-a-maze
https://jeffke110.github.io/Chasing-in-a-maze/
The canvas size is 400x400. Using the tilemap shown below, where each tile is 20x20 pixels, 
and where 'w' indicates a wall block, '+' indicates a pellet, '-' indicates blank space, 
'M' indicates the main player character, 'p' indicates freeze-power, and 'E' indicates the enemy character.

Implementation:
The enemies use a A star pathfinder algorithm that calculates the shortest distance
to the player around the wall obstacles. After it is calculated, the enemy travels towards the player.

Goal:
The player must collect all the stars or pellets without being touched by the enemy.
The player can use the freeze or blue star to freeze the enemies for 5 seconds.

Controls
W - move up
A - move left
D - move right
S - move down
After the game is over, press the mouse key to play again
