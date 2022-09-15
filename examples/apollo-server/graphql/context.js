const { validateJwt } = require('../auth/auth.service')
const { getFindCustomers } = require('./customer/customer.service')

async function context({ req }) {
  let token = null
  let currentUser = null

  if (req.headers?.authorization) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (token) {
    const payload = await validateJwt(token)
    const customer = await getFindCustomers({ username: payload.id })
    currentUser = customer
  }

  return  {
    currentUser
  }
}

module.exports = context
