const Employee = require('../models/Employee');

exports.getAll = async ({ filter = '', page = 1, limit = 10, sort = 'name' }) => {
  const query = filter ? { name: { $regex: filter, $options: 'i' } } : {};
  return Employee.find(query)
    .sort({ [sort]: 1 })
    .skip((page - 1) * limit)
    .limit(limit);
};

exports.getById = async ({ id }) => {
  return Employee.findById(id);
};

exports.add = async (args, req) => {
  if (req.user?.role !== 'admin') throw new Error('Unauthorized');
  const emp = new Employee(args);
  return await emp.save();
};

exports.update = async ({ id, ...updates }, req) => {
  if (req.user?.role !== 'admin') throw new Error('Unauthorized');
  return await Employee.findByIdAndUpdate(id, updates, { new: true });
};
