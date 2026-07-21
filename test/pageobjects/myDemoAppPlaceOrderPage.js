class myDemoAppPlaceOrder { 
    get placeOrderButton() { 
        
        return $('//android.widget.Button[@content-desc="Completes the process of checkout"]') 
    }

    get validationMessage() {
        return $('id=com.saucelabs.mydemoapp.android:id/completeTV');
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }

    async validateCheckoutComplete() {
        await expect(this.validationMessage).toHaveText('Checkout Complete');
    }
}

export default new myDemoAppPlaceOrder();   
