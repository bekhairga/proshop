import Order from '../models/orderModel.js';
import asyncHandler from 'express-async-handler';

//create new order
//route: POST /api/orders
// private route
const addOrderItems = asyncHandler(async (req, res) => {
    const {orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice} = req.body;
    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('no order items');
    } else {
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

//get order by id, private route

const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if (order) {
        res.json(order);
    } else {
        res.status(404);
        throw new Error("Order not found");
    }
})
export {addOrderItems, getOrderById};
