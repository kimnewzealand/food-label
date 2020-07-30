
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

## File Structure

The boilerplate provided courtesy of [EDA (Enspiral Dev Academy)](https://devacademy.co.nz/), provides a generic file structure:

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


## References

- [Building a Simple CRUD app with Node, Express, and MongoDB](https://zellwk.com/blog/crud-express-mongodb/)
- [Interactive Data Visualization using D3.js, DC.js, Nodejs and MongoDB](https://analyticsindiamag.com/interactive-data-visualization-using-d3-js-dc-js-nodejs-and-mongodb/)