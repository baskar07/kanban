import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from './userService';

const initialState = {
    user: [],
    isLoading:false,
    isSuccess:false,
    isError:false,
};

export const createUser = createAsyncThunk(
    "user/createUser",
    async(user,thunkAPI)=>{
        try {
            return await authService.createUser(user);
        } catch (error) {
            const message = (error && error.data && error.data.message)  || error.message || error.toString(); 
            return thunkAPI.rejectWithValue(message)
        }
    }
);

export const signup = createAsyncThunk(
    "auth/signup",
    async({email,token,name,password}, thunkAPI)=>{
        try {
            return await authService.signup({email,token,name,password});
        } catch (error) {
            const message = (error && error.data && error.data.message)  || error.message || error.toString(); 
            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createUser.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(createUser.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.user = action.payload;
        })
        .addCase(createUser.rejected, (state, action)=>{
            state.isError = true;
            state.isSuccess = false;
            state.isLoading = false;
            state.user = action.payload;
        })
        .addCase(signup.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(signup.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.user = action.payload;
        })
        .addCase(signup.rejected, (state, action)=>{
            state.isError = true;
            state.isSuccess = false;
            state.isLoading = false;
            state.user = action.payload;
        })
    }
})

export default userSlice.reducer;