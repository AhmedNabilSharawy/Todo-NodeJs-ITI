const Joi = require('joi');

const signUpSchema = Joi.object({
    name: Joi.string().required().messages({"any.required":"Please Enter your Name"}),
    password: Joi.string().required().messages({"any.required":"Please Enter your password"}),
    confirmPassword: Joi.ref('password'),
    phone: Joi.number().required().messages({"any.required":"You must Enter your phone number"}),
    email: Joi.string().email().required().lowercase().messages({"any.required":"You must Enter your email"})
})

// Joi.any().valid(Joi.ref('password')).required()

module.exports = {signUpSchema}




