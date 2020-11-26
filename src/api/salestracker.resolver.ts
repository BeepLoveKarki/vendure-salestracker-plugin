import { Args, Parent, Query, Resolver, Mutation } from '@nestjs/graphql';
import { RequestContext, Ctx, ProductVariantService, Transaction } from '@vendure/core';

@Resolver()
export class SalesTrackerResolver {
    constructor(private productvariantService: ProductVariantService) {
    }
	
    @Transaction()
    @Mutation()
    updateTotalSales(@Ctx() ctx: RequestContext, @Args() args: any) {
        let data:any[] = [];
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
	
	@Transaction()
	@Mutation()
    increaseTotalSales(@Ctx() ctx: RequestContext, @Args() args: any) {
        let sales:number[]= [];
		let ids:string[] =[];
		let datas:any[] = [];
        for (let i = 0; i < args.input.length; i++) {
			ids.push(args.input[i].productVariantId);
			sales.push(args.input[i].sales);
        }
		let nsales,ndata;
		this.productvariantService.findByIds(ctx,ids).then((results)=>{ 
		  for (let j=0;j<results.length;j++){
		   for(let i=0;i<ids.length;i++){
		      if(ids[i]==results[j].id){				  
				 nsales=Object(results[j].customFields)["Sales"]+sales[j];
				 ndata= {
				   id:ids[i],
				   customFields:{
				      Sales:nsales
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
}
