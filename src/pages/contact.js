import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

export default function contact() {
  return <div>
    <Layout>
    <SEO title="Home" />
    <form
    name="contact v2"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    onSubmit="submit"
    >
      <input type="hidden" name="form-name" value="contact v1"/>
      <div hidden>
        <input name="bot-field"/>
      </div>
      <div>
        <label htmlFor="first-name">First Name</label><br/>
        <input id="first-name" type="text" name="first-name" />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label><br/>
        <input id="last-name" type="text" name="last-name" />
      </div>
      <div>
        <label htmlFor="email">Email</label><br/>
        <input id="email" type="email" name="email" />
      </div>
      <div>
        <label htmlFor="comment">Any Comments?</label><br/>
        <textarea id="comment" name="comments"></textarea>
      </div>
     <button type="submit">Submit</button>
    </form>
    </Layout>
  </div>
}
