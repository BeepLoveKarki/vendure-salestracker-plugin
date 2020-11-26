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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesTrackerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("@vendure/core");
let SalesTrackerResolver = class SalesTrackerResolver {
    constructor(productvariantService) {
        this.productvariantService = productvariantService;
    }
    updateTotalSales(ctx, args) {
        let data = [];
        for (let i = 0; i < args.input.length; i++) {
            let ndata = {
                id: args.input[i].productVariantId,
                customFields: {
                    Sales: args.input[i].sales
                }
            };
            data.push(ndata);
        }
        this.productvariantService.update(ctx, data);
        return true;
    }
    increaseTotalSales(ctx, args) {
        let sales = [];
        let ids = [];
        let datas = [];
        for (let i = 0; i < args.input.length; i++) {
            ids.push(args.input[i].productVariantId);
            sales.push(args.input[i].sales);
        }
        let nsales, ndata;
        this.productvariantService.findByIds(ctx, ids).then((results) => {
            for (let j = 0; j < results.length; j++) {
                for (let i = 0; i < ids.length; i++) {
                    if (ids[i] == results[j].id) {
                        nsales = Object(results[j].customFields)["Sales"] + sales[j];
                        ndata = {
                            id: ids[i],
                            customFields: {
                                Sales: nsales
                            }
                        };
                        datas.push(ndata);
                    }
                }
            }
            this.productvariantService.update(ctx, datas);
        });
        return true;
    }
};
__decorate([
    core_1.Transaction(),
    graphql_1.Mutation(),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", void 0)
], SalesTrackerResolver.prototype, "updateTotalSales", null);
__decorate([
    core_1.Transaction(),
    graphql_1.Mutation(),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", void 0)
], SalesTrackerResolver.prototype, "increaseTotalSales", null);
SalesTrackerResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [core_1.ProductVariantService])
], SalesTrackerResolver);
exports.SalesTrackerResolver = SalesTrackerResolver;
//# sourceMappingURL=salestracker.resolver.js.map