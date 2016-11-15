import settings from './.settings.js';
import casperModule from 'casper';

let casper = casperModule.create();

casper.start(settings.url, function() {
    this.echo(this.getTitle());
});

casper.run();