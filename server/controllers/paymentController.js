// @ts-nocheck
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res, next) => {
    try {
        const { amount, token } = req.body;
        const charge = await stripe.charges.create({
            amount: amount * 100,
            currency: 'usd',
            source: token.id,
        });
        res.send({ message: 'Payment successful', charge });
    } catch (error) {
        next(error);
    }
};
