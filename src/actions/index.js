export const addTodo = (data,userId) =>
{
    return {
        type : "ADD_TODO",
        payload : {
            data : data,
            userId:userId,
        }
    }
}


export const deleteTodo = (id) =>
{
    return {
        type: "DELETE_TODO",
        id
    }
}
