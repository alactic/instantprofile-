"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const service_controller_1 = require("../controllers/service.controller");
const service_service_1 = require("../services/service.service");
const service_provider_1 = require("../providers/service.provider");
const user_module_1 = require("./user.module");
const auth_module_1 = require("./auth.module");
let ServiceModule = class ServiceModule {
};
ServiceModule = __decorate([
    common_1.Module({
        controllers: [service_controller_1.ServiceController],
        imports: [user_module_1.UserModule, auth_module_1.AuthModule],
        providers: [service_service_1.ServiceService, ...service_provider_1.serviceProviders],
    })
], ServiceModule);
exports.ServiceModule = ServiceModule;
//# sourceMappingURL=service.module.js.map