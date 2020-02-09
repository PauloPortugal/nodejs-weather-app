# A Nodejs Weather App
An event-driven asynchronous Node.js Weather app, to explore Node.js' asynchronous non-blocking single-threaded event-loop.
This is part of Andrew Mead's (mead.io) "The Complete Node.js Developer Course".

## Goal
Return a weather forecast based on user's input location

* Uses [mapbox.com](mapbox.com) for forward geocoding
* Uses [darksky.net](darksky.net) to return the weather forecast for a given town/place.
* Uses `ECMAScript6` Object Property Shorthand and Destructuring

## Setup

 * Create a (free) account with [mapbox.com](mapbox.com) and [darksky.net](darksky.net) and provide the keys/tokens through an environment variable
 * Run `git update-index --assume-unchanged config/tokens.json` to avoid commiting the tokens to a remote repo


## How to execute

Through the command line:

```
DARKSKY_TOKEN="your-darksky-token" MAPBOX_TOKEN="<your-mapbox-token>" node app.js "Lille"
```