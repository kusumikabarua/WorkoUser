const Joi = require("joi");

/**
 * Check request *body* for fields (all are *required*)
 * - "email" : string and satisyfing email structure
 * - "password": string"
 * - "name": string
 */
const register = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    city: Joi.string(),
    age: Joi.number(),
    zipCode: Joi.string()
      .length(6)
      .pattern(/^[0-9]+$/)
      .required(),
  }),
};

/**
 * Check request *body* for fields (all are *required*)
 * - "email" : string and satisyfing email structure
 */
const login = {
  body: Joi.object().keys({
    password: Joi.string().required(),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
  }),
};

module.exports = {
  register,
  login,
};
