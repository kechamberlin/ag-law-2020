import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `AG Law`,
    // siteUrl: 'https://aglawmodesto.com',
    description: 'Modesto based law firm serving the 209 area',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // Name of the added plugin
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '4li46hdg',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
