import { RequestContext, ProductVariantService } from '@vendure/core';
export declare class SalesTrackerResolver {
    private productvariantService;
    constructor(productvariantService: ProductVariantService);
    updateTotalSales(ctx: RequestContext, args: any): boolean;
    increaseTotalSales(ctx: RequestContext, args: any): boolean;
}
