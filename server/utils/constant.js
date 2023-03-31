module.exports = {
  STRIPE_SECRET_KEY: 'your-stripe-secret-key',
  PAYPAL_CLIENT_ID: 'your-paypal-client-id',
  JWT_SECRET: 'your-jwt-secret',
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp'
}
