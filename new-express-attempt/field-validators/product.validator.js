const { body, validationResult } = require('express-validator')
const productValidationRules = () => {
  return [
    body('title')
    .isLength({ min: 5 })
    .withMessage('length must be more than 5'),
    body('description')
    .isString()
    .withMessage('Type must be string')
    .isLength({min: 5})
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  productValidationRules,
  validate,
}