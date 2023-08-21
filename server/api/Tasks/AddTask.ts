import taskmodel from "../../models/taskmodel";
export default defineEventHandler(async (event)=>{
    try {
            let body = await readBody(event)
            let Tasks = await taskmodel.create(body);
            return {data:"success"};
    } catch (error) {
        console.log(error)
    }
})
