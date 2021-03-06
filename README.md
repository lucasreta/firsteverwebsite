# First Ever Website Refactor Extraordinaire

It's been 30 years, let's update the first website ever to reflect the correct 
way of doing things, now that we know better.

_A joke born out of [this reddit thread.](https://www.reddit.com/r/webdev/comments/lyg5cx/behold_the_first_ever_web_page/gpsuvb8?utm_source=share&utm_medium=web2x&context=3)_

----

## Development Process

We start by creating our app with `create-react-app`:

```
npx create-react-app firsteverwebsite
```

This leaves us with a perfectly fine, in-no-way-overly-bloated boilerplate we 
can use to start coding our application. It just downloads a modest 179,1 MB. 
Makes me doubt if that'll even be enough to store all that we need: I don't like 
to start development until my node_modules folder weighs _at least_ 2 gigs.

We'll probably use react-router-dom, lodash and axios later on, so let's install 
them now to avoid later hassle:

```
npm i -S react-router-dom axios lodash
```

Knowing that I have those tools installed, I feel confident enough to start 
development.

First off, let's run the eject script so I can remove it from the Available 
Scripts portion of this file:

```
npm run eject
```

The first step I like to take is creating a utils folder, as you always need a 
generic utils folder with many different scripts that don't fit into any other, 
more descriptive folder. Inside of it I like to create the `utils.js` script. In 
this project I will call it `multipleUsefulTools.js`, as I think that says a bit 
more than just naming it `utils.js`. We don't need to add anything to it yet, 
we'll come back to it later.

Let's go ahead and create the `views`, `components` and `data` directories as 
well.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
