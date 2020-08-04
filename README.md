
# What the Label

## Background

Food labels can be confusing and hard to read, with the small numbers and text in the Nutrition Label Information table. Additionally ingredients lists can be long, and also written in small text. This information can be difficult to process on the go and without a reference point.

## Goal

The purpose of the website is to visualise relative food labelling data from food packaging to make this process of interpretation easier. It is not however intended to provide nutritional advice.

## Data

Nutrition data is available from the [Ministry of Health](https://www.health.govt.nz/nz-health-statistics/health-statistics-and-data-sets/nutrition-data-and-stats).

Plant & Food Research and the Ministry of Health jointly own the [New Zealand Food Composition Database](https://www.foodcomposition.co.nz/).  This database source provides a comprehensive collection of nutrition information panel data as seen on food managing.

The FOODfiles™ Data is available subject to the FOODfiles™ Data Licensing [terms](https://www.foodcomposition.co.nz/terms/).

## Setup

First clone this repo and install Node.js using your terminal:

```sh
 npm install
```
The other dependencies are already available in the repo.

To run and view in `http://localhost:3000/`, use the following command in your terminal:

```sh
npm run dev
```

The application is deployed to Heroku [`https://food-label.herokuapp.com/`](https://food-label.herokuapp.com/)

## File Structure

The boilerplate provided courtesy of [EDA (Enspiral Dev Academy)](https://devacademy.co.nz/), provides a starter generic file structure:

```sh
.
├── client
│   ├── actions
│   │   └── index.js
│   ├── components
│   │   ├── App.jsx
│   ├── reducers
│   │   ├── index.js
│   └── index.js
├── public
│   ├── index.html
│   └── main.css
├── server
│   ├── index.js
│   └── server.js
├── .gitignore
├── package.json
├── README.md
└── webpack.config.js
```
##  The MERN Stack

A popular stacks is called the MERN stack which consists of:

- MongoDb is a document-based database
- Express js is a back end web and server framework for Node.js 
- React js is a JavaScript front-end library for building user interfaces
- Node js is a JavaScript runtime built on Chrome’s V8 JavaScript engine

## References

- [Building a Simple CRUD app with Node, Express, and MongoDB](https://zellwk.com/blog/crud-express-mongodb/)
- [Loading environment variables in JS apps](https://dev.to/deammer/loading-environment-variables-in-js-apps-1p7p)
- [The MERN Stack Tutorial](https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/)
- [Deploy your express + node.js + MongoDB app to Heroku](https://medium.com/@junwu2012/deploy-your-express-node-js-mongodb-app-to-heroku-5e5d21c5a748)