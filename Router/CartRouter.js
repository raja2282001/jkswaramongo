// const express = require('express');
// const router = express.Router();
// const cartController = require('../Controller/CartController');

// router.post('/add', cartController.addProductToCart);
// router.post('/remove', cartController.removeProductFromCart);
// router.post('/delete', cartController.deleteCart);
// router.get("/find",cartController.getallcart)
// router.delete("/delete/:id",cartController.deletecatrs)
// router.post("/ser",cartController.getUserCart)

// module.exports = router;



// cartRouter.js

const express = require('express');
const router = express.Router();
const cartController = require('../Controller/CartController');

// Add cart data
router.post('/add', cartController.addCartData);

// Remove product from cart
// router.delete('/cart/remove', cartController.removeProductFromCart);
router.post('/remove', cartController.removeProductFromCart);

// Update quantity of product in cart
router.post('/update', cartController.updateProductQuantityInCart);

// Delete cart data
router.delete('/cart/delete', cartController.deleteCartData);

// Find cart data by user ID
router.post('/cart', cartController.findCartDataByUser);

// Find webcart data by user ID
router.post('/webcart', cartController.findwebCartDataByUser);

// Calculate total price of products in cart and update the cart
router.put('/cart/calculate-total-price', cartController.calculateAndUpdateTotalPrice);

// Find cart data by user ID
router.get("/find",cartController.findllcrt)


module.exports = router;
