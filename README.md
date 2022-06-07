# Getting Started with the portfolio site 

## Evaluation 

## Process

Create a new react app 
``npm create-react-app`` add a name for the app. Open the file and check the basic react application using ``npm start``.   

In each component use the react shortcut ``rafce`` to install the react boilerplate  ``React Arrow Function Export``

## Dependencies 

### Paralax
~~Install react-parallax ```npm i react-parallax```, open the package .json and ensure its installed.~~
### Navbar
~~Install react navbar ``npm i responsive-navbar-react`` docs: https://bdbose.github.io/responsive-navbar-react/  repo https://github.com/bdbose/responsive-navbar-react this works well, however, I was not able to have full access to the CSS and  as it dist/index.css was buried in the ``dist/index.css``.~~

![This is an image](/src/components/img/portfolio_01.JPG)
![This is an image](/src/components/img/portfolio_01-side.JPG)
![This is an image](/src/components/img/portfolio_01-desktop.JPG)

Decided to code it from scratch...

How to build a custom responsive navbar

install ``react-scroll`` react-scroll is a component to animate your vertical scroll ``npm install react-scroll``

![This is an image](/src/components/img/portfolio_02.JPG)
![This is an image](/src/components/img/portfolio_02-side.JPG)
![This is an image](/src/components/img/portfolio_02-desktop.JPG)

In this component there are 4 elements 
1. navbar.js component to set up the links 
. navbar for large screen with ``react-scroll`` dependencies 
2. SmallScreensNavbar.js  to manage side bar list + with react-scroll dependencies 
4. useWindowWidthAndHeight - custom Hooks which manages the changing window size

These functions are called in the header.js component and included a repeated background grid texture as appears in the design Museums website :) 


## Site structure 
Create six components: 

1. Components
    - Navbar.jsx  +  Navbar.css
    - Home.jsx  +  Home.css
    - About.jsx  +  About.css
    - Projects.jsx  +  Projects.css 
    - Skills.jsx  +  Skills.css
    - Contact.jsx  +  Contacts.css

1. img  
## Styling
- App.css with high level styles to passed to each .css file - I may update this with ``Styled Components css`` inside each component https://styled-components.com/docs/basics

https://materialui.co/unicode-characters/ 

## Design 

Single page website responsive for;
- Desktop tablet and mobile   
- Responsive burger menu 
- Parallax images 

- Font: ``din-pro, sans-serif`` or  ``Roboto Condensed', monospace``
- Colours: background: `` #f0f0f0 `` accent: yellow:``` #e8e316, opacity 80%```
- For the images curate a set of three from your collection or do a google search for inclusive images such as ``royalty free black girl programming images `` etc.  

### Inspiration 
<!-- https://designmuseum.org/ -->

![This is an image](/src/components/img/designMus.JPG)
![This is an image](/src/components/img/designMu-menu.JPG)




### keywords
react scroll effects parallax animation hook components 

NPM Version Latest NPM Downloads Codecov Rate on Openbase

Test and Lint Storybook Storybook



<!-- https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images -->