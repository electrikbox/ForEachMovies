# 🎬ForEach Movies
<img src="https://i.imgur.com/AlPZuIu.png" alt="fm-logo" width="100%" />

## 👋 INTRO
Foreach Movies is an entrance test for ForEach Academy.
<br>
The project is a website made with [ReactJS](https://fr.legacy.reactjs.org/) that displays lists of movies provide from [The Movie DB API](https://developer.themoviedb.org/reference/intro/getting-started), based on genre, years, etc...
<br>
More information can be found in the rest of this readme.

## 🔗 LINK
Here is the deployed version of the project:  [**foreachmovies.electrikbox.fr**](http://foreachmovies.electrikbox.fr/)


## ⚙️ Install
### Get repo

- Start by cloning this repo:
```
git clone git@github.com:electrikbox/ForEachMovies.git
```
- Change directory
```
cd ForEachMovies/foreach-movies-app/
```
## 🖱️ Usage
From the "foreach-movies-app" directory

- Create a .env file at the root dir with your Movie DB api key
```
API_KEY=xxxxxxxxxxxxxxxxxxxx
```

- Create the docker image for the app
```
docker build -t foreachmovies .
```
- Run the docker container
```
docker run -p 3000:3000 foreachmovies
```

## 📑 Features
Here's the available urls:

### Homepage
```
http://foreachmovies.electrikbox.fr/
```
Page containing:

- the site header
- a main section with a search bar
- a footer (identical for each page)

Once the search is done, you will arrive at the next URL:

### Search Result Page
```
http://foreachmovies.electrikbox.fr/movies/search?query=<film recherché>&page=1
```
Page displaying the search results as a list of cards with:

- the movie title
- the movie poster
- the beginning of the description
- the rating
- a button to go to the details page

If you go directly to `http://foreachmovies.electrikbox.fr/movies/search`, you will see a message asking to perform a search (with the search bar in the header).


### Movie Detail Page
```
http://foreachmovies.electrikbox.fr/movies/<movie_id>
```
Page containing more information about the movie:

- English title
- original title
- production countries
- rating
- full description
- movie links
- list of movie genres
- back button

By clicking on a genre, you will be redirected to the next URL:

### Movies by Genre Page
```
http://foreachmovies.electrikbox.fr/moviesgenre
```
Page containing a dropdown menu with the list of genres provided by the API, once the genre is chosen, the list of movies with that genre appears.

### Movies Page
```
http://foreachmovies.electrikbox.fr/movies
```
Page containing 3 dropdown filters:

- genre
- year
- order

Upon arriving on the page, a list of movies appears with filters already applied (order by popularity and year 2024).
<br>
the page reloads the results when the filter changes.

## 🧑‍💻 Authors
**Olive t'Servrancx** on [Linkedin](https://www.linkedin.com/in/olivier-tservrancx/) and on [Github](https://github.com/electrikbox)

## 🪪 License
Copyright 2024 Olivier T'Servrancx

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.