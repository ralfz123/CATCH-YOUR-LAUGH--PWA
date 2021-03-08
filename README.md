##### Progressive Web Apps @cmda-minor-web 2020 - 2021

![Badge stating project is licensed under MIT license](https://img.shields.io/github/license/ralfz123/progressive-web-apps-2021) ![Badge stating amount of issues open](https://img.shields.io/github/issues/ralfz123/progressive-web-apps-2021) [![](https://img.shields.io/badge/site--status-up-success)](https://ralfz123.github.io/progressive-web-apps-2021) [![Badges via shields.io](https://img.shields.io/badge/badges%20via-shields.io-brightgreen)](shields.io)

# [title project]
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

[Link to live version :rocket:](https://ralfz123.github.io/progressive-web-apps-2021)
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

### Plan van Aanpak
1. Copy the WAFS app in this repo :white_check_mark:
2. Delete the unnecessary features :white_check_mark:
3. Install npm, Node.js and Express :white_check_mark:
4. Refactor the code to a server side version (with Nodejs & Express) 
5. Check if the application works

## :heart_eyes: Concept
This application is a _rebuild_ from the [**CAT**CH YOUR LAUGH-application](https://github.com/ralfz123/CATCH-YOUR-LAUGH). Here I focus on the client- and serverside rendering and am I able to create a **P**rogressive **W**eb **A**pp.

**CAT**CH YOUR LAUGH is an application where you can amuse pictures of cats in combination with jokes :cat: :laughing: . You can use this app when the atmosphere is no longer good, or there is no discussion material for a while, or you just want to laugh hard. Then this is the solution! This combination will lead to endless laughter from the user! 

You may *like* the combination of the cat and the joke. It will be saved on the 'My Favourites' page and there you will see all your favourite combinations. You can also click on one of your favourites and you will be taken to the detail page where you will see your favourite in large format.

### [Live version here :red_circle:](https://ralfz123.github.io/progressive-web-apps-2021)


#### Features
- By clicking on the 'ANOTHER COMBO' button you can see a different combination of a cat image and a joke
- Like your favourite combination of a cat image and a joke
- Create a favourites list with your favourite combinations of a cat image and a joke

## :1234: Data  
### APIs are:
1. Cat images - https://thecatapi.com/
2. Jokes - https://github.com/15Dkatz/official_joke_api

The data variables I used, are:
#### 1. Cat images
- `id`
- `url`  

#### 2. Jokes
- `id`
- `setup` 
- `punchline`

### Dataset structure
#### 1. Cat images

```js
[
    {
    breeds: [ ],
    id: "eg4",
    url: "https://cdn2.thecatapi.com/images/eg4.jpg",
    width: 300,
    height: 225
    }
]
```

#### 2. Jokes
```js
{
    id: 327,
    type: "general",
    setup: "Why did Sweden start painting barcodes on the sides of their battleships?",
    punchline: "So they could Scandinavian."
}
```


## :nerd_face: Technical summary
This app is built, using:
- [npm](https://www.npmjs.com/)
- [Node.js server](https://nodejs.org/)
- [Express router](https://expressjs.com/)
- [EJS Templating engine](https://ejs.co/)

## Tooling
- rollup.js

# Commands building
## Challenges / Inventions:

## To-Do's :pencil:
<details>
<summary>Expand</summary>

#### App:
- [x] UI is like the non-render-server-side app (WAFS)
- [ ] static favicon rendered

#### Code:
- [ ] Pass data via views 
- [ ] Server side fetch with npm package (request?)
- [ ] responsive css added
#### Readme:

</details>


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
npm start
```

4. Go to [localhost](http://localhost:5000/) in the browser and voilà :sparkles:
```
http://localhost:5000/
```

## :file_folder: Sources
Credits to [Joost Faber](https://github.com/joostf) && [Koop](https://github.com/KoopReynders) && [Declan](https://github.com/decrek) for giving interesting lectures about PWA's and JavaScript and how to deal with it.

### Code sources
- Stackoverflow (n.d.). Searching for answers on dev questions - Stackoverflow. Retrieved 8 March 2021 from https://www.stackoverflow.com

- npm (n.d.). Package manager with many packages - npm. Retrieved 8 March 2021 from https://www.npmjs.com

- Node.js (n.d.). A Runtime engine server for Chrome V8 - Node.js. Retrieved 8 March 2021 from https://nodejs.org

- Express (n.d.). Framework for Node.js - Express. Retrieved 8 March 2021 from https://expressjs.com/

## :cop: License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
This project from [Ralf](https://github.com/ralfz123) has a [MIT © License](https://github.com/ralfz123/progressive-web-apps-2021/blob/main/LICENSE)
