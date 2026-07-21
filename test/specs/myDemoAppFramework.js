import myDemoAppCheckoutPage from "../pageobjects/myDemoAppCheckoutPage";
import myDemoAppPaymentPage from "../pageobjects/myDemoAppPaymentPage";
import myDemoAppLoginPage from "../pageobjects/myDemoAppLoginPage";
import myDemoAppProductPage from "../pageobjects/myDemoAppProductPage";
import myDemoAppPlaceOrderPage from "../pageobjects/myDemoAppPlaceOrderPage";
import checkoutData from "../../testDataDemoApp/checkout.json";
describe(' MyDemo App - Checkout Flow', () => {
    it('should login, add product to cart, and complete checkout', async () => {

        await myDemoAppProductPage.addProductToCartAndCheckout();
        await myDemoAppLoginPage.login(checkoutData.login.username, checkoutData.login.password);
        await myDemoAppCheckoutPage.enterCheckoutDetails(checkoutData.checkout.fullName, checkoutData.checkout.address, checkoutData.checkout.city, checkoutData.checkout.state, checkoutData.checkout.postalCode, checkoutData.checkout.country);
       await myDemoAppPaymentPage.enterPaymentDetails(checkoutData.payment.fullName, checkoutData.payment.cardNumber, checkoutData.payment.expirationDate, checkoutData.payment.cvv);
        await myDemoAppPlaceOrderPage.placeOrder();

        await myDemoAppPlaceOrderPage.validateCheckoutComplete();

    
    });
});