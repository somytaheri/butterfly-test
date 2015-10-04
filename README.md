#Getting started

This project requires:

* [node and npm](http://nodejs.org/) `brew install node`
* [grunt-cli](http://gruntjs.com/getting-started#installing-the-cli) `npm install -g grunt-cli`

Install node dependencies:

    npm install

Install bower:

    grunt build runs the bower too

To run a grunt build:

    grunt build


Then open [http://localhost:80](http://localhost:80) in your web browser



# Building the project

The project uses Grunt to compile scss to css, generate sprite, minify and concatenate the assets. The main grunt tasks are:

* `grunt build`: runs an entire build from scratch, running all grunt tasks

## Single grunt tasks explained

* `grunt jshint`: runs jshint on javascript files before any concat and uglify tasks
* `grunt concat`: Copies assets from bower_components into the public site structure
* `grunt uglify`: Minifies all javascript in the `public` directory
* `grunt sass`: Compiles the source SASS files into CSS, placing them in the `public` directory
* `grunt cssmin`: Minifies all the CSS in the `public` directory
* `bower-install-simple`: Download vendor from bower
* `autoprefixer`: Add a all browser prefixer on css
* `sprite`: sprite generator
* `conect`: create local server



# Author

* `Somy Taheri`

