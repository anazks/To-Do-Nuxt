import taskmodel from '../../models/taskmodel';


export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { taskId } = body;

    // Convert the taskId string to an ObjectId if needed
    const data = await taskmodel.findOne({ _id: taskId });
    if (!data) {
      return ({ success: false });
    }

    const { task, date } = data;
    const newObject = {
      task,
      date
    };

    const duplicate = await taskmodel.create(newObject);
    
    return ({ success: true });
  } catch (error) {
    console.error(error);
    return ({ success: false });
  }
});
