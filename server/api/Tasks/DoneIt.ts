import taskmodel from "../../models/taskmodel";

export default defineEventHandler(async(event)=>{
    let body = await readBody(event)
    let {taskId}  = body;
    try {
        let Data =  await taskmodel.findByIdAndUpdate({_id:taskId},{status:true})
        return true;
    } catch (error) {
        return false;
    }
})