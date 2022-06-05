/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@babel/preset-react',
  '@fullcalendar/react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/timegrid'
]);

module.exports = withTM({
  reactStrictMode: true
});
