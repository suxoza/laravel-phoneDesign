const mix = require('laravel-mix');


const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')({

  content: [
    './resources/**/*.blade.php',
    './resources/js/app.js',
    './app/PhoneModel.php'
  ],
  defaultExtractor: content => content.match(/[\w-/:]*[\w-/:]/g) || []
})

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/style.css', 'public/css', [
		require('tailwindcss'),
	    require('autoprefixer'),
	    ...process.env.NODE_ENV === 'production'
	      ? [purgecss]
	      : []
   ])


//mix.browserSync('phonedesign.loc')