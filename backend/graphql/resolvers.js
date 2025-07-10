import Employee from '../models/Employee.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createToken = (employee) =>
  jwt.sign({ id: employee._id, role: employee.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

export const root = {
  employees: async ({ page = 1, limit = 10, sortBy = 'name' }) => {
    const skip = (page - 1) * limit;
    return await Employee.find().sort(sortBy).skip(skip).limit(limit);
  },
  employee: async ({ id }) => await Employee.findById(id),

  register: async ({ input }) => {
    const existing = await Employee.findOne({ email: input.email });
    if (existing) throw new Error('Email already exists');

    input.password = await bcrypt.hash(input.password, 10);
    const emp = await Employee.create(input);
    const token = createToken(emp);
    return { token, employee: emp };
  },

  login: async ({ email, password }) => {
    const emp = await Employee.findOne({ email });
    if (!emp) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, emp.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = createToken(emp);
    return { token, employee: emp };
  },

  addEmployee: async ({ input }, context) => {
    if (context.role !== 'admin') throw new Error('Unauthorized');
    return await Employee.create(input);
  },

  updateEmployee: async ({ id, input }, context) => {
    if (context.role !== 'admin') throw new Error('Unauthorized');
    return await Employee.findByIdAndUpdate(id, input, { new: true });
  },

  deleteEmployee: async ({ id }, context) => {
    if (context.role !== 'admin') throw new Error('Unauthorized');
    await Employee.findByIdAndDelete(id);
    return "Deleted successfully";
  },
};
