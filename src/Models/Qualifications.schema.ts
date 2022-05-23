import { Schema, model, models } from 'mongoose';

const qualificationSchema = new Schema({
  img: {
    type: String,
    required: [true, 'Image is required'],
    trim: true,
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  }
}, { timestamps: true, versionKey: false });

export default models.Qualification || model('Qualification', qualificationSchema);