import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  class: String,
  subjects: [String],
  attendance: String,
  role: { type: String, enum: ['admin', 'employee'], default: 'employee' },
  email: String,
  password: String
});

export default mongoose.model('Employee', employeeSchema);
