"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Read = void 0;
const operationDataBase_1 = require("../data/operationDataBase");
const httpStatusCode_1 = require("../utils/httpStatusCode");
const Read = {
    getTasks: function (req, res) {
        if (Object.keys(req.query).length !== 0) {
            const interParams = req.query;
            const isActive = interParams.active;
            const foundTasks = operationDataBase_1.DataBase.todo.filter(task => task.isActive === isActive);
            res.status(httpStatusCode_1.httpStatusCode.OK_200).json(foundTasks);
            return;
        }
        res.status(httpStatusCode_1.httpStatusCode.OK_200).json(operationDataBase_1.DataBase.todo);
    },
    getOneTask: function (req, res) {
        const idTask = +req.params.id;
        const foundTask = operationDataBase_1.DataBase.todo.find(task => task.id === idTask);
        if (!foundTask) {
            res.status(httpStatusCode_1.httpStatusCode.NOT_FOUND_404);
            return;
        }
        res.status(httpStatusCode_1.httpStatusCode.OK_200).json(foundTask);
    },
};
exports.Read = Read;
