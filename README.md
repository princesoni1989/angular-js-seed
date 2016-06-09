# angular-js-seed — ready to start application for Angularjs 

This project is based on angular 1.x concept and wrap around  usefull utility for angular application development. 

The seed contains a sample AngularJS application and is pre-configured to install the Angular
framework and a bunch of development and testing tools for instant web development.



## Getting Started

You can clone repository [angular-js-seed](https://github.com/princesoni1989/angular-js-seed) and install dependency.

### Prerequisites
We have number of server and build tools preconfigured in application, to use them you need to pre-install below dependency  
* [Node](https://nodejs.org/en/download/)
* [Sass](http://sass-lang.com/install) 
* [Grunt](http://gruntjs.com/installing-grunt)
* [Bower](http://bower.io/)  

### Clone angular-js-seed

Clone the angular-seed repository using [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git):

```
git https://github.com/princesoni1989/angular-js-seed
cd angular-js-seed
```


### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

```
bower install

npm install
```

You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `client/bower_components` - contains the angular framework files


### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
grunt serve
```

Now browse to the app at `http://localhost:9000`.This will start server in development mode and enable you do fast development. you can make changes and it will deploy automatically.

You can also use:
```
npm start 
```



## Pre configured application

This app comes with preconfigured configuration. You can find below listed functionality already imaplemented - 
* login
* logout
* signup
* forgot password
* change password
* home screen
* pop up management(Modal)
* loader service
* constants
* configuration
* server
* build management
* Initial test cases
* test coverage and configuration



## Directory Layout
![](https://cloud.githubusercontent.com/assets/10917279/15777703/09eba91e-29af-11e6-8bda-c7c3e93492cc.png)

![](https://cloud.githubusercontent.com/assets/10917279/15777710/11128ad2-29af-11e6-8e66-c242d065e966.png)


## Testing

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
Jasmine, which we run with the Karma Test Runner. We provide a Karma
configuration file to run them.

* Configuration is found at `karma.conf.js`
* Test an be dound under client/test


The easiest way to run the unit tests is to use the supplied grunt configuration:

```
grunt test or grunt test:client
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

We have used karma code coverage tool preconfigured which will give percentage of code coverage.It will generate new folder having all coverage information

```
/coverage
```



### End to end testing

The angular-js-seed app comes with end-to-end tests, again written in Jasmine. These tests
are run with the Protractor End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `protractor-conf.js`
* the end-to-end tests are found in `/e2e`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

## Updating Angular

Angular framework library code and tools are acquired through package managers (npm and
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
grunt clean
grunt build
cd dist
npm start
```
This will minify all the file and will create production ready build.



## Continuous Integration

### Travis CI

Travis CI is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The angular-seed
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.

### Initial structure of this project is based on angular-fullstack generator.

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


## LICENSE

angular-js-seed is released under the ISC License Copyright (c) 2016 Prince Soni

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
