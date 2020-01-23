import React from 'react'
import Layout from './components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../pages/components/head'

const Blog = () => {
  // const data = useStaticQuery(graphql`
  //   query{
  //     allMarkdownRemark{
  //       edges{
  //         node{
  //           frontmatter{
  //             title
  //             date
  //           }
  //           fields{
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
  query{
    allContentfulBlogPost(
      sort: {
        fields: publishedDate,
        order: DESC
      }
    ){
      edges{
        node{
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
  `)

//   return (
//     <Layout>
//       <h1>Blog</h1>
//       <ol className={blogStyles.posts}>
//         {data.allMarkdownRemark.edges.map(edge => {
//           return (
//             <li className={blogStyles.post}>
//               <Link to={`/blog/${edge.node.fields.slug}`}>
//                 <h2>{edge.node.frontmatter.title}</h2>
//                 <p>{edge.node.frontmatter.date}</p>
//               </Link>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

return (
  <Layout>
    <Head title="Blog"/>
    <h1>Blog</h1>
    <ol className={blogStyles.posts}>
      {data.allContentfulBlogPost.edges.map(edge => {
        return (
          <li className={blogStyles.post}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        )
      })}
    </ol>
  </Layout>
)
}


export default Blog
