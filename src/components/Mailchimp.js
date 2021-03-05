import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Button } from "./Button"

export default class MailChimpComponent extends React.Component {
  state = {
    name: null,
    email: null,
  }

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()

    console.log("submit", this.state)

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)

        if (result !== "success") {
          throw msg
        }
        alert(msg)
      })
      .catch(err => {
        console.log("err", err)
        alert(err)
      })
  }

  render() {
    return (
      <section className="mailchimp-sign-up">
        

        <form onSubmit={this._handleSubmit}>
          <label htmlFor="email">
             Email<span>*</span>
            <input
              type="email"
              onChange={this._handleChange}
              name="email"
              className="mailchimp-input"
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
              required
            />
          </label>

          <Button
            aria-label="submit" 
            as="button" 
            primary="true" 
            round="true"
            type="submit"
            className="mailchimp-button" css={
                             `  height:48px;
                             
                               @media screen and (max-width:768px){
                                   width:100%;
                                   min-width:350px;
                               }
                               @media screen and (max-width:400x){
                                width: 100%;
                                min-width:250px;
                            }
                            `}>
            Sign up now
          </Button>
        </form>

        <small>Strict No Spam Policy. No Sharing of your data - EVER!</small>
      </section>
    )
  }
}
