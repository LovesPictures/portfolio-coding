# Getting Started with the portfolio site 

## Evaluation 
Conceived, designed, and coded from scratch, this project was very much both an exercise in research, problem solving nad implementation as well as trusting the research I had curated, especially in relation to Airtable, which is a light touch backend database.  Coding a project without an initial codebase was a very different proposition to projects to date.  In the initial stages of the project I considered what I wanted to learn, and incorporated aspects, such as;

- Image handing 
- Data handling 
- component management through systems thinking
- improving my tech related research skills 
- defining scope in each component

Realising a conceptualised idea in the process of pushing the boundaries of my current knowledge is a very satisfying overall process, I am pleased with what I achieved here.  


## Process

Create a new react app 
``npm create-react-app`` add a name for the app. Open the file and check the basic react application using ``npm start``.   

In each component use the react shortcut ``rafce`` to install the react boilerplate  ``React Arrow Function Export``

## Dependencies 

### Parallax
1. Install react-parallax ``npm i react-parallax``. Docs: https://www.npmjs.com/package/react-parallax 

2. Install react-scroll-parallax: React hooks and components to create parallax scroll effects for banners, images or any other DOM elements ``npm i react-parallax-scroll``. Docs: https://www.npmjs.com/package/react-scroll-parallax

3. Install react-animate-on-scroll: React component to animate elements on scroll with animate.css ``npm install react-animate-on-scroll --save``. In addition, to include ``animations`` in the project see the three methods in the Docs: https://www.npmjs.com/package/react-animate-on-scroll.  e.g. link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" in the HTML head tag.

4. Install react-scroll ``npm install react-scroll``. Docs: https://www.npmjs.com/package/react-scroll

Open the package .json and ensure they are installed

    "create-chakra-icons": "1.1.0", - ? 
    "react": "17.0.2", - is this important? - currently "react": "^18.1.0",
    "react-animate-on-scroll": "2.1.5",  
    "react-parallax": "3.3.0",           
    "react-scroll": "1.8.4",               
    "react-scroll-parallax": "2.4.0" 

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
5. Navbar background texture uses ``image-rendering`` an image scaling algorithm which applies to an element itself, images, and to its children. https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering 

```
header {
  font: inherit;
  position: sticky;
  top: 0;
  height: 70px;
  background: var(--background-2);
  image-rendering: pixelated;  
  /* Anti-aliasing use even numbers  */
  background-size: 4px 4px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: var(--box-shadow-1);
  z-index: 10;
}
```


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


### Project page consisting of a 9 grid responsive project cards featuring:
- project title  
- an image 
- link to the code github repo
- link to netlify 

### approach
Notes
a card container 
a heading
an image 
project description 
a href with logo +  alt text using icons doc: https://icons8.com/icons/set/github 

Having decided on what the components of the page are use the `Thinking in React in 5 steps` approach: Docs: https://reactjs.org/docs/thinking-in-react.html
Step 1: Break The UI Into A Component Hierarchy...
Step 2: Build A Static Version in React
Step 3: Identify The Minimal (but complete) Representation Of UI State
Step 4: Identify Where Your State Should Live
Step 5: Add Inverse Data Flow





refactor with rollout  
cross hairs rollout 




1. img  
## Styling
- App.css with high level styles to passed to each .css file - I may update this with `Styled Components css` inside each component https://styled-components.com/docs/basics

https://materialui.co/unicode-characters/ 

## Design 

Single page website responsive for;
- Desktop tablet and mobile   
- Responsive burger menu 
- Parallax images 

- Font: `din-pro, sans-serif` or  `Roboto Condensed', monospace`
- Colours: background: ` #f0f0f0 ` accent: yellow:` #e8e316, opacity 80%`
- For the images curate a set of three from your collection or do a google search for inclusive images such as `royalty free black girl programming images ` etc.  

### Inspiration 
<!-- https://designmuseum.org/ -->

![This is an image](/src/components/img/designMus.JPG)
![This is an image](/src/components/img/designMu-menu.JPG)


<!--  ### keywords
react scroll effects parallax animation hook components 

Test and Lint Storybook Storybook -->



<!-- https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images -->

### card 

