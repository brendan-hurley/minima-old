Package.describe({
  summary: "Minima."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.use('Meteor');

  var path = Npm.require('path');

  api.add_files(path.join('less', 'minima.less'), 'client');

  api.add_files(path.join('js', 'package.js'), 'client');
});
