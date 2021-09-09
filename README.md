# A flex panel image gallery

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgement](#acknowledgement)

## Overview

### The challenge

User should be able to view the images by clicking on them.

### Screenshot

![Desktop View](./screenshot/flex-panel-gallery.gif)

- Solution URL: [Git Repo](https://github.com/moeen-mahmud/flexible-image-gallery)
- Live Site URL: [Live Site](https://flexible-image-gallery.vercel.app/)

## My Process

### Built With

- HTML5 markup
- JavaScript
- Document Object Model

### What I learned

The project is kind of CSS heavy. I learned some techniques and methods especially the nesting flex method. They were interesting. Let me show the snippet below:

```css
/* Flex Parent */
.panel {
  font-size: 20px;
  background-size: cover;
  background-position: center;
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

/* Flex Children */
.panel > * {
  margin: 0;
  width: 100%;
  transition: transform 0.5s;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Continued Development

This project is from [Wes Bos's 30 JavaScript](https://javascript30.com/) course. It is the fourth one and interesting one!

### Useful resources

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
- [JavaScript 30](https://javascript30.com/)

## Author

- Twitter - [moeen_mahmud](https://twitter.com/moeen_mahmud)

## Acknowledgement

A huge thanks to [Wes Bos](https://javascript30.com/).
