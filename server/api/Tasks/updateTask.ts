import taskmodel from "../../models/taskmodel";

export default defineEventHandler(async (event)=>{
    let body = await readBody(event)
    let {newTask} =body;
  let {id} =body;
    try {
        let Data =  await taskmodel.findByIdAndUpdate({_id:id},{task:newTask})
        return true;
    } catch (error) {
        console.log(error)
       return false
    }
})


