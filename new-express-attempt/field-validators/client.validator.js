const { body, validationResult } = require('express-validator')
const clientValidationRules = () => {
  return [
    body('firstName')
    .isLength({ min: 5 })
    .withMessage('Length must be more than 5')
    .isString()
    .withMessage('First name mjust be a string'),
    body('secondName')
    .isLength({ min: 5 })
    .withMessage('Length must be more than 5')
    .isString()
    .withMessage('Second name mjust be a string'),
    body('email')
    .isEmail()
    .withMessage('Client must provide a valid email')
    .isLength({min: 10})
    .withMessage('Client email must be at least 10 symbols in length'),
    body('address')
    .not()
    .isEmpty()
    .withMessage('Must provide address to ship')
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
  clientValidationRules,
  validate,
}