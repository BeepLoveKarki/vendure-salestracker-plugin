import gql from 'graphql-tag';

export const shopApiExtensions = gql`
	
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

