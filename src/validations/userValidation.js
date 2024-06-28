const Joi = require("joi");
const { objectId } = require("./customValidation");

const getUser = {
    params: Joi.object().keys({
      userId: Joi.string().custom(objectId),
    }),
  };
  const updateUser = {
    params: Joi.object().keys({
      userId: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
        name: Joi.string(),
        password: Joi.string(),
        email: Joi.string()
          .email({ tlds: { allow: false } }),
        city: Joi.string(),
        age: Joi.number(),
        zipCode: Joi.string()
          .length(6)
          .pattern(/^[0-9]+$/)
          
      })
  };

  const deleteUser = {
    params: Joi.object().keys({
      userId: Joi.string().custom(objectId),
    }),
  };

  module.exports = {
    getUser,
    updateUser,
    deleteUser
  };