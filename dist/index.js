"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const booleanMiddleware_1 = require("./middlewares/booleanMiddleware");
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(booleanMiddleware_1.booleanMiddleware);
const port = process.env.PORT || 3000;
server.get('/todos', controllers_1.Read.getTasks);
server.listen(port, () => {
    console.log(`Serve is started on ${port} port`);
});
