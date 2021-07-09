import Order from '../models/orderModel.js';
import asyncHandler from 'express-async-handler';

//create new order
//route: POST /api/orders
// private route
const addOrderItems = asyncHandler(async (req, res) => {
    const {orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice} = req.body;
    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error('no order items');
    }
    else{
        const order = new Order({
            user: req.user._id,
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
});
export {addOrderItems};