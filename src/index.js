export const log = async (ctx, next) => {
  const { request, response } = ctx;
  const time = Date.now();
  let statusCode;
  if (typeof next === "function") {
    await next();
    statusCode = response.status;
  } else {
    // next is an error object;
    statusCode = next.statusCode;
  }
  const responseTime = Math.ceil(Date.now() - time);
  const requestLog = {
    time: new Date(time).toISOString(),
    response_time: responseTime,
    req: {
      method: request.method.toUpperCase(),
      url: request.url,
      headers: {
        accept: request.headers.accept,
        host: request.headers.host,
        "user-agent": request.headers["user-agent"],
        "x-forwarded-for": request.headers["x-forwarded-for"] || request.ip
      }
    },
    res: {
      statusCode
    }
  };
  console.log(JSON.stringify(requestLog));
};
export default () => {
  return async (ctx, next) => {
    await log(ctx, next);
  };
};
