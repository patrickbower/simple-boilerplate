# simple-boilerplate
Bare bones Grunt run boilerplate for rapid prototyping

### About
This is not very opionated but includes a few ideas to get started on small projects:

- Source files (found in the `src`), generate **All** Destination files (created in the `build`)
- Intended modular approuch for HTML, CSS and JS
- Styles and scripts compiled to single files
- Deploy to GitHub Pages command

### Standards
- NPM managed
- Grunt run tasks inclulde:
  - Nested HTML includes
  - SASS for styling
  - ES6 transpiled to 2015 JavaScript
  - Image compression
  - jQuery inclueded (commeneted out)
  - Bootstrap v3 inclueded (commeneted out)

### Setup
1. Change project name in the package.json file
2. Run 'Grunt' command to output inital files
3. Navigate and run server on *build* folder (on a Mac this can be done through the terminal using `php -S 0.0.0.0:1234`
4. Back in the root directory run the watch using `grunt watch` 

### Development
- Add new custom files (those not currently being handled via exsiting Grunt tasks such a a favicon), to the Grunt Copy task `gruntfile.js > copy`

### Deploy
1. Ensure this setting is enabled on GitHub repo on the default `gh-pages` branch
2. In the root directory run the deploy script using the `./deploy.sh` command
