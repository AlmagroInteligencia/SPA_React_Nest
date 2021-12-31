import { Schema } from "mongoose"

export const TaskSchema = new Schema({
   name: String, 
   body: String 
})