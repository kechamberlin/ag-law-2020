import path, { resolve } from 'path';
// import fetch from 'isomorphic-fetch';

// async function turnSlicemastersIntoPages({ graphql, actions }) {
//   // 1. Query all slicemasters
//   const { data } = await graphql(`
//     query {
//       slicemasters: allSanityPerson {
//         totalCount
//         nodes {
//           name
//           id
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);
//   // 2. TODO: Turn each slicemaster into their own page
//   data.slicemasters.nodes.forEach((slicemaster) => {
//     actions.createPage({
//       component: resolve('./src/templates/Slicemaster.js'),
//       path: `/slicemaster/${slicemaster.slug.current}`,
//       context: {
//         name: slicemaster.person,
//         slug: slicemaster.slug.current,
//       },
//     });
//   });

//   // 3. Figure out how many pages there are based on how many slicemasters there are, and how many per page!
//   // NOTE: the variable (4) comes in as a string, instead of a number as one might think.  use parseInt to convert string '4' to number 4
//   const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
//   const pageCount = Math.ceil(data.slicemasters.totalCount / pageSize);
//   console.log(
//     `there are ${data.slicemasters.totalCount} total people.  And we have ${pageCount} pages with ${pageSize} per page`
//   );
//   // 4. Loop from 1 to n - and create the pages for them
//   Array.from({ length: pageCount }).forEach((_, i) => {
//     console.log(`Creating page ${i}`);
//     actions.createPage({
//       path: `/slicemasters/${i + 1}`,
//       component: path.resolve('./src/pages/slicemasters.js'),
//       // This data is passed to the template when we create it
//       context: {
//         skip: i * pageSize,
//         currentPage: i + 1,
//         pageSize,
//       },
//     });
//   });
// }

async function turnCasesIntoPages({ graphql, actions }) {
  // 1. Query all cases
  const { data } = await graphql(`
    query {
      allSanityRecent {
        totalCount
        nodes {
          recent
          id
          slug {
            current
          }
        }
      }
    }
  `);
  // 2. Figure out how many pages there are based on how many cases there are, and how many per page
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.allSanityRecent.totalCount / pageSize);
  console.log(
    `There are ${data.allSanityRecent.totalCount} total cases.  And we have ${pageCount} pages with ${pageSize} per page`
  );

  // 3. Loop from 1 to n and create the pages for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    console.log(`Creating page ${i}`);
    actions.createPage({
      path: `/recentcases/${i + 1}`,
      component: path.resolve('./src/pages/recentcases.js'),
      // This data is passed to the template when we create it
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([turnCasesIntoPages(params)]);
  // 1. Pizzas

  // 2. Toppings

  // 3. Slicemasters
}
