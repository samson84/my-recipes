# README

## Requirements

### User stories

- [ ] As a user I can able to search for an ingredient.
  - [x] create & config the initial app
  - [x] add an initial database structure
  - [x] seed the db from the json
  - [x] add a model for the ingredient search
  - [ ] add the controller for the ingredient search
  - [ ] add an SPA to the app (js, build pipeline)
  - [ ] add a react app for search
- [ ] As a user I can add multiple ingredients to my search.
- [ ] As a user I can receive a list of suitable recipes.
- [ ] The recipes are sorted based on the number of missing
  ingredients.

## Worklog

- Initialize a new rails application, connects postgres, set up dev env, 1.5 h
- Trying to figure out how to parse the ingredients of the receipes. It is really complicated and not future proof, so I changed to a full text search concept, which has a pretty good support in Postgres. Create a seeder. 4h
- 

