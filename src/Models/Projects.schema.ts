import { Schema, model, models } from "mongoose"

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: [true, 'Project name is required'],
  },

  projectDate: {
    type: String,
    required: [true, 'Project date is required'],
  },

  projectDescription: {
    type: String,
    required: [true, 'Project description is required'],
  },

  projectImage: {
    type: String,
    required: [true, 'Project image is required'],
  },

  projectLink: {
    type: String,
    required: [true, 'Project link is required'],
  },

}, { timestamps: true, versionKey: false })

export default models.Project || model('Project', projectSchema);