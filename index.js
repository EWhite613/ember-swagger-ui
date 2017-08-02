/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
module.exports = {
  name: 'ember-swagger-ui',

  included: function(app) {
    this._super.included(app);
    debugger
    // app.import(app.bowerDirectory + '/swagger-ui/dist/fonts/DroidSans.ttf', { destDir: 'fonts' });
    // app.import(app.bowerDirectory + '/swagger-ui/dist/fonts/DroidSans-Bold.ttf', { destDir: 'fonts' });

    // app.import(app.bowerDirectory + '/swagger-ui/dist/images/explorer_icons.png', { destDir: 'images' });
    // app.import(app.bowerDirectory + '/swagger-ui/dist/images/throbber.gif', { destDir: 'images' });
    // app.import(app.bowerDirectory + '/swagger-ui/dist/images/logo_small.png', { destDir: 'images' });

    app.import('vendor/swagger-ui.css');
    // app.import(app.bowerDirectory + '/swagger-ui/dist/css/screen.css');

    // app.import(app.bowerDirectory + '/swagger-ui/dist/lib/marked.js');
    // app.import(app.bowerDirectory + '/jquery-migrate/jquery-migrate.min.js');
    // app.import(app.bowerDirectory + '/swagger-ui/dist/lib/jquery.ba-bbq.min.js');
    // app.import(app.bowerDirectory + '/swagger-ui/dist/lib/jquery.slideto.min.js');
    // app.import(app.bowerDirectory + '/swagger-ui/dist/lib/jquery.wiggle.min.js');
    // app.import(app.bowerDirectory + '/swagger-ui/dist/lib/lodash.min.js');
    // app.import(app.bowerDirectory + '/swagger-ui/dist/lib/handlebars-4.0.5.js');
    // app.import(app.bowerDirectory + '/swagger-ui/dist/lib/object-assign-pollyfill.js');
    // app.import(app.bowerDirectory + '/swagger-ui/dist/lib/backbone-min.js');
    // app.import(app.bowerDirectory + '/swagger-ui/dist/lib/highlight.9.1.0.pack.js', { exports: { 'hljs': ['default']}});
    // app.import(app.bowerDirectory + '/swagger-ui/dist/lib/highlight.9.1.0.pack_extended.js');
    // app.import(app.bowerDirectory + '/swagger-ui/dist/lib/jsoneditor.min.js');
    // app.import(app.bowerDirectory + '/swagger-ui/dist/lib/swagger-oauth.js');
    // app.import(app.bowerDirectory + '/swagger-ui/dist/swagger-ui.js');
    this.import('vendor/swagger-ui-bundle.js');
    this.import('vendor/swagger-ui-standalone-preset.js');
    
    

    // app.import(app.bowerDirectory + '/swagger-ui/dist/o2c.html', { destDir: '/' });
  },
  treeForVendor(vendorTree) {
    var swaggerTree = new Funnel(path.join(this.project.root, 'node_modules', 'swagger-ui-dist'), {
      files: ['swagger-ui-bundle.js', 'swagger-ui-standalone-preset.js', 'swagger-ui.css'],
    });

    return new MergeTrees([vendorTree, swaggerTree]);
  }
};
