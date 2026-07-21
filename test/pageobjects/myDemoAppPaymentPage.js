class myDemoAppPaymentPage {
    get fullNameInput() {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]')//This getter stores and returns the locator for the Full Name input field.
    }

    get cardNumberInput() {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/cardNumberET"]')
    }

    get expirationDateInput() {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/expirationDateET"]')
    }

    get cvvInput() {
        return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/securityCodeET"]')
    }

    get payNowButton() {
        return $('//android.widget.Button[@content-desc="Saves payment info and launches screen to review checkout data"]')
    }

    async enterPaymentDetails(fullName, cardNumber, expirationDate, cvv) { //
        await this.fullNameInput.setValue(fullName);
        await this.cardNumberInput.setValue(cardNumber);
        await this.expirationDateInput.setValue(expirationDate);
        await this.cvvInput.setValue(cvv);
        await this.payNowButton.click();
    }
}

export default new myDemoAppPaymentPage();