⭕ Tic-Tac-Toe (Vanilla JavaScript)
📌 Overview

This project is a classic Tic-Tac-Toe (Morpion) game built using vanilla JavaScript and DOM manipulation. Two players take turns placing “X” and “O” on a 3×3 grid, and the game automatically detects winning combinations.

The UI provides clear visual feedback: the active player is highlighted, winning cells are styled, and the winner is announced. A New Game button allows players to reset everything instantly.

✨ Features

Two-player turn-based gameplay

Visual indication of active player

Automatic win detection (rows, columns, diagonals)

Highlighting of winning boxes

Winner announcement in UI

Full game reset with “New Game” button

Prevents moves after game end or on occupied cells

🛠️ Technologies Used

HTML

CSS

JavaScript (ES6+)

DOM Manipulation

Event Listeners

🎯 How to Play

Player 1 starts with X, Player 2 plays O.

Click on an empty box to place your symbol.

The first player to align three symbols (horizontally, vertically, or diagonally) wins.

Click New Game to restart from scratch.

💡 Notes on Implementation

Each cell maintains its own “filled” state to prevent overwriting.

The game checks all possible winning combinations after every move.

CSS classes are dynamically added/removed to update the UI (active player, winner, highlighted boxes).
