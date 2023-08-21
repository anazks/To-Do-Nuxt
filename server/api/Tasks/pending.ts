import taskmodel from '../../models/taskmodel';

export default defineCachedFunction(async (event)=>{
    const body = await readBody(event)
    const { value } = body;
    console.log(value)
    try {
        let Data =  await taskmodel.find({status:value})
        return Data;
     } catch (error) {
       console.log(error)
       return false;
     }
})