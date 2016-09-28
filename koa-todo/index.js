'use strict';

var koa = require('koa');

var app = koa();

// logger
app.use(function *(next)
{
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *()
{
    this.body = '<h1>Hello World</h1>';
});

app.listen(3000);
console.log('now listening on port 3000');