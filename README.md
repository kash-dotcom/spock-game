# Spock Game 
## Rock  | Paper | Scissors | Lizard | Spock
Taking the game Rock, Paper, Scissors to a new level with famous adaptations featured on The Big Bang Theory.

This game of chance pits the user against the computer to see who can be the first to reach 5 points. It offers an interactive experience with 10 possible outcomes.

[Visit the live project](https://kash-dotcom.github.io/spock-game/)

![(assets/images/README/responsive.png)](assets/images/README/responsive.png)


## Target Audience
* Fans of The Big Bang Theory who have always wanted to play Rock, Paper, Scissors, Lizard, Spock.
* Those who enjoy playing mobile games and are looking for a short game to pass the time.

## User Stories

* **First-time users** - should easily begin the game with minimal guidance.
* **Returning visitors** - those interested in seeing how the game evolves, particularly with new Easter eggs.
* **Frequent users** - those who had fun playing initially and seek it as a means of stress relief.



# Features
The game is for people who enjoy the Big Bang Theory, and Star Trek and have nostalgic memories of computer games of the 80’s. It pays homage to the television shows with the Star Trek and Space Invaders.

![(assets/images/README/selection-verse.png)](assets/images/README/selection-verse.png)

## Title 
* The heading is short to make it easier to find and remember, especially for Repeat and frequent users. 
* Subheadings clearly describe the content and will be familiar to many people in Western countries who played the game during their childhood.
 

## Sofa & Scores
Fans of The Big Bang Theory will recognise the significance of the characters often gathered on the sofa, which serves as the focal point of the show. Similarly, this game places importance on a central spot where activity happens around it.  

In the mobile version the scores are kept underneath the sofa and are hidden when the games begins

* **Outcome** – helps users understand the reasons behind a game's victory or defeat
## Selection Buttons
* Users can choose a hand gesture, which is then shown above the player or computer.


![assets/images/README/selection-verse-user-choice.png](assets/images/README/selection-verse-user-choice.png)

## Modal
An instructions modal displays various options and includes a quote from The Big Bang Theory, accessible via the question mark icon. This familiar icon indicates help is available. Users can close the modal by clicking outside it or using the close button.

![(assets/images/README/modal.png)](assets/images/README/modal.png)

## Future Features

* Add  animations, such as visual representations of "Rock crushes Scissors".
* Include an Easter egg where users can click on "Sheldon’s Spot" to access more content.
* Implement hover-over colours that are a slightly deeper shade to indicate to desktop users what they can select.
* Simplify the code using more loops, iterations, and arrays.


## User Experience 

In a game of chance, users are given the opportunity to test their luck against the computer. The design ensures that players can grasp the concept and mechanics of the game without needing to leave the browser. Moreover, the game is accessible to those with limited English proficiency, thanks to its straightforward and intuitive interface.

# Design
A mock-up created with Canva featured wireframe and design components. This mock-up was instrumental in determining the layout, identifiers, classes, and colour palette. 

![(assets/images/README/mock-up.jpg)](assets/images/README/mock-up.jpg)

## Colour Palette

The colours are taken from a still image of The Big Bang Theory. When the player selects one of the buttons, it is shown above the scorecard with a cut-out version, using the same colours of the buttons but in reverse.

![(assets/images/README/color-scheme.png)](assets/images/README/color-scheme.png)


## Typography 

Three Google fonts are used in the project:
* **Font Awesome** Used for all icons and symbols for their simplicity and consistency.

* **Orbitron** giving it a Star Trek-like feel.
* **Handjet** with its pixelated look resembling the poor-quality graphics of the 80s, suiting the characters of The Big Bang Theory.
* **Roboto Mono** an easy-to-read font that allows users to read about the game’s origin and look at the 10 different possible outcomes.

![assets/images/README/title-instructions.png)](assets/images/README/title-instructions.png)

# Technologies Used
## Coding Languages
* HTML
* CSS3
* JavaScript

# External Resources

## Known Bugs
* Once a player reaches 5 points, they can continue to play, and the winning message will change. There is currently no upper limit to the game.
* The game title is not included once gameplay begins, but this does not affect the gameplay.

## Testing

### Manual Testing
* Three monitors were used to 
    * 1220 x 570px 
    * 1137 x 674px 
    * 2560 x 1440px
* Google Pixel 7

* **Gemini Ai** was used to check the function of any input code and ensure they were aligned to the developer’s purpose. Also, it was used as a coach to move throught the debugging process. If code was suggested it was not used in the project. 
* **Human-testers** Two avid mobile game players were involved, leading to changes in the modal and added gameplay instructions on the landing page.


## Frameworks, libraries & programs used
* **Gitpod** - to facilitate the writing of code
* **Git** – to support version control
* **Github** to deploy the website
* **Google Fonts** – supply the fonts for the whole site
* **Cloudinary** to facilitate mockup images included in the
* **Fonts Awesome** for social media logos#
* **site-shot** for taking screenshot of the whole website 

### Code Validation
The game has been frequently tested using Dev Tools for CSS, HTML, and JavaScript. Code validation tools used include:

* **JHint** Passed with 34 warnings related to the usage of ‘let’, ‘const’, and ‘template literal syntax’, which are available in ES6 (use 'version: 6').
* **Jigsaw w3** Passed with two warnings related to family names containing whitespace.
* **validator.w3** Passed with no warnings or errors.

## CSS
The CSS code passed validation using the W3C CSS Validator and no errors were found. However, there was two warnings related to family names containing whitespace.

![CSS Badge](https://res.cloudinary.com/ddqlomb2x/image/upload/v1724359190/vcss_xqav6s.png)

## HTML
Passed with no warnings or errors.

* [Desktop Analysis](https://res.cloudinary.com/ddqlomb2x/image/upload/v1727395651/lighthouse_desktop_Page_1_iwov9j.jpg)

- [ Mobile Analysis](https://asset.cloudinary.com/ddqlomb2x/525dab120879a6aab951f81879d6566c)

## Deployment
Lock into GibHub and locate the repository for [repository for Spock Game](https://github.com/kash-dotcom/spock-game)

1. Along the navigation bar locate settings
2. Scroll down the page and on the left-hand side navigation bar you will find Page
3. Under the Build and Deployment you will find "Source" and a drop-down menu None" select "Main" and click "Save".
4. The page will automatically refresh.
5. Scroll back to locate the now-published site link in the "GitHub Pages" section.

# Credits and Acknowledgements
* [Creating a modal](https://www.w3schools.com/howto/howto_css_modals.asp*/)

* [Visability hidden onload](https://www.reddit.com/r/learnjavascript/comments/aw5l96/how_do_i_change_the_display_or_visibility/)

* [Computer selecting a random from an array](https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/)

* W3school and MDN Web Docs

* Code Institutes lessons

* Stackoverflow and Slack Community

# Content
Copilot was used for proofreading. 

# Acknowledgements
* The two former students who shared their previous projects gave me the inspiration and belief that the game was possible to create. [TR94](https://github.com/TR94/rock-paper-scissors-lizard-spock/tree/main) & 
[knutinator](https://github.com/knutinator/lets-play-rpsls?tab=readme-ov-file). 
* My tutor, Mitko Bachvarov, who provided much-needed encouragement and support.
