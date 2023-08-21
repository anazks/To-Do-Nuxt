import mongoose from "mongoose"
const Task = new mongoose.Schema({
    task: {
        type: String,
        required: [true, 'Why no task?']
    },
    date: {
        type: String,
        required: [true, 'Why no date?']
    },
    status: {
        type: Boolean,
        default:false
    },
})

export default mongoose.model("Task", Task)
// module.exports = mongoose.model("Task", Task);