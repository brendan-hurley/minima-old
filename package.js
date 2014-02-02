Package.describe({
  summary: "Minima theme, package.js provides core theme files for Meteor powered applications."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.use('less', 'client');

  var path = Npm.require('path');

  api.add_files(path.join('less', 'minima.less'), 'client');

  api.add_files(path.join('js', 'minima.js'), 'client');
});
