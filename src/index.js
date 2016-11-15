import { url } from './.settings.js';
let casper = require('casper').create();

casper.start(url, function() {
    this.echo(this.getTitle());
});

casper.run();