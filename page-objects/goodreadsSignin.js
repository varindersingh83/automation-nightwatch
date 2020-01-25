module.exports = {
  url: 'https://www.goodreads.com/',
  elements: {
    emailInput: '#userSignInFormEmail',
    passwordInput: '#user_password',
    singInButton: '.gr-button'
  },
  //custom commands for nightwatch
  commands: [
    {
      signInCredentials(userEmail, userPassword) {
        return this.setValue('@emailInput', userEmail).setValue(
          '@passwordInput',
          userPassword
        );
      }
    }
  ]
};
