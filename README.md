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

Start by cloning this repo:
```
git clone git@github.com:electrikbox/ForEachMovies.git
```
Change directory
```
cd foreach-movies-app
```
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

- install dependencies
```
npm install sass react-router-dom react-paginate axios
```

## 🖱️ Usage
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

## 📑 Features
Here's the available urls:

### Homepage
```
http://foreachmovies.electrikbox.fr/
```
Page contenant:
- le header du site
- une section principale avec une barre de recherche
- un footer (identique pour chaque page)

Une fois la recharche faite vous arriverez sur la prochain url:

### Page de résultat de la recherche
```
http://foreachmovies.electrikbox.fr/movies/search?query=<film recherché>&page=1
```
Page qui affiche les résultats de la recherche sous forme de liste de cards avec:
- le titre du film
- l'affiche du film
- le début de la description
- la note
- un boutton pour aller sur la page de details

si l'utilisateur va directement sur `http://foreachmovies.electrikbox.fr/movies/search` il aura un message lui demandant de faire une recherche (avec la barre de recherche dans le header)

### Page de detail d'un film
```
http://foreachmovies.electrikbox.fr/movies/<movie_id>
```
Page contenant plus d'infos sur le film:
- titre anglais
- titre original
- pays de production
- note
- description complète
- liens du film
- liste de genre du film
- bouton de retour

En cliquant sur un genre, l'utilisateur sera redirigé vers la prochain url:

### Page films par genre
```
http://foreachmovies.electrikbox.fr/moviesgenre
```
Page contenant un menu déroulant avec la liste des genres fournis par l'API, une fois le genre choisit

### Page films
```
http://foreachmovies.electrikbox.fr/movies
```
Page contenant 3 filtres en menu déroulant:
- genre
- année
- ordre

A l'arrivé sur la page une list de films apparait avec des filtres déjà appliqué (ordre par popularité et année 2024).
<br>
la page recharge les résultat au changement de filtre.

### Other features

Si l'utilisateur va sur une page du site qui n'eiste pas il sera redirigé vers une page 404.

## 🧑‍💻 Authors
**Olive t'Servrancx** on [Linkedin](https://www.linkedin.com/in/olivier-tservrancx/) and on [Github](https://github.com/electrikbox)

## 🪪 License
Copyright 2024 Olivier T'Servrancx

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.