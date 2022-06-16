// Does this go into the cards folder or the project folder

/*
setting up an object to handle the project information 


1 set up image variable /list - import 
2 set up an array [] with a ordered list object {}

translate and transform it into a card component 

data into DOM
*/

import Icons from "../img/Icons"

// const project__img1 = "https://lovespictures.com/1.jpg";
// const project__img2 = "https://lovespictures.com/pe/3.jpg";
// const project__img3 = "https://lovespictures.com/pe/5.jpg";

export const projectData = [
  {
    projectID: "001",
    img: "https://raw.githubusercontent.com/LovesPictures/baby-names-picker/main/example-screenshots/BN__completed__01.JPG",
    title: "Baby Names",
    description: "Make a React app which shows some baby names and lets you pick your favourites form the json data provided",
    linkGithub: "https://github.com/LovesPictures/baby-names-picker",
    linkNetlify: "https://jr-baby-names-picker.netlify.app",
  },

  {
    projectID: "002",
    img: "https://github.com/LovesPictures/WowCakes/blob/master/img/WC__completed-03.jpg?raw=true",
    title: "Wow cakes!",
    description: "Responsive landing page designed for mobile first design approach followed by tablet and desktop, using CSS grid.",
    linkGithub: "https://github.com/LovesPictures/WowCakes",
    linkNetlify: "https://jude-wow-cakes.netlify.app",
  },

  {
    projectID: "003",
    img: "https://github.com/LovesPictures/cyf-hotel-react/blob/master/src/Image/Hotel__completed-03.PNG?raw=true",
    title: "Hotel React App",
    description: " Create a hotel reservation app where visitor can order food",
    linkGithub: "https://github.com/LovesPictures/cyf-hotel-react",
    linkNetlify: "https://cyf-jude-hotel-react.netlify.app/",
  },

  {
    projectID: "004",
    img: "https://user-images.githubusercontent.com/25634451/158079103-0f3c0d79-e8b4-4bf6-a979-cc91adccf438.png",
    title: "TV Listing App",
    description: " Create a TV listing app where visitor can shortlist and filter by episode",
    linkGithub: "https://github.com/LovesPictures/tv-show-dom-project_external_JSON",
    linkNetlify: "https://tv-show-dom-json.netlify.app/",
  },
];



