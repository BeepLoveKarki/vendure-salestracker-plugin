import { PluginInitOptions } from './types';
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
export declare class SalesTrackerPlugin {
    static options: PluginInitOptions;
    static init(options: PluginInitOptions): typeof SalesTrackerPlugin;
    static uiExtensions: AdminUiExtension;
}
