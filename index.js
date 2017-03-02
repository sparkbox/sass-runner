const sass = require('node-sass');

const run = (data, paths) => new Promise ((resolve, reject) => {
  paths.push('./node_modules/sass-list-maps');
  sass.render({
    data,
    includePaths: paths,
  }, (err, res) => {
    if (!err) {
      resolve(res.css.toString());
    } else {
      reject(err);
    }
  });
});

module.exports = run;
