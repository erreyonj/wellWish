'use client'
import { StytchLogin } from "@stytch/nextjs";
import { Products, StytchLoginConfig } from "@stytch/vanilla-js";


const Login = () => {
  const REDIRECT_URL = "http://localhost:3000/authenticate";
  // Configure the pre-built UI and authentication methods
  const config: StytchLoginConfig = {
    products: [Products.emailMagicLinks, Products.oauth],
    emailMagicLinksOptions: {
      loginRedirectURL: REDIRECT_URL,
      loginExpirationMinutes: 60,
      signupRedirectURL: REDIRECT_URL,
      signupExpirationMinutes: 60,
    },
    oauthOptions: {
      providers: [{ type: "google"},{type: "apple" }],
      loginRedirectURL: REDIRECT_URL,
      signupRedirectURL: REDIRECT_URL,
    },
    passwordOptions: {
      loginExpirationMinutes: 30,
      loginRedirectURL: REDIRECT_URL,
      resetPasswordExpirationMinutes: 30,
      resetPasswordRedirectURL: REDIRECT_URL,
    },
  };

 return <StytchLogin config={config}/>;

}
export default Login

