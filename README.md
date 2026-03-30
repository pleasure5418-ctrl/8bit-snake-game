# 🐍 8-Bit Snake Game

A classic retro Snake game built with HTML5 Canvas and JavaScript. Simple, fun, and nostalgic!

## Features

✅ **Retro 8-bit Style** - Pixelated graphics with authentic green-on-black terminal look  
✅ **Simple Controls** - Use arrow keys to move the snake  
✅ **Score Tracking** - Earn 10 points for each food eaten  
✅ **Progressive Difficulty** - Game speeds up as you progress  
✅ **Collision Detection** - Wall and self-collision detection  
✅ **Fully Playable** - Works in any modern web browser  

## How to Play

1. **Open** `index.html` in your web browser
2. **Use Arrow Keys** (↑ ↓ ← →) to move the snake
3. **Eat the red food** to grow and earn points
4. **Avoid hitting** walls or yourself
5. **Beat your high score!**

## Files

- `index.html` - Main HTML file (contains the game canvas)
- `style.css` - Retro 8-bit styling with green terminal aesthetic
- `snake.js` - Complete game logic and mechanics

## Quick Start

### Option 1: Local Play
1. Clone this repository: `git clone https://github.com/pleasure5418-ctrl/8bit-snake-game.git`
2. Open `index.html` in your browser
3. Start playing!

### Option 2: GitHub Pages
If you've enabled GitHub Pages for this repository:
- Visit: `https://pleasure5418-ctrl.github.io/8bit-snake-game/`

**To enable GitHub Pages:**
1. Go to repository Settings
2. Scroll to "GitHub Pages" section
3. Select `main` branch as source
4. Save and wait 1-2 minutes for deployment

## Game Controls

| Key | Action |
|-----|--------|
| ↑ Arrow Up | Move up |
| ↓ Arrow Down | Move down |
| ← Arrow Left | Move left |
| → Arrow Right | Move right |

## Game Rules

- The snake starts with 1 segment
- Each food eaten adds 1 segment and 10 points
- The game speeds up as your score increases
- Game ends if you hit a wall or yourself
- Click "RESTART GAME" button or reload the page to play again

## Code Structure

The game uses a simple game loop pattern:

1. **Update** - Updates snake position, checks collisions, handles food
2. **Draw** - Renders the snake, food, and game canvas
3. **Loop** - Repeats every 100ms (adjusts for difficulty)

Perfect for learning game development basics!

## Future Enhancements

- [ ] Pause/Resume button
- [ ] Multiple difficulty levels
- [ ] High score tracking (localStorage)
- [ ] Power-ups
- [ ] Sound effects
- [ ] Mobile touch controls

## License

Open source - feel free to modify and learn from the code!

---

**Enjoy the game! 🎮**