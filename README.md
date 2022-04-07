# README

## Installation

Install the rails dependencies:

`bundle install`

Install the javascript dependencies:

`npm ci`

Have a locally running postgres database:

`docker compose up -d`

Create and seed the database (it takes some time):

`bin/rails db:create db:migrate db:seed`

Copy `example.env` to `.env` and fill in the database
connection info.  

Run the dev server

`./bin/dev`

(Tested on linux.)

## Requirements

### User stories

- [x] As a user I can able to search for an ingredient.
  - [x] create & config the initial app
  - [x] add an initial database structure
  - [x] seed the db from the json
  - [x] add a model for the ingredient search
  - [x] add the controller for the ingredient search
  - [x] add an SPA to the app (js, build pipeline)
  - [x] add a react app for search
- [x] As a user I can add multiple ingredients to my search.
- [x] As a user I can receive a list of suitable recipes.
- [x] The recipes are sorted based on a relevance. The relevance
      is higher, if the given ingredients present more likely in
      the recipe ingredient list. (Free text search based).

## Worklog

- Initialize a new rails application, connects postgres, set up dev env, 1.5 h
- Trying to figure out how to parse the ingredients of the receipes. It is really complicated and not future proof, so I changed to a full text search concept, which has a pretty good support in Postgres. Create a seeder. 4 h
- Implementing the search SQL and the free text search in ingredients,
  add a React SPA, 4h
- Create a little bit nicer frontend. 0.5 h

## Improvement Ideas

- nicer UI implementation
- rate limiter protection
- add the recipe's full ingredient list to the search result
- add a link to the site, where the instructions can be found
- prod Puma configuration + deploying to Heroku