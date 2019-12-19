"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.log = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var log =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(ctx, next) {
    var request, response, time, statusCode, responseTime, requestLog;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            request = ctx.request, response = ctx.response;
            time = Date.now();

            if (!(typeof next === "function")) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return next();

          case 5:
            statusCode = response.status;
            _context.next = 9;
            break;

          case 8:
            // next is an error object;
            statusCode = next.statusCode;

          case 9:
            responseTime = Math.ceil(Date.now() - time);
            requestLog = {
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
                statusCode: statusCode
              }
            };
            console.info(JSON.stringify(requestLog));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function log(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.log = log;

var _default = function _default() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(ctx, next) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return log(ctx, next);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports["default"] = _default;
//# sourceMappingURL=index.js.map