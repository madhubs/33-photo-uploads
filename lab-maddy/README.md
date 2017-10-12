![cf](https://i.imgur.com/7v5ASc8.png) 32: Authentication and Authorization
======

#### Additions for Auth:

I added this chunk of code to the landing-container/index.js file:
```
return (
     <div>
       <h2>hello world from landing!</h2>
       <AuthForm
         auth={params.auth}
         onComplete={handleComplete}/>

       <section>
         {utils.renderIf(this.props.auth,
           <Dashboard
           />
         )}
       </section>
     </div>
   );
```
CHANGED TO:
```
/REFORMATTED
    return (
       <div>
        {this.props.auth ?
          <h2>hello world from landing!</h2> :
          <AuthForm
          auth={params.auth}
          onComplete={handleComplete}/>
        }
       </div>
    );
  }
}

//added on 10/11 before starting on lab 33
let mapStateToProps = state => ({
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  login: user => dispatch(loginRequest(user)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
```


## Learning Objectives
* We will be able to manage basic and bearer auth on the client side
* We will learn to manage cookies on the client side

## Requirements
#### Configuration
#### backend
* clone [sluggram-backend](http://github.com/slugbyte/sluggram)

##### frontend
* `README.md`
* `.babelrc`
* `.gitignore`
* `package.json`
* `webpack.config.js`
* `src/**`
* `src/main.js`
* `src/style`
* `src/style/main.scss`
* `src/style/lib`
  * `_vars.scss`
* `src/style/base`
  * `_base.scss`
  * `_reset.scss`
* `src/style/layout`
  * `_header.scss`
  * `_footer.scss`
  * `_content.scss`

#### Feature Tasks
* Review the backend code for the Sluggram API; you should be able to interpret and understand what's happening
* create a simple front end for your cf-gram (or comparable) API
* create a landing page that enables a user to signup and signin
  * redirect the user to the dashboard page on signup or signin
  * store the users token in `localStorage` on signin

###### App Component Tree
Your components should be nested in the following layout  
```
App
  LandingContainer
    AuthForm
```
