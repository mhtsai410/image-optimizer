// const imagemin = require('imagemin');
const imagemin = require('imagemin-concurrent-skip-preserve');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
// const imageminWebp = require('imagemin-webp');

(async () => {
	const files = await imagemin(['images/**/*.{jpg,png}'], {
		plugins: [
			imageminJpegtran(),
			imageminPngquant({
				quality: [0.6, 0.8]
			})
			// imageminWebp({
			// 	quality: 85
			// })
		],
		concurrency: 16,
		replaceOutputDir: output => {
			return output.replace(/images\//, 'build/images/')
		}
	});

	console.log(files);
	//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})();
