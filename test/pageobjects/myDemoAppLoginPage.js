class myDemoAppLoginPage{
    get usernameInput(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]')
    }

    get passwordInput(){
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]')
    }

    get loginButton(){
        return $('//android.widget.Button[@content-desc="Tap to login with given credentials"]')
    }

    async login(username, password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }   

}
export default new myDemoAppLoginPage();