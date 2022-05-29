"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
class LoginController {
    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        res.json(username);
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map