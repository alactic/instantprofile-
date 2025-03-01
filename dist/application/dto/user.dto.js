"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "middleName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "profession", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "habit", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "image_name", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "image_id", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "activate", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "admin1", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "admin2", void 0);
__decorate([
    swagger_1.ApiModelProperty({ type: String, isArray: true }),
    __metadata("design:type", Object)
], CreateUserDto.prototype, "hobby", void 0);
exports.CreateUserDto = CreateUserDto;
class UpdateUserDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "middleName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "profession", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=user.dto.js.map