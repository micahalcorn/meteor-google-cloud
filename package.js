Package.describe({
  name: 'micah:google-cloud',
  version: '0.0.1',
  summary: 'Wrapper for Node "gcloud" package',
  git: 'https://github.com/micahalcorn/meteor-google-cloud',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('lib/google-cloud.js', 'server');
  api.export('gcloud', 'server');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('micah:google-cloud');
  api.addFiles('lib/google-cloud-tests.js', 'server');
});

Npm.depends({
  'gcloud': '0.20.0'
});
