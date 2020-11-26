"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopApiExtensions = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.shopApiExtensions = graphql_tag_1.default `
	
	input SalesTrackerInput{
	  productVariantId: ID!
	  sales: Float
	}
	
	extend type Mutation{
	   updateTotalSales(input:[SalesTrackerInput!]!):Boolean!
	}
	
	extend type Mutation{
	  increaseTotalSales(input:[SalesTrackerInput!]!):Boolean!
	}
`;
//# sourceMappingURL=api-extensions.js.map