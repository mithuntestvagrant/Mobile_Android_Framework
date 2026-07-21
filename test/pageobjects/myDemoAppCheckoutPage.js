class myDemoAppCheckoutPage {       
    get fullNameInput() {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/fullNameET"]')
    }
    get addressInput() {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/address1ET"]')
    }

    get cityInput() {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/cityET"]')
    }

    get stateInput() {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/stateET"]')
    }       

    get postalCodeInput() {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/zipET"]')
    }

    get countryInput() {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/countryET"]')
    }

    get continueButton() {
        return $('~Saves user info for checkout')
    }

    async enterCheckoutDetails(fullName, address, city, state,postalCode,country) {
        await this.fullNameInput.setValue(fullName);
        await this.addressInput.setValue(address);
        await this.cityInput.setValue(city);
        await this.stateInput.setValue(state);
        await this.postalCodeInput.setValue(postalCode);
        await this.countryInput.setValue(country);
        await this.continueButton.click();
    }
}

export default new myDemoAppCheckoutPage(); 