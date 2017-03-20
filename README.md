# Simple Boilerplate
Bare bones Grunt run boilerplate project for fast prototyping

### About
This is not very opionated but includes a few ideas to get started on projects:

- Source files (found in the `src`), generate **All** Destination files (created in the `build`)
- Intended modular approuch for HTML, CSS and JS
- Styles and scripts compiled to single files
- Deploy to GitHub Pages command

### Stack
- Command line server
- NPM management
- Grunt
  - Nested HTML includes
  - SASS for styling
  - ES6 transpiled to 2015 JavaScript
  - Image compression
  - jQuery inclueded (commeneted out)
  - Bootstrap v3 inclueded (commeneted out)

### Setup
1. Update names in the `package.json`
2. Run `grunt` in root directory to output inital files
3. Navigate and run server on `build` directory `php -S 0.0.0.0:1234`
4. Watch root directory `grunt watch` 

### Development
- Add new custom files (those not currently being handled via exsiting Grunt tasks eg: `favicon.ico`), to the Grunt Copy task `gruntfile.js > copy`

### Deploy
1. Ensure this setting is enabled on GitHub repo on the default `gh-pages` branch
2. In the root directory run the deploy script using the `./deploy.sh` command
