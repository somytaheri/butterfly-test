module.exports = function (grunt) {

    require('jit-grunt')(grunt, {
        sprite: 'grunt-spritesmith'
    });

    require('time-grunt')(grunt);

    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),

            "bower-install-simple": {
                options: {
                    color: true
                },
                "dev": {
                    options: {
                        production: false
                    }
                },
                "build": {
                    options: {
                        production: true
                    }
                }
            },

            sprite:{
                all: {
                    src: ['<%= pkg.imageSource %>/sprites/*.png' , '!<%= pkg.imageSource %>/sprites/spritesheet.png'],
                    dest: '<%= pkg.imageSource %>/sprites/spritesheet.png',
                    destCss: '<%= pkg.styleSource %>/sprites.scss'
                }
            },

            sass: {
                develop: {
                    options: {
                        sourceMap: true
                    },
                    files: {
                        '<%= pkg.cssDestination %>/style.css': '<%= pkg.styleSource %>/style.scss'
                    }
                }
            },

            autoprefixer: {
                options: {
                    browsers: ['last 2 versions', 'ie 8', 'ie 9']
                },
                dist: {
                    files: {
                        '<%= pkg.cssDestination %>/style-prefix.css': '<%= pkg.cssDestination %>/style.css'
                    }
                }
            },

            cssmin: {
                compress:{
                    files:{
                        '<%= pkg.cssDestination %>/style.min.css':'<%= pkg.cssDestination %>/style-prefix.css'
                    }
                }
            },

            jshint: {
                all: ['<%= pkg.scriptSource %>/kernel/**/*.js']
            },

            concat: {
                dist: {
                    files: {
                        '<%= pkg.scriptSource %>/main.js': [
                            '<%= pkg.vendorScripts %>/superfish/dist/js/superfish.js',
                            '<%= pkg.scriptSource %>/kernel/modules/*.js',
                            '<%= pkg.scriptSource %>/kernel/app.js'
                        ]

                    }
                },
                ie: {
                    files: {
                        '<%= pkg.scriptSource %>/ie-support.js': [
                            '<%= pkg.vendorScripts %>/respond/dest/respond.js',
                            '<%= pkg.vendorScripts %>/html5shiv/dist/html5shiv.js',
                            '<%= pkg.vendorScripts %>/modernizr/modernizr.js'
                        ]
                    }
                }
            },

            uglify: {
                dist: {
                    files: {
                        '<%= pkg.scriptDestination %>/main.min.js': ['<%= pkg.scriptSource %>/main.js']
                    }
                },

                ie: {
                    files: {
                        '<%= pkg.scriptDestination %>/ie-support.min.js': ['<%= pkg.scriptSource %>/ie-support.js']
                    }
                }
            },

            watch: {
                options: {
                    livereload: true
                },
                scss: {
                    files: ['<%= pkg.styleSource %>/**/*.scss'],
                    tasks: ['sass', 'autoprefixer', 'cssmin']
                },
                script:{
                    files: ['<%= pkg.scriptSource %>/**/*.js'],
                    tasks: ['concat:dist', 'uglify:dist']
                }
            }

        });

    grunt.registerTask('build', [
        'sprite',
        'sass',
        'autoprefixer',
        'cssmin',
        'jshint',
        'concat',
        'uglify',
        'watch'
    ]);
    grunt.registerTask('bower', [
        'bower-install-simple'
    ]);
};
