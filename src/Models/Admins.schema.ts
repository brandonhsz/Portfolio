import { Schema, model, models } from "mongoose"

const AdminsSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [50, "Name must be less than 50 characters long"]
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    maxlength: [16, "Password must be less than 16 characters long"]
  },
})

export default models.Admin || model("Admin", AdminsSchema)
