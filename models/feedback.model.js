import mongoose from "mongoose";

const Schema = mongoose.Schema;
const feedbackSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  schedule: {
    type: Schema.Types.ObjectId,
    ref: 'Schedule',
    required: true,
  },
}, {
  timestamps: true,
})

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
