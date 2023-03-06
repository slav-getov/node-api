const { body, validationResult } = require('express-validator')
const userValidationRules = () => {
  return [
    body('fullName')
    .isLength({ min: 10 })
    .withMessage('Length must be more than 5')
    .isString()
    .withMessage('Full Name must be of type string'),
    body('email')
    .isEmail()
    .withMessage('Must be a valid email'),
    body('role')
    .isIn(['ADMIN', 'WRITE', 'READ'])
    .withMessage('Only three roles in uppercase are permitted - ADMIN, WRITE, READ')
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
  userValidationRules,
  validate,
}