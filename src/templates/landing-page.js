import React from "react";
import { graphql } from "gatsby";

const LandingPageTemplate = ({ data }) => {
  const { markdownRemark: page } = data
  return (
    <div>
      <h1>{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query LandingPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default LandingPageTemplate
