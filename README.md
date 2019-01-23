# Mag ik ook nee zeggen?

- [Build Setup](#build-setup)
- [Code](#code)
- [Can still be added](#can-still-be-added)

> My flawless Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Code

The project is built in [nuxt.js](https://nuxtjs.org/). The CSS is written in [SCSS](https://sass-lang.com/).

- In the __/components__ folder you will find all the components.
- __/Static__ is an important one. This is where you find the JSON files.
Static JSON is being imported like this.
 ```js
 import json from 'static/questions.json'
 ```
The questions.json file is where al the scenario's with the answers are. Every scenario has an ID.
In the insights.json file all the _did you know's_ are written. They also all have a seperate ID, which links them to the scenarios in questions.json. This is done as so:
```js
if (this.json.insights.find(x => x.id === id))
```
- In the __/assets__ folder you will find the images and and static scss files.  
The names of the images are the ID's of the scenarios they belong to.
```js
return require(`~/assets/images/${this.currentQuestion.id}.gif`
  ```

## Can still be added

- __A page where you can see all the _did you know's_.__  
The code for the page is already there, so all you need to do for this is add a button that links to that page. The reason this is not in the app is because right now there aren't enough __different__ insights. If a user would go to the page with all the insights, you would see the same as you would see on the overview page. This page would become useful when more insights are added.
- __The upportunity to share the app or the insight.__  
The popup is there, but doens't do anything yet.  
- __Real-time results.__  
We didn't have enough time to actually connect a database to the website. This can still be done. This would give the upportunity for the user to see what percentage would have done the same thing as him/her, and what percentage would have done something else.
