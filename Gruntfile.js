module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        files: {
          './build/<%= pkg.name %>.js': './src/js/main.js'
        },
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            transform: [
              ['babelify', { presets: ['es2015'] }]
          ]
        }
      }
    },
    sass: {
        options: {
            sourceMap: false
        },
        dist: {
            files: {
                './build/<%= pkg.name %>.css': './src/css/main.scss'
            }
        }
    },
    includes: {
      files: {
        src: [
          './src/html/index.html',
          './src/html/page-1.html'
        ],
        dest: './build',
        flatten: true,
        cwd: '.',
        options: {
          silent: true
        }
      }
    },
    watch: {
      scripts: {
        files: ['./src/js/*.js'],
        tasks: ['browserify'],
        options: {
          spawn: false,
        },
      },
      styles: {
        files: ['./src/css/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
      html: {
        files: ['./src/html/**/*.html', './src/html/*.html'],
        tasks: ['includes'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.registerTask('default', ['sass', 'browserify', 'includes']);

};
