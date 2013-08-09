var _ = require('underscore');

module.exports = function (grunt) {
    "use strict";

    var KunstmaanSandboxDemoBundle;

    KunstmaanSandboxDemoBundle = {
        'js':   ['src/Kunstmaan/SandboxDemoBundle/Resources/public/**/*.js', '!src/Kunstmaan/SandboxDemoBundle/Resources/public/vendor/**/*.js', 'Gruntfile.js'],
        'scss': ['src/Kunstmaan/SandboxDemoBundle/Resources/public/scss/**/*.scss'],
        'twig': ['src/Kunstmaan/SandboxDemoBundle/Resources/views/**/*.html.twig'],
        'img':  ['src/Kunstmaan/SandboxDemoBundle/Resources/public/img/**/*.{png,jpg,jpeg,gif,webp}'],
        'svg':  ['src/Kunstmaan/SandboxDemoBundle/Resources/public/img/**/*.svg']
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            // KunstmaanSandboxDemoBundle
                KunstmaanSandboxDemoBundle_js: {
                files: KunstmaanSandboxDemoBundle.js,
                tasks: ['modernizr:KunstmaanSandboxDemoBundle', 'jshint:KunstmaanSandboxDemoBundle'],
                options: {
                    nospawn: true,
                    livereload: true
                }
            },
            KunstmaanSandboxDemoBundle_scss: {
                files: KunstmaanSandboxDemoBundle.scss,
                tasks: ['modernizr:KunstmaanSandboxDemoBundle'],
                options: {
                    livereload: true
                }
            },
            KunstmaanSandboxDemoBundle_twig: {
                files: KunstmaanSandboxDemoBundle.twig,
                tasks: ['modernizr:KunstmaanSandboxDemoBundle'],
                options: {
                    livereload: true
                }
            },
            KunstmaanSandboxDemoBundle_images: {
                files: KunstmaanSandboxDemoBundle.img,
                tasks: ['imagemin:KunstmaanSandboxDemoBundle'],
                options: {
                    event: ['added', 'changed'],
                    livereload: true
                }
            },
            KunstmaanSandboxDemoBundle_svg: {
                files: KunstmaanSandboxDemoBundle.svg,
                tasks: ['svg2png:KunstmaanSandboxDemoBundle'],
                options: {
                    event: ['added', 'changed'],
                    livereload: true
                }
            },
        },

        jshint: {
            options: {
                camelcase: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                forin: true,
                indent: 4,
                trailing: true,
                undef: true,
                browser: true,
                devel: true,
                node: true,
                globals: {
                    jQuery: true,
                    $: true
                }
            },
            KunstmaanSandboxDemoBundle: {
                files: {
                    src: KunstmaanSandboxDemoBundle.js
                }
            }
        },

        imagemin: {
            KunstmaanSandboxDemoBundle: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/Kunstmaan/SandboxDemoBundle/Resources/public/img',
                    src: '**/*.{png,jpg,jpeg,gif,webp}',
                    dest: 'src/Kunstmaan/SandboxDemoBundle/Resources/public/img'
                }]
            }
        },

        svg2png: {
            KunstmaanSandboxDemoBundle: {
                files: [{
                    src: KunstmaanSandboxDemoBundle.svg
                }]
            }
        },

        modernizr: {
            KunstmaanSandboxDemoBundle: {
                files: {
                    dev: "remote",
                    src: _.union(KunstmaanSandboxDemoBundle.js, KunstmaanSandboxDemoBundle.scss, KunstmaanSandboxDemoBundle.twig),
                    dest: "src/Kunstmaan/SandboxDemoBundle/Resources/public/vendor/modernizr/modernizr-custom.js"
                },
                parseFiles: true,
                extra: {
                    "shiv" : true,
                    "printshiv" : false,
                    "load" : true,
                    "mq" : false,
                    "cssclasses" : true
                },
                extensibility: {
                    "addtest" : false,
                    "prefixed" : false,
                    "teststyles" : false,
                    "testprops" : false,
                    "testallprops" : false,
                    "hasevents" : false,
                    "prefixes" : false,
                    "domprefixes" : false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-svg2png');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['modernizr']);
};
