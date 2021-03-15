##### Progressive Web Apps @cmda-minor-web 2020 - 2021

![Badge stating project is licensed under MIT license](https://img.shields.io/github/license/ralfz123/progressive-web-apps-2021) ![Badge stating amount of issues open](https://img.shields.io/github/issues/ralfz123/progressive-web-apps-2021) [![](https://img.shields.io/badge/site--status-up-success)](https://ralfz123.github.io/progressive-web-apps-2021) [![Badges via shields.io](https://img.shields.io/badge/badges%20via-shields.io-brightgreen)](shields.io)

# CATCH YOUR LAUGH - Progressive Web App
_Progressive Web Apps, a course of the minor Web Design & Development. It is a minor of the third year from the study [CMD](https://www.cmd-amsterdam.nl/)._


*** 
# Course info for me [begin]
## Learning goals
- _You understand the difference between client side and server side rendering and you can apply server side rendering_
in your application_
- _You understand how a Service Worker works and you can implement it in your application._
- _You understand how the critical render path works and how you can optimize it for a better runtime and / or perceived performance._

[Rubric with learning goals](https://icthva.sharepoint.com/:x:/r/sites/FDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt/_layouts/15/Doc.aspx?sourcedoc=%7B276F53A7-2531-4006-8AD2-08C9A82D3A11%7D&file=PWA%202021%20Rubric.xlsx&action=edit&mobileredirect=true&wdPreviousSession=92686bea-446f-40e3-9303-33fa3f832b82&wdOrigin=TEAMS-ELECTRON.teams.undefined)

## Program

### Week 1 - Server Side Rendering 📡

Goal: Render web pages server side

[Exercises](https://github.com/cmda-minor-web/progressive-web-apps-2021/blob/master/course/week-1.md)    
[Server Side Rendering - slides Declan Rek](https://github.com/cmda-minor-web/progressive-web-apps-1920/blob/master/course/cmd-2021-server-side-rendering.pdf)  


### Week 2 - Progressive Web App 🚀

Goals: Convert application to a Progressive Web App

[Exercises](https://github.com/cmda-minor-web/progressive-web-apps-2021/blob/master/course/week-2.md)  
[Progressive Web Apps - slides Declan Rek](https://github.com/cmda-minor-web/progressive-web-apps-1920/blob/master/course/cmd-2020-progressive-web-apps.pdf)


### Week 2 - Critical Rendering Path 📉 

Doel: Optimize the Critical Rendering Path   
[Exercises](https://github.com/cmda-minor-web/progressive-web-apps-2021/blob/master/course/week-3.md)  
[Critical Rendering Path - slides Declan Rek](https://github.com/cmda-minor-web/progressive-web-apps-1920/blob/master/course/cmd-2020-critical-rendering-path.pdf)


# Course info for me [end]
***

[Link to live version :rocket:](https://catch-your-laugh.herokuapp.com/)
### Table of Contents
<table style="margin-left: auto; margin-right: auto;">
    <tr>
        <td align="center"><a href="#rocket-purpose-of-project">🚀 Purpose of Project<a></td>
        <td align="center"><a href="#heart_eyes-concept">😍 Concept<a></td>
        <td align="center"><a href="#1234-data">🔢 Data<a></td>
        <td align="center"><a href="#nerd_face-technical-summary">🤓  Technical summary<a></td>
        <td align="center"><a href="#gear-installation">⚙️ Installation<a></td>
        <td align="center"><a href="#file_folder-sources">📁 Sources<a></td>
        <td align="center"><a href="#cop-license">👮 License<a></td>
    </tr> 
</table>

## :rocket: Purpose of Project
In this course I will convert the client side web application previously made Web App From Scratch into a server side rendered application. I also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Ultimately I'm going to implement a series of optimisations to improve the performance of the application. All the basic parts covered in this course are very useful to know when you later choose to make an app using a framework. All these parts are (almost) all automated in a framework and are therefore done for you. So it is helpful to know exactly how those parts work.

- atomic design (wk1)

### Plan van Action
1. Copy the WAFS app in this repo :white_check_mark:
2. Delete the unnecessary features :white_check_mark:
3. Install npm, Node.js and Express :white_check_mark:
4. Refactor the code to a server side version (with Nodejs & Express) :white_check_mark:
5. Check if the application works :white_check_mark:

## :heart_eyes: Concept
This application is a _rebuild_ from the [**CAT**CH YOUR LAUGH-application](https://github.com/ralfz123/CATCH-YOUR-LAUGH). Here I focus on the client- and serverside rendering and am I able to create a **P**rogressive **W**eb **A**pp.

#### Features
- By clicking on the 'ANOTHER COMBO' button you can see a different combination of a cat image and a joke
- Like your favourite combination of a cat image and a joke
- Create a favourites list with your favourite combinations of a cat image and a joke

To get more information about the app, for example it's APIs, check it [here](https://github.com/ralfz123/CATCH-YOUR-LAUGH/blob/master/README.md#heart_eyes-concept).

### [NOT WORKING YET - Live version here :red_circle:](https://catch-your-laugh.herokuapp.com/)

## :nerd_face: Technical summary
This app is built, using:
- [npm](https://www.npmjs.com/)
- [Node.js server](https://nodejs.org/)
- [Express router](https://expressjs.com/)
- [EJS Templating engine](https://ejs.co/)
- [Rollup tooling](https://rollupjs.org/guide/en/#introduction)
- [Heroku deployment](https://www.heroku.com/nodejs)

## :gear: Installation
1. Clone the repository:  
```
git clone https://github.com/ralfz123/progressive-web-apps-2021.git
```

2. Install dependencies   
```
npm install
```

3. To run the app   
```
npm run start
```

4. To run the app in developer mode (with nodemon)
```
npm run dev
```
5. Go to [localhost](http://localhost:5000/) in the browser and voilà :sparkles:
```
http://localhost:5000/
```

## :gear: Build
#### Server 
For running the server i use the Express framework for Node.js. This is a web framework for Node.js which is good for setting up a server.

1. Require Express
```
const express = require("express");
```

After that you init your app
```
const app = express();
```

Config your Express-app
```js
app.use(express.static('static')); // Declare your static folder

// Declare folders in the static folder for easy use
app.use('/styles', express.static(__dirname + 'static/styles'));
app.use('/scripts', express.static(__dirname + 'static/scripts'));
app.use('/icons', express.static(__dirname + 'static/icons'));

// Run the server on a port
app.listen(5000, () => console.log(`App is running on port 5000`));
```

#### Templating engine
For the templating engine I use EJS. I really like EJS, because it is easy to implement and work with.

An example of how I render a page and pass data with rendering

```js
app.get('/', async (req, res) => {
  // Get data
  const dataCat = await getData(urlCats);
  const dataJokes = await getData(urlJokes);

  // Filter data
  const filteredDataCat = filterCatData(dataCat);
  const filteredDataJokes = filterJokeData(dataJokes);

  // Render page with data
  res.render('index.ejs', { filteredDataCat, filteredDataJokes });
});
```

In the `.ejs` file
```html
<img src="<%= filteredDataCat.url %>" alt="">
<label id="joke" for="joke"><%= filteredDataJokes.setup %></label>
<label id="punchline" for="punchline"><%= filteredDataJokes.punchline %></label>
```

### Building
For the building I used Rollup.js. It was for me the first time I used a bundler/tooling. At the moment I struggle with building/minifying my code.

### Deploying
To deploy my application I used Heroku for the first time. It's easy to use, but my deployment isn't finished yet. Something went wrong with the `favicon path` 😕 . 

```
1. heroku create // Create heroku CLI
2. git add . && git commit -m 'Update app' // Add your last changes and commit
3. git push heroku master // Push to heroku master branch
4. catch-your-laugh.herokuapp.com // Build is done and deployed
```

### Serviceworker
first time I work with serviceworker

## Challenges / Inventions:
Learned:  
- Module.exports in Node.js

## To-Do's :pencil:
<details>
<summary>Expand</summary>

#### App:
- [x] UI is like the non-render-server-side app (WAFS)
- [x] static favicon rendered
- [x] Added error state
- [ ] Only fetch when hit another combo or first visit site. Not when clicking from `/favourites` to `/`
Feedback user:
    - [ ] Feedback loader while fetching (combining client to serverside rendering)
    - [x] Feedback like
- [ ] Serverworker ON and I can not add favourites :(
- [ ] Count indexOf object in global array, so the number => id of the object can be shown at detail page
- [x] Deployed :rocket:

#### Code:
- [x] Render data home
- [ ] Not fetch when coming back at home
- [x] Pass data via views 
- [x] Server side fetch with npm package 
- [ ] responsive css added
- [ ] Rollup (toolip / static site generator)
    - [ ] minify
- [x] Page renders data
- [x] Add fav and fav list renders fav items
- [x] Detailpage renders data
- [x] Core feature works :white_check_mark:
- [ ] Put favouritesArray in a db like MongoDB (with session)
- [ ] dotenv for api

#### Readme:
- [ ] Build command in Install proces


</details>

## :file_folder: Sources
Credits to [Joost Faber](https://github.com/joostf) && [Koop](https://github.com/KoopReynders) && [Declan](https://github.com/decrek) for giving interesting lectures about PWA's and JavaScript and how to deal with it.

### Code sources
- Stackoverflow (n.d.). Searching for answers on dev questions - Stackoverflow. Retrieved 8 March 2021 from https://www.stackoverflow.com

- npm (n.d.). Package manager with many packages - npm. Retrieved 8 March 2021 from https://www.npmjs.com

- Node.js (n.d.). A Runtime engine server for Chrome V8 - Node.js. Retrieved 8 March 2021 from https://nodejs.org

- Express (n.d.). Framework for Node.js - Express. Retrieved 8 March 2021 from https://expressjs.com/

- Sitepoint (n.d.) Understanding Modules - Sitepoint. Retrieved 9 March 2021 from https://www.sitepoint.com/understanding-module-exports-exports-node-js/

- Youtube (n.d.) Registering a Service Worker - The Net Ninja. Retrieved 15 March 2021 from https://www.youtube.com/watch?v=6s697AJdlB8

sw - 15 march - https://developers.google.com/web/fundamentals/primers/service-workers

## :cop: License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
This project from [Ralf](https://github.com/ralfz123) has a [MIT © License](https://github.com/ralfz123/progressive-web-apps-2021/blob/main/LICENSE)
