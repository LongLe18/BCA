import {createAsyncThunk} from '@reduxjs/toolkit';
import contactApi from 'api/contact';

export const getMe = createAsyncThunk(
    'contact/postContactRequest',
    async (data) => {
        try {
            const res = await contactApi.post(data);
            return res.data;
        } catch (error) {
            console.log(error);
            return null
        }
    }
)
