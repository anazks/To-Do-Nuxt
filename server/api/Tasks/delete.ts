import taskmodel from '../../models/taskmodel';

export default defineCachedFunction(async (event)=>{
    const body = await readBody(event)
    const { taskId } = body;
    console.log(taskId)
    try {
        let Tasks = await taskmodel.findByIdAndDelete({_id:taskId})
        console.log("deleted")
       return true;
    } catch (error) {
      return false;
    }
})

