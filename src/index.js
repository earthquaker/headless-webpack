import settings from './.settings.js';
import casperModule from 'casper';

let casper = casperModule.create();

casper.start(settings.url, ()=> {
    casper.echo(casper.getTitle());
});

casper.run();