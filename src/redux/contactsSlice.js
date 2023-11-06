import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(newContact) {
                return {
                    payload: {
                        id: nanoid(),
                        name: newContact.name,
                        number: newContact.number,
                    }
                };
            },
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        },
    }
});

export const contactsReduser = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;