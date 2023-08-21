import taskmodel from "../../models/taskmodel";
export default defineEventHandler(async (event)=>{
      const query = getQuery(event)
      console.log(query.id)
      let {id} =query
    try {
        let Data =  await taskmodel.findOne({_id:id})
        return Data
     } catch (error) {
       console.log(error)
         return false
     }

})