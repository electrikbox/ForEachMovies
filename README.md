# ForEach Movies
## Install
### with docker

- First, navigate to the Dockerfile location dir
- Create the docker image for the app
```
docker build -t foreachmovies .
```
### Manually
- install react
```
npm install
```
- create a .env file at the root dir with your api key
```
API_KEY=xxxxxxxxxxxxxxxxxxxx
```

## Dependencies
All dependencies are managed by the Dockerfile, but if you want to work without docker you can install it with this command:
```
npm install sass react-router-dom react-paginate axios
```

## Usage
### With docker
```
docker run -p 3000:3000 foreachmovies
```
### Manually
- In a terminal from 'foreach-movies-app' dir
```
npm start
```
- If you want to see style changes withoutneed to relaunch the app, do this command in another terminal ffrom 'foreach-movies-app' dir
```
sass --watch src/css/main.scss src/css/style.css
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Features
... content to add ...

## Authors
**Olive t'Servrancx** on [Linkedin](https://www.linkedin.com/in/olivier-tservrancx/) and on [Github](https://github.com/electrikbox)

## License
Copyright 2024 Olivier T'Servrancx

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.