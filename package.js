/* jshint ignore:start */
Package.describe({
  name: 'silentcicero:meteor-ether-pudding',
  version: '0.0.1',
  summary: 'Pudding - a (more) delightful contract abstraction, based on web3',
  git: 'https://github.com/SilentCicero/meteor-ether-pudding',
  documentation: 'README.md'
});

Npm.depends({
    'ether-pudding': '0.9.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.export(['Pudding'], ['client']);
  api.add_files('package-init.js', 'client');
});
