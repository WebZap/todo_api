"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleanMiddleware = void 0;
const booleanMiddleware = (req, res, next) => {
    const interParams = req.query;
    for (const key in interParams) {
        if (Object.prototype.hasOwnProperty.call(interParams, key)) {
            const element = interParams[key];
            if (element === 'true' || element === 'false') {
                interParams[key] = element === 'true';
            }
        }
    }
    next();
};
exports.booleanMiddleware = booleanMiddleware;
