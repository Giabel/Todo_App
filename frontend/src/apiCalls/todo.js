import axios from "axios";

export const getTodos = async () => {
    try{
        const res = await axios.get("/api/todos");
        return res;
    }catch(err){
        return err;
    }
};

export const CreateTodo = async (todo) => {
    try{
        const res = await axios.post("/api/todos/creat", todo);
    }catch (err){
        return err;
    }
};

export const getTodo = async (todo) => {
    try{
        const res = await axios.get(`/api/todos/${id}`);
    }catch (err){
        return err;
    }
};


export const updateTodo = async (id, todo) => {
    try{
        const res = await axios.put(`/api/todos/updates/${id}`, todo);
    }catch (err){
        return err;
    }
};

export const deleteTodo = async (todo) => {
    try{
        const res = await axios.delete(`/api/todos/delete/${id}`);
    }catch (err){
        return err;
    }
};