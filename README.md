# Sounds labyrinth

Sounds labyrinth is a dynamic game,designed for students of English as a foreign language to practice their pronunciation. The basic premise of the game is to go from the start to the finish, clicking horizontally or vertically on a table cell that has the word with the target sound, in this case, the long 'e'. The pool of words, both correct and incorrect, will be randomly drawn from a pool at the game start to ensure replayability. A score tracker will record correct and incorrect answers. It is targeted at both EFL students and EFL teachers.

## __UX__
* The site has been designed to be as minimalist as possible, with a stripped-down approach. Only what is required is displayed on the site. For many laptops, no scrolling will be required, and for smaller devices, the site is structured in such a way that the game area is separate and can be interacted with easily.
### __Colour Scheme__
* The colour scheme uses the background color of 'Cornsilk', which is neutral, and contrasts well with the black that is used for the fonts. When clicking on the cells of the grid, they will be coloured either red or green according to the answer that is input, which makes for a striking contrast to the simple base colours of the website.

### __Typography__
* The font used is [Zen Antique Soft](https://fonts.google.com/specimen/Zen+Antique+Soft). It was chosen for its simplicity, and professional look.

### __Wireframes__

## __Features__

### __Existing Features__


__Instructions section__
  * A section that gives the basic details on how to play the game, with an example, and the method to initiate the game.

__Score area__
  * A section that keeps a tally of correct and incorrect answers.

__Table containing cells to be filled with words by Javascript__
  * A 6x6 table, with only 2 cells filled at the beginning indicating the start and the finish point.

### __Features to be Implemented__

__New feature 1__
  * 
  * 

__New feature 2__
  * 

  ## __Technologies Used__
  * HTML was used to code the structure of the website, and CSS was used to style it. 
  * Balsamiq was used to create wireframes, to give a rough idea of how the website might look.
  * TinyPNG was an essential tool to reduce the size of photos, while at the same time maintaining resolution.
  *  The repository is hosted on GitHub, which allowed for version control.
  * Gitpod was the workspace used to code, and build the content of the website, which would then be committed to GitHub, where the respository is hosted.
  * Git was used for version control.

## __Testing__

### Browser Compatibility
* This site has been tested on three browsers for compatibility, as evidenced below:

Google Chrome, laptop view:

![Screenshot of website on Google Chrome](documentation/readme/laptop-view-chrome.png)

Firefox, mobile view:

![Screenshot of mobile view on Firefox](documentation/readme/mobile-view-firefox.png)

Microsoft Edge, tablet view:

![Screenshot of tablet view on Microsoft Edge](documentation/readme/tablet-view-edge.png)
### Code Validation

The code has passed through the code validators and no errors were found, as evidenced below:

CSS

![image of confirmation of CSS code validation](documentation/readme/css-code-validation.png)

index.html:

![image of confirmation of HTML code validation for index.html](documentation/readme/html-code-validator.png)

walks.html:

![image of confirmation of HTML code validation for walks.html](documentation/readme/walks-code-validation.png)

contact.html:

![image of confirmation of HTML code validation for contact.html](documentation/readme/contact-code-validation.png)


### Responsiveness

* The website has been tested for responsiveness on a variety of devices, as evidenced below:

![Image of different website pages across multiple devices](documentation/readme/responsive-design.png)

### Problems encountered

* One of the first problems I encountered while creating the code was how to draw objects from an array randomly, without there being any repeats. At this stage in my programming learning, I lack the knowledge of how to perform this myself; much searching on Google eventually led me to the stackoverflow forums, where I found someone who had been looking for the same solution as I had. I was able to use the code offered by a user (credited below), make some small adjustments, and suit it to my own needs.

* Another problem I ran into later on in the javascript was when creating a template literal for the checkAnswer function on line 233. I wanted the message to reuse the word that had been clicked on, i.e, if someone had clicked a cell with the word 'meat', this would be reproduced in the message. I was initially unable to produce the desired result, but with help from tutor support, I was pushed in the right direction to create a variable that would obtain the value using the keyword 'this'. I was also unsure as to whether the template literal should be placed inside the function, or separately, and was advised that it was better to make it a part of the same function.

### Unfixed Bugs

* To the best of my knowledge, no bugs exist in the website in its current state.

## Deployment

This project has been deployed to GitHub Pages.
From the repository, I went to the "Settings" tab and selected "Pages" from the sub-menu.
Once there, I selected the "main" branch from the dropdown, and then clicked the Save button.

The deployed site can be found [here](https://robn88.github.io/walk-cirencester-park).

### Local Deployment

If you would like to make a clone of this repository, you can type the following command in your IDE terminal:

- `git clone https://github.com/Robn88/walk-cirencester-park.git`

Alternatively, if you are using Gitpod, you can simply click on the green Gitpod button at the top of the repository, and this will create a new workspace in your Gitpod account. [This link](https://gitpod.io/#https://github.com/Robn88/walk-cirencester-park) will do the same thing for you if you do not see the green Gitpod button.

## Credits

### Content
* 

### Acknowledgements

* I would like to acknowledge the help provided to me by various people and websites, who have rendered the task of making this website easier, and in some cases, possible. In no particular order, I would like to thank:
   * w3schools.com, whose tutorials on HTML and CSS were a frequent reference for all matter of questions and doubts;
   * stackoverflow.com, whose forums provided me with many helpful answers to problems I was experiencing when writing my code;
   * The Slack community of Code Institute, a consisent source of warmth and encouragement, especially when I felt I was hitting my head against a wall;
   * My mentor Tim, whose guidance was always enlightening, criticism always firm but fair, and whose enthusiasm gave me much-needed self-belief;
  * Finally, to all of my friends and family who spent some of their precious time viewing the site on their various devices, and giving me feedback on what wasn't working.


getRandom function on line 16-28 of script.js:
https://stackoverflow.com/questions/50525909/random-item-from-array-with-no-repeat-using-javascript/50528028








