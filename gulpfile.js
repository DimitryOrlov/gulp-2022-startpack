// Main module
import gulp from 'gulp'
// Import pathes
import { path } from './gulp/config/path.js'
// Import general plugins
import { plugins } from './gulp/config/plugins.js'

// Передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// Import tasks
import { copy } from "./gulp/tasks/copy.js"
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js"
import { server } from "./gulp/tasks/server.js"
import { scss } from "./gulp/tasks/scss.js"
import { js } from "./gulp/tasks/js.js"
import { images } from "./gulp/tasks/images.js"
import { otfToTtf, ttfToWoff, fontsStyle, copyFonts, clearFonts } from "./gulp/tasks/fonts.js"
import { svgSprive } from './gulp/tasks/svgSprive.js'
import { zip } from './gulp/tasks/zip.js'
// import { fonts } from "./gulp/tasks/fonts.js"

// Watcher functions
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
}

// Consistent fonts processing
const fonts = gulp.series(otfToTtf, ttfToWoff);

// Main tasks
const mainTasks = gulp.series(clearFonts, copyFonts, gulp.parallel(copy, html, scss, js, images));

// Scenaries chain
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);

// Export scenaries
export { svgSprive } 
export { dev }
export { build }
export { deployZIP }

// Execute default scenario
gulp.task('default', dev);