1 write the HTML 
### cards #1
```
import img1 from "../img/1.jpg";
import github from "../img/github.svg";
import netlify from "../img/netlify.csv";

  return (
    <div className="Card">
      <h3 className="Card__header">Card header</h3>
      <img className="Card__image" src={img1} alt="#" />
      <ul>
        <a className="Card__icon" href="https://github.com/LovesPictures">
          <img src={github} alt="#" />
        </a>
        <a className="Card__icon" href="https://jr-dogs-app.netlify.app">
          <img src={netlify} width="30" alt="#" />
        </a>
      </ul>
      <p className="Card__description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </div>
    
```
### cards #2
Refactored to card.js to include an image object to handle all the .svg images, this did not work with .jpg or .png.

```

import img1 from "../img/1.jpg"; - this did no work with the image object 
import Icons from "../img/Icons";

import "../Section/Section.css";
import "../Card/Card.css";

export const Card = () => {
  return (
    <div className="Card">
      <h3 className="Card__header">Project Name</h3>
      <img className="Card__image" src={img1} alt="#" />
      {/* container for the icons */}
      <ul className="Card__ul">
        <a className="Card__icon" href="https://github.com/LovesPictures">
          <img src={Icons.iconGithub} alt="#" />
        </a>
        <a className="Card__icon" href="https://jr-dogs-app.netlify.app">

          <img src={Icons.iconNetlify} width="30" alt="#" />
        </a>
      </ul>
      {/* roll over project name for more information */}
      <p className="Card__description">
        <strong>Project Description:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </div>
  );
};
```
### cards #3
next refactor of the cards model. 
Set up an array, with a ordered list object 
render the icons from icons.jsx component

```
export const projectData = [
  {
    projectID: "001",
    img: "https://raw.githubusercontent.com/LovesPictures/baby-names-picker/main/example-screenshots/BN__completed__01.JPG",
    title: "Baby Names",
    description: "Make a React app which shows some baby names and lets you pick your favourites form the json data provided",
     // githubIcon: {Icons.iconGithub},
    linkGithub: "https://github.com/LovesPictures/baby-names-picker",
    // netlifyIcon: {Icons.iconNetlify},
    netlify: "https://jr-baby-names-picker.netlify.app",
  },
  ```
  ### cards #4

  move the project data to an external source (usually used for testing, bring in the `projectData` 
![This is an image jsonBin](/src/components/img/jsonBin.PNG)

  ```
import React, { useEffect, useState } from "react";

import "../Section/Section.css";

export const Projects = () => {
  const getProjectData = async () => {
    // error handing try catch
    try {
      const data = await fetch(
        "https://api.jsonbin.io/b/62adb726449a1f38210ea278"
      );
      const json = await data.json();
      console.log(json);
      return json;
    } catch (err) {
      console.log(err);
    }
  };
  //store the data form the API in the shape of the data e.g. [] or ""
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    console.log("useEffect has been run");
    const fetchData = async () => {
      const data = await getProjectData();
       setProjectData(data)
    };
    fetchData();
  }, []);

  return (
    <div id="Projects">
      <h2 className="Section__header Section__header-parallax img2">
        Projects
      </h2>

      <div className="Section__Container">
        {/* write js {} */}
        {projectData.map((project) => {
          /* prop = value */
          return <Card project={project} />;
        })}
      </div>
    </div>
  );
};
```

The `try` catch clause for error handling 

### Contact form 
### form #1
![This is an image](/src/components/img/contactForm-1.PNG)

  useState: a variable to read the state - and a function to write the state, with an initial value in the shape of the data e.g.[], or "" etc
### form #2
![This is an image](/src/components/img/formSubmission.png)
updated to incorporate web accessibility  https://www.w3.org/WAI/tutorials/forms/ 
## Data handling 

### backend database #1
I was interested in setting up my first a light touch database to handle the potential data received form the contact form.  My research shortlisted ``Airtable`` https://www.airtable.com as the best solution using ``npm i airtable``

I set up a short set of test data to see if I could send and/or receive data for the contact form. A native single table application."

![This is an image](/src/components/img/contactForm-data-1.PNG)

### backend database 2
Frontend form connected to the backend with Axios as helper function 

```
import axios from "axios";

const createNewContactEntry = (
  firstName,
  lastName,
  userTelephone,
  userEmail,
  userTextArea
) => {
  axios.post("/", {
    records: [
      {
        fields: {
          FirstName: firstName,
          LastName: lastName,
          Email: userEmail,
          Phone: userTelephone,
          Message: userTextArea,
        },
      },
    ],
  });
};
```

![This is an image](/src/components/img/formSubmission-backend.png)

validating a telephone number https://www.abstractapi.com/guides/how-to-validate-phone-number-react-js 


