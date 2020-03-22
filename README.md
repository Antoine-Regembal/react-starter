# react-starter
A simple template to quickly setup React projects including preconfigured react-router-dom and a react-grid-system package.

## Default setup
By default, the application contains 1 component called `src/Home/Home.js`, which is displayed.

## How does it works ?
The `App.router.js` file contains the routing system. To create new routes, simply import your components to this file
and add a route into the `switch` like this :  

`<Route path="/aNewPath" exact render={props => <YourComponent {...props} />} />`

You can now access it through `localhost:3000/{newPath}` 
