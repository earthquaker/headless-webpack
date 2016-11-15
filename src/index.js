import { url } from './.settings.js';
import casperModule from 'casper';

let casper = casperModule.create();

casper.start(url, function() {
    this.echo(this.getTitle());
});

casper.run();