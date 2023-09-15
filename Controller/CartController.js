// const Cart = require('../Schema/CartSchema');
// const Product = require('../Schema/ProductSchema');
// const User = require('../Schema/UserSchema');

// const addProductToCart = async (req, res) => {
//   const { userId,sub_long_id, quantity } = req.body;

//   try {
//     // Check if the user and product exist
//     const userExists = await User.findById(userId);
//     const productExists = await Product.findById(sub_long_id);

//     if (!userExists || !productExists) {
//       return res.status(404).json({ message: 'User or product not found' });
//     }

//     // Find the user's cart
//     let cart = await Cart.findOne({ user: userId });

//     // If the cart doesn't exist, create a new one
//     if (!cart) {
//       cart = new Cart({ user: userId });
//     }

//     // Check if the product is already in the cart
//     const productIndex = cart.products.findIndex(
//       (item) => item.product.toString() ===sub_long_id
//     );

//     // If the product is already in the cart, update the quantity
//     if (productIndex !== -1) {
//       cart.products[productIndex].quantity += quantity;
//     } else {
//       // If the product is not in the cart, add it
//       cart.products.push({ product:sub_long_id, quantity });
//     }

//     // Save the updated cart
//     await cart.save();

//     res.status(200).json({ message: 'Product added to cart successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'An error occurred', error });
//   }
// };

const removeProductFromCart =  async (req, res) => {
  const { userId, sub_long_id } = req.body;

  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      // Cart not found, handle accordingly (e.g., return an error response)
      return res.status(404).json({ message: 'Cart not found' });
    }

    const productIndex = cart.products.findIndex(
      (product) => product.product.toString() === sub_long_id
    );

    if (productIndex !== -1) {
      // Product found in the cart, remove it from the products array
      cart.products.splice(productIndex, 1);
    } else {
      // Product not found in the cart, handle accordingly (e.g., return an error response)
      return res.status(404).json({ message: 'Product not found in the cart' });
    }

    await cart.save();
    res.status(200).json({ success: true, message: 'Product removed from cart successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'An error occurred', error });
  }
};

// const deleteCart = async (req, res) => {
//   const { userId } = req.body;

//   try {
//     // Find and delete the user's cart
//     await Cart.findOneAndDelete({ user: userId });

//     res.status(200).json({ message: 'Cart deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'An error occurred', error });
//   }
// };






  


// cartController.js

const Cart = require('../Schema/CartSchema');
const Product = require('../Schema/ProductSchema');

// Add cart data


// const addCartData = async (req, res) => {
//   const { userId, sub_long_id, quantity } = req.body;

//   try {
//     const cart = await Cart.findOne({ user: userId });

//     if (cart) {
//       // Check if the product already exists in the cart
//       const existingProductIndex = cart.products.findIndex(
//         (product) => product.product.toString() === sub_long_id
//       );

//       if (existingProductIndex !== -1) {
//         // If the product exists, update its quantity
//         cart.products[existingProductIndex].quantity += quantity;
//       } else {
//         // If the product doesn't exist, add it to the cart
//         cart.products.push({ product: sub_long_id, quantity });
//       }

//       cart.totalPrice += quantity; // Update the total price

//       await cart.save();
//       res.status(200).json({ message:"successfully add data in cart" });
//     } else {
//       // If the cart doesn't exist, create a new cart and add the product
//       const newCart = new Cart({
//         user: userId,
//         products: [{ product: sub_long_id, quantity }],
//         totalPrice: quantity,
//       });

//       await newCart.save();
//       res.status(200).json({ message:"cart add successfully" });
//     }
//   } catch (error) {
//     res.status(500).json({ message:"err for add cart data" });
//   }
// };

