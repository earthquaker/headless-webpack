let settings = require('./.settings.js');
let casper = require('casper').create();

casper.start(settings.url, function() {
    this.echo(this.getTitle());
});

casper.run();