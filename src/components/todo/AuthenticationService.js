class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        return sessionStorage.getItem('authenticatedUser') != null
    }
    getLoggedInUserName(){
       return sessionStorage.getItem('authenticatedUser')
    }

    
}

// instance is exported
export default new AuthenticationService()