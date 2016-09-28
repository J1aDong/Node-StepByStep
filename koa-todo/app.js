'use strict';

var koa = require('koa');
var middlewares = require('koa-middlewares');
var router = middlewares.router();

var app = koa();

/**
 * ignore favicon
 */
app.use(middlewares.favicon());

// logger
app.use(function *(next)
{
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

router.get('/',function *(next)
{
    this.body = 'Hello mj';
});

/**
 * router
 */
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8000);