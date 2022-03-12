import { db } from '../config/firebase';

const initialData = {
    list : []
}


const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { data,userId } = action.payload;

            db.collection('todos').add({
                        todo:data,
                        userId:userId,
                        time: new Date()
                        })
            return state

        case "DELETE_TODO":
            db.collection('todos').doc(action.id).delete()
            return state

        default:
            return state;
    }

}

export default todoReducers;