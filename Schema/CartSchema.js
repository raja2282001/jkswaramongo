// const mongoose = require('mongoose');

// const cartSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'users',
//     required: true,
//   },
//   products: [
//      {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Product',
//         required: true,
//       },
//   ],
// });

// const Cart = mongoose.model('Cart', cartSchema);

// module.exports = Cart;




// cartSchema.js

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: String,
        default: 1,
      },
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
});


module.exports = mongoose.model('Cart', cartSchema);

