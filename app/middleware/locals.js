"use strict";

module.exports = () => {
  return async function (ctx, next) {
    ctx.locals.version = ctx.app.config.version;
    ctx.locals.theme = ctx.request.headers.cookie.includes("theme=dark") ? "dark" : "light";
    await next();
  };
};
