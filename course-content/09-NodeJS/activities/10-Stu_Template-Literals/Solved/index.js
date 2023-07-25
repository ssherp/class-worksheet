// music should be an object with title, artist, and album properties
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
const music = {
  title: "Trem Fantasma",
  artist: "Os Mutantes",
  album: "Os Mutantes, Self Titled"
};

// Inside of the backticks we use ${} to get access to the data inside of our object.
const songSnippet = `${music.title} 
by '${music.artist}' 
from the \`\ (escaped) 'curlies' \${}\ "album" ${music.album} 
is currently playing (Spaces Matter)`;


// const songSnippet = `${music.title} by '${music.artist}' from the  (escaped) 'curlies'  "album" ${music.album} 
// is currently playing (Spaces Matter)`;

console.log(songSnippet)





const myREADME = `# 🏗️ Implement Template Literals

Work with a partner to implement the following user story:

* As a developer, I want to know how to use template literals inside of a string.

## Acceptance Criteria 

* It's done when I have created a music object in Unsolved/index.js.

* It's done when I have added title, artist, and album properties to the music object.

* It's done when I have used template literals inside the songSnippet variable to output data from the music object.

* It's done when I see the results in my command line after I run the index.js file.

## 💡 Hints

* Can we use template literals in place of string concatenation?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* It's easy to get confused about which syntax belongs to which technology. The dollar sign ($) is used a lot in JavaScript&mdash;what are some other places you have seen the dollar sign used?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.`;

// console.log(myREADME );