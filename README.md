# koa-appc-logger

Axway APPC logger middleware for Koa application

# Usage

```javascript
import Koa from "koa";
import logger, { log } from ('koa-appc-logger');

const app = new Koa();

app.use(logger());
app.on("error", (error, ctx) => {
  log(ctx, error);
});

```
