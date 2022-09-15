const {
  getAllCustomers,
  getTotalCustomers,
  createCustomer,
  loginAccount,
} = require('./customer.service')

async function allCustomersHandler(parent, args, ctx) {
  const customers = await getAllCustomers()
  return customers;
}

async function totalCustomersHandler() {
  const customers = await getTotalCustomers()
  return customers;
}

async function createAccountHandler(parent, args) {
  const { username, name, password } = args.input

  const customer = await createCustomer({
    username,
    name,
    password,
  })

  return customer
}

async function loginHandler(parent, args) {
  const { username, password } = args

  const loginPayload = await loginAccount(username, password)

  return loginPayload
}

module.exports = {
  query: {
    allCustomers: allCustomersHandler,
    totalCustomers: totalCustomersHandler,
  },

  mutation: {
    createAccount: createAccountHandler,
    login: loginHandler,
  }
}
