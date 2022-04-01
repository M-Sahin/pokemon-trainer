# Sign Language Translator

![GitHub repo size](https://img.shields.io/github/repo-size/M-sahin/pokemon-trainer)


[Live Demo](https://cherry-crumble-56108.herokuapp.com/login) (Hosted on _Heroku_)

[REST API](https://mm-assignment-api.herokuapp.com/trainer) (Hosted on _Heroku_)

[Assignment PDF](https://lms.noroff.no/pluginfile.php/184862/mod_assign/introattachment/0/Angular_Pokemon%20Trainer.pdf?forcedownload=1)

This is a simple app in which the user can catch Pokemon! The app is made with Angular.

## Table of Contents

- [General Information](#general-information)

- [Technologies and Resources](#technologies-and-resources)

- [Installation and Usage](#installation-and-usage)

- [Contributors](#contributors)

## General Information

**Login view**

The user starts in the log in view and has to enter his username. The username is stored in sessionstorage and the API.

**Catalogue view**

In this screen, the user is shown a catalogue with all the pokemons from the [Pokemon API](https://pokeapi.co/). Here, the user can 'catch' these pokemons.

**Trainer view**

In the trainer view, the user is shown the pokemons that are catched. These pokemons are stored in sessionstorage and the API. Here, the user can decide to release the pokemons back in to the wild. 

## Technologies and Resources

The project is implemented using the following technologies and resources:

- Angular
- Angular Router
- Express
- Bootstrap
- Material Icons

## Installation and Usage

**NOTE:** You will need _node_ and _npm_ installed on your machine

1. Clone the project repository:

```sh
git clone https://github.com/M-sahin/pokemon-trainer.git
```

2. Install the dependencies while inside the project directory:

```sh
npm install
```

3. Start the server:

```sh
ng serve
```

After starting the server, your browser should automatically lauch the application but you can also access it manually by navigating to `localhost:4200` on your browser.

## Contributors

[Murat Sahin (@M-sahin)](https://github.com/m-sahin)

[Mehmet Balci (@mehmet70)](https://github.com/mehmet70)
