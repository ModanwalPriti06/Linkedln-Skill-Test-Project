const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

exports.register = async ({ username, password, role }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword, role });
  await user.save();
  const token = generateToken(user);
  return { token, user };
};

exports.login = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = generateToken(user);
  return { token, user };
};
