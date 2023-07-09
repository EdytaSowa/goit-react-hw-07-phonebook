import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64a937668b9afaf4844a6a0f.mockapi.io";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
      console.log(response.data)
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  );


  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (text, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", text );
        console.log(response.data)
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        console.log(response.data)
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  );