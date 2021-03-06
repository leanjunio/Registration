const Joi = require('@hapi/joi');
exports = module.exports = {};
/**
 * Checks that minimum requirements are met upon validation:
 * - email
 * - password
 * - employeeId
 */
exports.signupValidation = (data) => {
  const schema = Joi.object({
    email: Joi
      .string()
      .email()
      .required(),
    password: Joi
      .string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};