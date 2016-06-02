# angular-js-seed — the seed for AngularJS application

This project is based on angular 1.x concept and wrap around as usefull utility to use application as production ready. 

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.



## Getting Started

You can clone repostiory [Angular-Js-Seed](https://github.com/princesoni1989/Angular-Js-Seed) and install dependency.

### Prerequisites
We have number of server and build tools preconfigured in application , to use them you need to preinstall below dependency - 
* [Node](https://nodejs.org/en/download/)
* [Sass](http://sass-lang.com/install) 
* [Grunt](http://gruntjs.com/installing-grunt)
* [Bower](http://bower.io/)  

### Clone angular-js-seed

Clone the angular-seed repository using [git][git]:

```
git https://github.com/princesoni1989/Angular-Js-Seed
cd Angular-Js-Seed
```

If you just want to start a new project without the angular-seed commit history then you can do:


### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files


### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
grunt serve
```

Now browse to the app at `http://localhost:9000`.This will start server in development mode and enable you do fast development. you can make changes and it will deploy automatically.



## Directory Layout

```
app/                    --> all of the source files for the An example client component in `client/app`

    main
    ├── main.js                 - Routes
    ├── main.controller.js      - Controller for our main route
    ├── main.controller.spec.js - Test
    ├── main.html               - View
    └── main.less               - Styles
```

## Testing

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.



### End to end testing

The angular-seed app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Serving the Application Files

```
grunt serve
```

if you want to create build and move to production - 

```
grunt build
cd dist
npm start
```




## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The angular-seed
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.



## Contact

For more information on AngularJS please check out http://angularjs.org/

[git](http://git-scm.com/)<br />
[bower](http://bower.io)<br />
[npm](https://www.npmjs.org/)<br />
[node](http://nodejs.org)<br />
[protractor](https://github.com/angular/protractor)<br />
[jasmine](http://jasmine.github.io)<br />
[karma](http://karma-runner.github.io)<br />
[travis](https://travis-ci.org/)<br />