const addCartData = async (req, res) => {
  const { userId, sub_long_id, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (cart) {
      // Check if the product already exists in the cart
      const existingProductIndex = cart.products.findIndex(
        (product) => product.product.toString() === sub_long_id
      );

      if (existingProductIndex !== -1) {
        // If the product exists, update its quantity
        cart.totalPrice -= cart.products[existingProductIndex].quantity; // Deduct old quantity from total price
        cart.totalPrice += quantity; // Add new quantity to total price

        cart.products[existingProductIndex].quantity = quantity;
      } else {
        // If the product doesn't exist, add it to the cart
        cart.products.push({ product: sub_long_id, quantity });
        cart.totalPrice += quantity; // Add new product's quantity to total price
      }

      await cart.save();
      res.status(200).json({ message: "Successfully updated cart" });
    } else {
      // If the cart doesn't exist, create a new cart and add the product
      const newCart = new Cart({
        user: userId,
        products: [{ product: sub_long_id, quantity }],
        totalPrice: quantity,
      });

      await newCart.save();
      res.status(200).json({ message: "Cart created successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error adding cart data" });
  }
};









// Remove product from cart
// const removeProductFromCart = async (req, res) => {
//   const { userId, sub_long_id } = req.body;

//   try {
//     const userCart = await Cart.findOne({ user: userId });

//     if (!userCart) {
//       return res.status(404).json({ message: 'User cart not found' });
//     }

//     // Remove the product from the cart
//     userCart.products = userCart.products.filter(
//       (product) => product.toString() !== sub_long_id
//     );

//     await userCart.save();

//     res.status(200).json({ message: 'Product removed from cart successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'An error occurred', error });
//   }
// };



// Update quantity of product in cart
const updateProductQuantityInCart = async (req, res) => {
  const { userId, sub_long_id, newQuantity } = req.body;

  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const productIndex = cart.products.findIndex(
      (product) => product.product.toString() === sub_long_id
    );

    if (productIndex !== -1) {
      // Product found in the cart, update the quantity
      const oldQuantity = cart.products[productIndex].quantity;
      cart.products[productIndex].quantity = newQuantity;

      // Update total price based on the difference in quantities
      // const priceDifference = (newQuantity - oldQuantity) * cart.products[productIndex].product.product_price;
      // cart.totalPrice += priceDifference;
    } else {
      return res.status(404).json({ message: 'Product not found in the cart' });
    }

    await cart.save();
    res.status(200).json({ message: 'Product quantity updated successfully', updatedCart: cart });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};



// Delete cart data
const deleteCartData = async (req, res) => {
  const { userId } = req.body;

  try {
    await Cart.deleteOne({ user: userId });

    res.status(200).json({ message: 'Cart data deleted successfully', });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};

// Find cart data by user ID
const findCartDataByUser = async (req, res) => {
  const { userId } = req.body;

  try {
    const userCart = await Cart.findOne({ user: userId }).populate('products.product');

    if (!userCart) {
      return res.status(404).json({ message: 'User cart not found' });
    }

    // let totalPrice = 0;
    // let totalProducts = 0;

    // for (const product of userCart.products) {
    //   const { product: { product_price }, quantity } = product;
    //   totalPrice += product_price * quantity;
    //   totalProducts += quantity;
    // }

    // userCart.totalPrice = totalPrice;
    await userCart.save();

    res.status(200).json({  products: userCart.products.map((p)=>{
      return p.product
    }) })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};

const findwebCartDataByUser = async (req, res) => {
  const { userId } = req.body;

  try {
    const userCart = await Cart.findOne({ user: userId }).populate('products.product');

    if (!userCart) {
      return res.status(404).json({ message: 'User cart not found' });
    }

    // let totalPrice = 0;
    // let totalProducts = 0;

    // for (const product of userCart.products) {
    //   const { product: { product_price }, quantity } = product;
    //   totalPrice += product_price * quantity;
    //   totalProducts += quantity;
    // }

    // userCart.totalPrice = totalPrice;
    await userCart.save();

    res.status(200).json({  products: userCart.products })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};


// Calculate total price of products in cart and update the cart
// const calculateAndUpdateTotalPrice = async (req, res) => {
//   const { userId } = req.body;

//   try {
//     const userCart = await Cart.findOne({ user: userId }).populate('products');

//     if (!userCart) {
//       return res.status(404).json({ message: 'User cart not found' });
//     }

//     let totalPrice = 0;

//     for (const product of userCart.products) {
//       const { product_price } = await Product.findById(product);
//       totalPrice += product_price;
//     }

//     userCart.totalPrice = totalPrice;
//     await userCart.save();

//     res.status(200).json({ message: 'Total price calculated and updated in cart successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'An error occurred', error });
//   }
// };

// const calculateAndUpdateTotalPrice = async (req, res) => {
//   const { userId } = req.body;

//   try {
//     const userCart = await Cart.findOne({ user: userId }).populate('products');

//     if (!userCart) {
//       return res.status(404).json({ message: 'User cart not found' });
//     }

//     let totalPrice = 0;

//     for (const product of userCart.products) {
//       const { product_price, product_qty} = await Product.findById(product);
//       const productTotalPrice = product_price * product_qty; // Calculate the total price of the product by multiplying price and quantity
//       totalPrice += productTotalPrice;
//     }

//     userCart.totalPrice = totalPrice;
//     await userCart.save();

//     res.status(200).json({ message: 'Total price calculated and updated in cart successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'An error occurred', error });
//   }
// };

const calculateAndUpdateTotalPrice = async (req, res) => {
  const { userId } = req.body;

  try {
    const userCart = await Cart.findOne({ userId }).populate('products');

    if (!userCart) {
      return res.status(404).json({ message: 'User cart not found' });
    }

    let totalPrice = 0;
    let totalProducts = 0;

    for (const product of userCart.products) {
      const { product_price, product_qty } = product;
      totalPrice += product_price * product_qty;
      totalProducts += product_qty;
    }

    userCart.totalPrice = totalPrice;
    await userCart.save();

    res.status(200).json({ totalProducts, totalPrice,  userCart });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
};



const findllcrt=(re,res)=>{
    Cart.find().populate("user").populate("products.product").exec((err,data)=>{
        if(err){
            res.status(400).json({
                message:"err for faching cart data"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(500).json({
                    message:"err for finding cart data"
                })
            }
            else{
                res.status(200).json({
                    message:"successfully finding cart data",
                    Cart_data:data
                })
            }
        }
    })
}
module.exports = {
  addCartData,
  removeProductFromCart,
  updateProductQuantityInCart,
  deleteCartData,
  findCartDataByUser,
  findwebCartDataByUser,
  calculateAndUpdateTotalPrice,
  findllcrt
};
