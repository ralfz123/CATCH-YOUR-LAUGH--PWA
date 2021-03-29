##### Progressive Web Apps @cmda-minor-web 2020 - 2021

![Badge stating project is licensed under MIT license](https://img.shields.io/github/license/ralfz123/progressive-web-apps-2021) ![Badge stating amount of issues open](https://img.shields.io/github/issues/ralfz123/progressive-web-apps-2021) [![](https://img.shields.io/badge/site--status-up-success)](https://ralfz123.github.io/progressive-web-apps-2021) [![Badges via shields.io](https://img.shields.io/badge/badges%20via-shields.io-brightgreen)](shields.io)

# CATCH YOUR LAUGH - Progressive Web App 

_Progressive Web Apps, a course of the minor Web Design & Development. It is a minor of the third year from the study [CMD](https://www.cmd-amsterdam.nl/)._

<img src="https://raw.githubusercontent.com/ralfz123/CATCH-YOUR-LAUGH--PWA/master/src/icons/icon-512.png" width=72 /> [Link to live version :rocket:](https://catch-your-laugh.herokuapp.com/)
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

### Plan van Action
1. Copy the WAFS app in this repo :white_check_mark:
2. Delete the unnecessary features :white_check_mark:
3. Install npm, Node.js and Express :white_check_mark:
4. Refactor the code to a server side version (with Nodejs & Express) :white_check_mark:
5. Check if the application works :white_check_mark:

## :heart_eyes: Concept
This application is a _rebuild_ from the [**CAT**CH YOUR LAUGH-application](https://github.com/ralfz123/CATCH-YOUR-LAUGH). Here I focus on the client- and serverside rendering and am I able to create a **P**rogressive **W**eb **A**pp.

<img src="https://raw.githubusercontent.com/ralfz123/CATCH-YOUR-LAUGH/master/assets/README/app-screenshot-2.png" width=400px />

#### Features
- By clicking on the 'ANOTHER COMBO' button you can see a different combination of a cat image and a joke
- Like your favourite combination of a cat image and a joke
- Create a favourites list with your favourite combinations of a cat image and a joke

To get more information about the app, for example it's APIs, check it [here](https://github.com/ralfz123/CATCH-YOUR-LAUGH/blob/master/README.md#heart_eyes-concept).

### [Live version here :red_circle:](https://catch-your-laugh.herokuapp.com/)

## :nerd_face: Technical summary
This is a Progressive Web App (PWA). A number of characteristics are:
- It has an app-like interface, through the [`manifest.json`](https://github.com/ralfz123/CATCH-YOUR-LAUGH--PWA/blob/master/src/assets/manifest.json). In the browser the app is 'installable'. Which means you can add the app to your homescreen and when you launch the app, you have an app-like interface and the default browser interface is disappeared.
- Offline work mode - caching manager [`service-worker.js`](https://github.com/ralfz123/CATCH-YOUR-LAUGH--PWA/blob/master/src/assets/service-worker.js)

This Progressive Web App is built, using:
- [npm](https://www.npmjs.com/)
- [Node.js server](https://nodejs.org/)
- [Express router](https://expressjs.com/)
- [EJS Templating engine](https://ejs.co/)
- [Gulp tooling](https://gulpjs.com/)
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

## :hammer_and_pick: Build
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
   // Get data through fetch and put in a variable called dataAll
  const dataAll = await getData();

  // Declare data variables for better use in .ejs files
  const catData = dataAll.filteredDataCat;
  const jokeData = dataAll.filteredDataJokes;

  // Render data
  res.render('index.ejs', { catData, jokeData });
});
```

In the `.ejs` file
```html
<img src="<%= catData.url %>" alt="">
<label id="joke" for="joke"><%= jokeData.setup %></label>
<label id="punchline" for="punchline"><%= jokeData.punchline %></label>
```

### Building
For the building I used Gulp. It was for me the first time I used a bundler/tooling. At the beginning I struggled a lot with building/minifying my code, because I didn't get it. But now I understand what tooling is. Tooling is a feature for the developer to smart and fast build your application. I used the order from: 1) build files 2) start nodemon server. For deploying I used npm run build and then it empties the folders in `/public` and then the files were build (minified). Here are my npm scripts in the [package.json](https://github.com/ralfz123/CATCH-YOUR-LAUGH--PWA/blob/master/package.json).

```
"start": "node app.js",
"dev": "build && nodemon start",
"build": "npm-run-all build:*",
"prebuild:css": "rimraf \"public/css\"",
"build:css": "npm run prebuild:css && node buildscripts/build-css.js",
"prebuild:js": "rimraf \"public/js\"",
"build:js": "npm run prebuild:js && node buildscripts/build-js.js",
"prebuild:assets": "rimraf \"public/assets\"",
"build:assets": "npm run prebuild:assets && node buildscripts/build-assets.js",
"prebuild:icons": "rimraf \"public/icons\"",
"build:icons": "npm run prebuild:icons && node buildscripts/build-icons.js",
"deploy": "git push && git push heroku master"
```

#### Build CSS
```js
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

return gulp
  .src('./static/styles/main.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('./public/css'));

```

#### Build JS
```js
const gulp = require('gulp');
const concat = require('gulp-concat');

return gulp
  .src('./static/scripts/*.js')
  .pipe(concat('bundle.min.js'))
  .pipe(gulp.dest('./public/js'));

```

#### Build assets
```js
const gulp = require('gulp');

return gulp
    .src('./static/assets/*')
    .pipe(gulp.dest('./public/assets'));

```

#### Build icons
```js
const gulp = require('gulp');

return gulp
    .src('./static/icons/*')
    .pipe(gulp.dest('./public/icons/'));

```

### Deploying
To deploy my application I used Heroku for the first time. It's easy to use, but my deployment had some issues with don't `GET` the `path` and the `favicon`. Now that issue is fixed to replace the `PORT` in my `app.js` with `process.env.PORT || 5000`.

```
1. heroku create // Create heroku CLI
2. git add . && git commit -m 'Update app' // Add your last changes and commit
3. git push heroku master // Push to heroku master branch
4. catch-your-laugh.herokuapp.com // Build is done and deployed
```

### Performance
I wanted to check the performance before and after a couple of changes.

The performance after applying of the Gulp tooling is:
<img src="https://raw.githubusercontent.com/ralfz123/CATCH-YOUR-LAUGH--PWA/master/readme/perform-best-prac-26-3.png" width=400px />

<img src="https://raw.githubusercontent.com/ralfz123/CATCH-YOUR-LAUGH--PWA/master/readme/performance-26-3.png" width=400px />

Before & after minifying
Screenshots!
Though building/minifying it gets .5 seconds faster
- It works I think 5 milliseconds faster with the minified code :)

<img src="https://raw.githubusercontent.com/ralfz123/CATCH-YOUR-LAUGH--PWA/master/readme/seo-optimisations.png" width=400px />
Added robots.txt and sitemap.xml, because of SEO. Although it was 100%, it can also be improved ;) The 2 files add content and intelligence to the application, so a search engine like Google can find better your website.

PWA statics... Because the manifest don't loaded correctly, it isn't installable. I have to take a look at this. because the service worker don't work at the moment, the manifest cannot be read.
<img src="https://raw.githubusercontent.com/ralfz123/CATCH-YOUR-LAUGH--PWA/master/readme/pwa-26-3.png" width=400px />


### !
Some stats are things I cannot fix, because i don't have the rights to change them. Like this issue below, it lays on the server.
<img src="https://raw.githubusercontent.com/ralfz123/CATCH-YOUR-LAUGH--PWA/master/readme/server-issue.png" width=400px />


## Challenges / Inventions:
Learned:  
- Module.exports in Node.js

### Job story
#### Service-worker 
At the moment I want to add a new favourite, it is added to a global array. But at the moment when the list where the page lives is `/favourites`. When the app starts (and during the app), this page **must not** be added to the cache. Because when you hit the like button to create a new fav combo and you want to see the fav list, you click on MY FAVOURITES and go to `/favourites`. The service worker takes then this page from the cache and you see an empty fav list. Therefore you need to whitelist `/favourites` so this page won't be cached, but retrieved from the server. But on the other side I want to see my fav list when I am offline.

All pages will be cached, excluded the /favourites. All pages will be served from the server when online. While the user is offline, then the pages will be shown whose are cached when the user was online. The pages whose are not cached and when the user wants to enter them, he receives an offline page.

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
- [x] Deployed app:rocket:
- [x] Fetch on hit button 'Another Combo' --> but page reloads also and url changes...
- [x] Delete fav item
- [x] Delete all favs item


#### Code:
- [x] Render data home
- [ ] Not fetch when coming back at home
- [x] Pass data via views 
- [x] Server side fetch with npm package 
- [x] responsive css added
- [x] gulp (tooling / static site generator)
    - [x] minify
    - [x] Compiler/builder
- [x] Page renders data
- [x] Add fav and fav list renders fav items
- [x] Detailpage renders data
- [x] Core feature works :white_check_mark:
- [ ] dotenv for api
- [ ] Serviceworker works not perfect; CSS doesn't load.
    - [ ] Cache don't save `/favourites`, because new items are being added through user
    - [ ] Serve offline pages for features that are not cached
- [x] Put router in modules
- [x] Put render in modules
- [ ] Dark theme client side JS


#### Readme:
- [x] Build command in Install proces

#### Backlog
- [ ] Choice via button to filter on joke type (programming/animals/etc..) --> fetch different APIs
- [ ] Put favouritesArray in a db like MongoDB (with session)


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
