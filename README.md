# MCOM Technical Test

Please note this is the progress I made in two hours, there are several areas left for further improvements.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions to run the application

First of all, you have to check the value of `useFakeDatabase` variable in src/config/config.js file. If false, api urls will point to Coingecko public api. Else api urls will point to a local fake server.

In the first case, Coingecko api is used to fetch data. This is the free version, you can exceed the number of request pretty quickly. If you want to try, hit `npm install` and `npm start`.

Or you can set the previously mentioned variable's value to false and the app will use the fake server which returns the content of `db.json` located inside the database directory. After this: `npm install`, `npm run server:start` and in a separate terminal `npm start`.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Areas to improve

Adding more styles to improve the look of the application.

Adding a loading screen while we are waiting for the API response.

Covering the logic with unit test.