# Tauro Memory Game

A memory game designed to test and improve the mind and the players skills with a simple scoring system where the lowest score is your objective.

GitHub Pages link: https://tstauras83.github.io/2nd-milestone-project/Index.html

## Requirements

    1. Cards are to be shuffled on load or restart
    2. Game should know how to handle matched and unmatched cards
    3. Game should display the current number of moves a user has made
    4. The game should have a Rating system to show how well the player did at the end.
    5. When a player starts a game, a displayed timer should also start and once the player wins the game, the timer stops.
    6. A restart button should allow the player reset the game board and the timer.
    7. A congratulations modal should appear when the player wins while showing a button to play again and modal should show: How much time it took, the number of moves, number of mistakes, and rating.

## UX

The UX of this project will be as simplistic as possible without being bear bones. as the main point of the site is the game. and how well that functions. the game UX will also be simple so that the player can focus on the game. and improving their score.

- As a user type, I want to be able to locate and match all of the images, so that I can try and get the lowest possible score.

## Features

- The main features of the project are the cards, that the user plays with, they turn around on click, once you select a card it turns blue. once you select a 2nd car it will turn red if they don't match if they do match they will turn green and stay open for the remainder of the run.

- The Score system is a very important part of the game as it keeps track of your time, moves, mistakes and gives you an overall score in the end while telling you how you did.

- As the user completes the game they will be presented with a model that shows all the stats in the end. the scores, moves, time ect... this is so that players can see how they did and know if they improved their overall score or not.

### Features Left to Implement

- Leaderboard system.
- leaderboard tracking through a server.
- login system

## Technologies Used

-[HTML]() - HTML as the base language for the whole project in the visual aspect of what the user can see.

-[CSS]() - CSS to give color, style, and more visual appeal and effect to the HTML.

-[JS]() - JS to power the whole game that HTML sets the framework for, it is what makes everything move and work correctly.

-[FontAwesome](https://fontawesome.com/) - FA is a library of icons that are on the cards.

## Testing

As most of the content is based on the user actually moving stuff. the entirety of the testing was manual.

1. Card Turning:

   1. Reset the game
   2. click on any card in the list
   3. watch if it turns. and if it does not glitch out the icon
   4. repeat for every card at least once. if the card does not have an icon on the back of the card. and is correct once it turned over. its working correctly

1. Cards matching:

   1. Open any random card.
   2. Open a 2nd card, if they match( same icon on the card once it turns over ) then they should both turn green. and stay open
   3. once the cards stay open, keep opening move cards to see if all are able to match
   4. once all cards are matched the game should end and the model appears showing the results

1. Cards unmatched:

   1. open a card.
   2. open the 2nd card. (cards should not match this time)
   3. cards should how up red to indicate that they did not match
   4. cards turn back over hiding the icon

1. Cards shuffling:every time the game starts the cards should shuffle around and change their locations

   1. Restart the game
   2. check cards or complete the game
   3. restart using the restart button and play fully
   4. restart using the try again button in the model

1. resetting the game: should reboot the game after pressing it.
   1. cards should all close.
   2. all counters and timer should be set to 0. this includes (timer[minutes, seconds], moves, mistakes, and overall score )
   3. if modal was on screen, it should be hidden
   4. and you can play the game again :)

## Bugs

    - overall score not working due to the JS code for it being outside of a function.
    - cards not turning and messing up the grid due to the JS not being run correctly after an error was introduced in a different part of the code.
    - opacity of the cards was wrong, once they turn the icon could not be seen.

## Deployment

GitHub Pages deployment.

- using pages because of the simplicity of the project and the setup process on pages.

- changed from /assets/lib/js/app.js to https://tstauras83.github.io/2nd-milestone-project/assets/lib/js/app.js
- changed from /assets/css/style.css to https://tstauras83.github.io/2nd-milestone-project/assets/style/style.css
- created a new branch for further development.
- to run the game locally. simply start the HTML file in a web browser.

### Media

only media in the file are from fontawesome and are obtained from their free library

### Acknowledgements

- I received inspiration for this project from multiple project both online and on youtube that combined to create this.
- https://www.youtube.com/watch?v=tjyDOHzKN0w
- https://dev.to/fakorededamilola/create-a-memory-game-with-js-1l9j
