[![Build Status](https://travis-ci.org/josephst/cocktail-list.svg?branch=master)](https://travis-ci.org/josephst/cocktail-list)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Cocktail App

## Introduction

An app to manage a list of cocktail recipes, by Joseph Stahl

## Organization of `src`

- `components`: Various React components that are used in the app
- `controllers`: Classes used for making network requests to fetch drinks (or for avoiding network requests, when testing)
- `fixtures`: Helper methods for tests to do things like generate drinks
- `models`: Currently, just a DrinkModel. It holds information about the drink that the user has entered or has come over the network; in addition, the classes contain methods used for manipulating their state in the database.
- `routes`: Routes used for React Router. Mostly just organizes the display of items in the `components` folder.
- `stores`: Stores used by MobX for holding information about the drink database. 
  - `drinkStore.ts`: Drink Store, holds information about all drinks that are available for display in the app. Enhanced with MobX to allow for things like loading drinks and getting favorite drinks.