"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var SalesTrackerPlugin_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesTrackerPlugin = void 0;
const core_1 = require("@vendure/core");
//import { SalesTrackerEntity } from './entities/salestracker.entity';
//import { SalesTrackerService } from './service/salestracker.service';
const api_extensions_1 = require("./api/api-extensions");
const salestracker_resolver_1 = require("./api/salestracker.resolver");
const path_1 = __importDefault(require("path"));
/**
 * An example Vendure plugin.
 *
 * @example
 * ```TypeScript
 * export const config: VendureConfig = {
 *   //...
 *   plugins: [
 *     ExamplePlugin.init({
 *       // options
 *     }),
 *   ]
 * }
 * ```
 */
let SalesTrackerPlugin = SalesTrackerPlugin_1 = class SalesTrackerPlugin {
    static init(options) {
        this.options = options;
        return SalesTrackerPlugin_1;
    }
};
SalesTrackerPlugin.uiExtensions = {
    extensionPath: path_1.default.join(__dirname, 'ui-extensions'),
    ngModules: [
        {
            type: 'shared',
            ngModuleFileName: 'unittypefield.module.ts',
            ngModuleName: 'UnitTypeControlModule',
        }
    ],
};
SalesTrackerPlugin = SalesTrackerPlugin_1 = __decorate([
    core_1.VendurePlugin({
        // Importing the PluginCommonModule gives all of our plugin's injectables (services, resolvers)
        // access to the Vendure core providers. See https://www.vendure.io/docs/typescript-api/plugin/plugin-common-module/
        imports: [core_1.PluginCommonModule],
        //entities: [SalesTrackerEntity],
        shopApiExtensions: {
            schema: api_extensions_1.shopApiExtensions,
            resolvers: [salestracker_resolver_1.SalesTrackerResolver],
        },
        /*adminApiExtensions: {
            schema: ApiExtensions,
            resolvers: [SalesTrackerResolver],
        },*/
        /*providers: [
            SalesTrackerService,
            { provide: PLUGIN_INIT_OPTIONS, useFactory: () => SalesTrackerPlugin.options },
        ],*/
        configuration: config => {
            config.customFields.ProductVariant.push({
                type: 'string',
                name: 'Unit',
                defaultValue: 'piece'
            });
            config.customFields.ProductVariant.push({
                type: 'float',
                name: 'Sales',
                min: 0,
                defaultValue: 0
            });
            config.customFields.ProductVariant.push({
                type: 'string',
                name: 'UnitType',
                defaultValue: 'int'
            });
            return config;
        }
    })
], SalesTrackerPlugin);
exports.SalesTrackerPlugin = SalesTrackerPlugin;
//# sourceMappingURL=plugin.js.map