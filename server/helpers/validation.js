const Joi = require('@hapi/joi');

/**
 * Checks that minimum requirements are met upon validation:
 * - email
 * - password
 * - employeeId
 */
module.exports.signupValidation = data => {
  const schema = {
    email: Joi
      .string()
      .email()
      .required(),
    password: Joi
      .string()
      .min(6)
      .required(),
    employeeId: Joi
      .string()
      .min(4)
      .max(4)
  };
  return Joi.validate(data, schema);
}