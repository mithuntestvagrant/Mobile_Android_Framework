class myDemoAppProductPage {
    get productTitle() {
        return $('//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]/android.view.ViewGroup[1]/android.widget.ImageView[@content-desc="Product Image"]')
    }
    get addToCartButton() {
        return $('~Tap to add product to cart')
    }
    get cartIcon() {
        return $('//android.widget.ImageView[@content-desc="Displays number of items in your cart"]')
    }
    get checkoutButton() {
        return $('~Confirms products for checkout')
    }

    async addProductToCartAndCheckout() {
        await this.productTitle.click();
        await this.addToCartButton.click();
        await this.cartIcon.click();
        await this.checkoutButton.click();
    }
}

export default new myDemoAppProductPage();