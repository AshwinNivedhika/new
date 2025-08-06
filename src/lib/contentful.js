import { GraphQLClient } from 'graphql-request';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;

export const contentfulClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});