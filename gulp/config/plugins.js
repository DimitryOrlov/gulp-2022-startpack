import replace from 'gulp-replace'; // Find and replace
import plumber from 'gulp-plumber'; // Error handler
import notify from 'gulp-notify'; // Notification
import browserSync from 'browser-sync'; // Local server
import newer from 'gulp-newer'; // Update checker
import ifPlugin from 'gulp-if'; // If statement

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin,
}