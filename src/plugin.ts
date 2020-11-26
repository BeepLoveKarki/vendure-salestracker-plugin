import { PluginCommonModule, VendurePlugin, ProductVariant } from '@vendure/core';
import { PluginInitOptions } from './types';
import { PLUGIN_INIT_OPTIONS } from './constants';
//import { SalesTrackerEntity } from './entities/salestracker.entity';
//import { SalesTrackerService } from './service/salestracker.service';
import { shopApiExtensions } from './api/api-extensions';
import { SalesTrackerResolver } from './api/salestracker.resolver';
import path from 'path';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';

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
@VendurePlugin({
    // Importing the PluginCommonModule gives all of our plugin's injectables (services, resolvers)
    // access to the Vendure core providers. See https://www.vendure.io/docs/typescript-api/plugin/plugin-common-module/
    imports: [PluginCommonModule],
    //entities: [SalesTrackerEntity],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [SalesTrackerResolver],
    },
	/*adminApiExtensions: {
        schema: ApiExtensions,
        resolvers: [SalesTrackerResolver],
    },*/
    /*providers: [
        SalesTrackerService,
        { provide: PLUGIN_INIT_OPTIONS, useFactory: () => SalesTrackerPlugin.options },
    ],*/
	
	configuration:config =>{
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
export class SalesTrackerPlugin {

    static options: PluginInitOptions;
    static init(options: PluginInitOptions) {
        this.options = options;
        return SalesTrackerPlugin;
    }
	
	static uiExtensions: AdminUiExtension = {
        extensionPath: path.join(__dirname, 'ui-extensions'),
        ngModules: [
            {
                type: 'shared' as const,
                ngModuleFileName: 'unittypefield.module.ts',
                ngModuleName: 'UnitTypeControlModule',
            }
        ],
    };
	
}
