const Customer = require('./customer.model');

const { signToken } = require('../../auth/auth.service');

async function getAllCustomers() {
  return await Customer.find();
}

async function getFindCustomers(query) {
  return await Customer.findOne(query);
}

async function getCustomerById(id) {
  return await Customer.findById(id);
}

async function createCustomer(customer) {
  return await Customer.create(customer);
}

async function updateCustomer(id, customer) {
  return await Customer.findByIdAndUpdate(id, customer, { new: true });
}

async function deleteCustomer(id) {
  return await Customer.findByIdAndDelete(id);
}

async function getTotalCustomers(query) {
  return await Customer.find(query).countDocuments();
}

async function loginAccount(username, password) {
  const customer = await Customer.findOne({ username });

  if (!customer) {
    throw new Error('Customer not found');
  }

  const isMatch = await customer.comparePassword(password);

  if (!isMatch) {
    throw new Error('Invalid password');
  }

  const token = signToken(customer.username);

  return {
    token,
    customer,
  }
}

module.exports = {
  getAllCustomers,
  getFindCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getTotalCustomers,
  loginAccount,
}
