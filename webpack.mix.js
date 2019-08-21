const mix = require('laravel-mix')

mix
  .react('resources/js/app.js', 'public/js')
  .extract()
  .sass('resources/sass/app.scss', 'public/css');