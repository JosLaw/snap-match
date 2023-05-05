# **Snap Match**
This website is a card matching game. You have a limited amount of time to find all the pairs. This wesbite is aimed at people of all ages that would like to play a simple memory based game for entertainment purposes.

Access the site here: https://joslaw.github.io/snap-match/

![screenshot of a screen mockup of the game Snap Match](assets/images/readme_docs/screen-mockup.png)
<br>
## **Goals/Expectations**
1. Provide a set of matching cards for the game
2. Set an achieveable objective for the game. 30 second timer
3. Give visual feedback for user interaction. Red for unmatched cards, green for matched cards, and alerts for completion or game over

---

## Design

The website uses a basic colour pallete of orange, white, and black, that is bright and vibrant to keep user attention. The font is an imported font called Delicious Handrawn. The header is the reverse colours of the favicon, with the font colour of the rest of the text being black.
The initial layout was planned using a programme called balsamiq to create the wireframe. The end product was adapted over the course of creation, and then further changed after user feedback. You can find the wireframe here:

## Future Updates

* Add more cards to create a larger game board and increase the difficulty. 
* Create two modes that increase or decrease the difficulty. This will be achieved by creating two timers, 30 seconds and 60 seconds. The user will have the ability to select which timer they would like to use for the game play.

---
## Features
### **Header**
The header contains the name of the game. The text is large in line witht he colour palette, with a white background to make it stand out
### **Game**
The game area is white with a box shadow around each card. This gives the illusion of of raised elements. 
### **Moves**
The moves counter is in black to provide enough contrast from the bright orange background. The counter will go up when 2 cards are clicked to be assessed for matches
### **Timer**
The timer counts down from 30 seconds. It is triggered after user clicks play on the modal, as well as when a user clicks the play icon after a game restart. It is stopped once the time runs out, or when all the card matches are found.

---
## Testing
The site has been tested on a variety of devices and browsers to check the functionality and media queries work correctly. These include the following:

* Laptop on Google Chrome and Microsoft Edge browsers
* Android mobile phone on Google Chrome browser
* Apple laptop on Google Chrome

The deployed site was shared amongst family and friends to obtain user experience feedback. Overall the feedback was positive

---
## Bugs
* The timer function was triggering more than once causing it to countdown twice as fast. This was resolved by clearing the timer immediately before it triggers.
* The alerts were also firing more than once causing the alert window to not close despite clicking it multiple times. A boolean was added to function to ensure the alerts were only triggered once as intended.

---
## Validator Testing
Lighthouse checks were conducted on the site, returning 75+ across the criteria

---
## Technologies
* HTML - Core structure of the site
* CSS - Styling of the site
* Javascript - Functionality and responsiveness of user initated interactions
* Gitpages - Hosts the live site
* Github - Stores the site code and logged versions
* Codeanywhere - Cloud IDE used to write/design the site
---
## Deployment
The project was deployed to GitHub Pages. The steps below explain the process.

 - Log in to GitHub and locate the GitHub Repository
 - At the top of the Repository (not top of page), locate the "Settings" button on the menu
 - Scroll down the Settings page until you locate the "GitHub Pages" section
 - Under "Branch", click the dropdowns to select "main" and "root"
 - Click save
 - Scroll up to locate the now published site link in the "GitHub Pages" section

 Forking the GitHub Repository makes a copy of the original repository on the GitHub account to view and/or make changes without affecting the original repository. The steps below explain the process.

 - Log in to GitHub and locate the GitHub Repository
 - At the top of the Repository just above the "Settings" button on the menu, locate the "Fork" button
 - You should now have a copy of the original repository in your GitHub account
 
 Use the below steps to make a Local Clone

 - Log in to GitHub and locate the GitHub Repository
 - Under the repository name, click "Clone or download"
 - To clone the repository using HTTPS, under "Clone with HTTPS", copy the link
 - Open Git Bash
 - Change the current working directory to the location where you want the cloned directory to be made
 - Type git clone, and then paste the URL you copied in Step 3
 - Press Enter. Your local clone will be created

---
## References/Credit
1. [Google Fonts](https://fonts.google.com/) - Create and import font
2. [Favicon](https://favicon.io/logo-generator/) - Create the favicon
3. [Flip Cards](https://www.w3schools.com/howto/howto_css_flip_card.asp) - Assist with flip card layout
4. [Color Generator](https://coolors.co/f28824-ffffff-e6e8e6-ced0ce-191919) - Generate color
5. [Font Awesome](https://fontawesome.com/) - Icons for the cards
6. [Emojipedia](https://emojipedia.org/grinning-face-with-smiling-eyes/) - Emoji for the alert messages
7. [Code Snippets](https://github.com/sandraisrael/Memory-Game-fend) - Code snippets for game functionality and layout of game area
8. [Modal](https://www.w3schools.com/howto/howto_css_modals.asp) - Create modal
9. [Multiple Functions](https://stackoverflow.com/questions/3910736/how-to-call-multiple-javascript-functions-in-onclick-event) - Code syntax to fire multiple functions
10. [Countdown Timer](https://www.w3schools.com/jsref/met_win_setinterval.asp) - Code syntax for timer
11. [Event Listeners](https://stackoverflow.com/questions/25028853/addeventlistener-two-functions) - Syntax for event listeners for mulitple functions
12. [Timeout](https://www.w3schools.com/jsref/met_win_settimeout.asp) - Syntax for timeout on gameOver function
13. [Alert](https://stackoverflow.com/questions/24768067/display-alert-only-once) - Solution to trigger alert once
14. [Timer](https://stackoverflow.com/questions/31036619/timer-goes-twice-as-fast-when-triggered-again) - Solution to timer going twice as fast