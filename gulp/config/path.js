// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
   build: {
      js: `${buildFolder}/js/`,
      html: `${buildFolder}/`,
      css: `${buildFolder}/css`,
      files: `${buildFolder}/files/`,
      images: `${buildFolder}/img/`,
      fonts: `${buildFolder}/fonts/`,
   },
   src: {
      scss: `${srcFolder}/scss/style.scss`,
      images: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp}`,
      svg: `${srcFolder}/img/**/*.svg`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
      js: `${srcFolder}/js/app.js`,
      svgIcons: `${srcFolder}/svgicons/*.svg`,
   },
   watch: {
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      files: `${srcFolder}/files/**/*.*`,
      js: `${srcFolder}/js/**/*.js`,
      images: `${srcFolder}/img/**/*.{jpg, jpeg, png, svg, ico, gif, webp}`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: ``
}