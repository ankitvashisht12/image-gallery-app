# Image Gallery App  

Image Gallery is react web-app that lets user search photos by using keywords. This app uses Unsplash API to fetch photos.

Here are some keypoints of this app: 
1. Uses Live (real time) Search
2. Debounced API calls using `Axios.CancelToken`
3. Infinite scrolling using IntersectionObserver API
4. Clean UI

> NOTE: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Screenshots

![Homepage](https://github.com/ankitvashisht12/image-gallery-app/blob/main/images/a-1.png)

![Modal View](https://github.com/ankitvashisht12/image-gallery-app/blob/main/images/a-2.png)

## Project Setup

To run this project locally, 

1. `git clone https://github.com/ankitvashisht12/image-gallery-app.git`
2. run `npm install` inside root directory
3. hit `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

> NOTE: Make sure to create `.env` file with your `UNSPLASH_API_KEY` inside it. Check out [.env-example](https://github.com/ankitvashisht12/image-gallery-app/blob/main/.env-example).

## Project Structure

```
── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.js
    ├── components
    │   ├── DetailView
    │   │   ├── DetailView.js
    │   │   └── DetailView.module.css
    │   ├── Error
    │   │   └── Error.js
    │   ├── Header
    │   │   ├── Header.js
    │   │   └── Header.module.css
    │   ├── Loading
    │   │   └── Loading.js
    │   ├── Photo
    │   │   ├── Photo.js
    │   │   └── Photo.module.css
    │   └── Photos
    │       └── Photos.js
    ├── context
    │   └── ModalContext
    │       └── ModalContext.js
    ├── customHooks
    │   └── useSearchImage
    │       └── useSearchImage.js
    ├── index.css
    ├── index.js
    └── reportWebVitals.js

```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
