import taskmodel from "../../models/taskmodel";
export default defineEventHandler(async (event)=>{
    try {
            let Tasks = await taskmodel.find();
            return Tasks;
    } catch (error) {
        console.log(error)
    }
})
