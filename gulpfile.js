var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    mix.copy(
        'bower_components/ContentTools/build/images',
        'public/assets/images'
    ).copy(
        'bower_components/ContentTools/build/icons.woff',
        'public/assets/css'
    );

    mix.sass([
        '../../../bower_components/ContentTools/build/content-tools.min.css',
        'fe-app.scss'
    ], 'public/assets/css/fe-app.css');

    mix.scripts([
        '../../../bower_components/ContentTools/build/content-tools.min.js',
        'resources/assets/js/fe/app.js'
    ], 'public/assets/js/fe-app.js');

});
