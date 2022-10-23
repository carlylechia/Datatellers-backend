import mongoose from 'mongoose';

const { Schema } = mongoose;
const scheduleSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Patient name must be provided.'],
    maxlength: [30, 'Patient name can not exceed 30 characters.'],
  },
  SN: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

scheduleSchema.virtual('feedback', {
  ref: 'Feedback',
  localField: '_id',
  foreignField: 'schedule',
});

scheduleSchema.set('toObject', { virtuals: true });
scheduleSchema.set('toJSON', { virtuals: true });

const Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule;
