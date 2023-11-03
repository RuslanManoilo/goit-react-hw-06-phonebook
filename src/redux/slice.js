import { nanoid } from "nanoid";


const initialState = {
    contacts: [],
    filter: ""
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "contacts/getContacts":
            return {
                ...state,
                contacts: action.payload,
            };
        case "contacts/addContact":
            const isExist = state.contacts.some(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase());

            if (isExist) {
                return alert(`${action.payload.name} is already in contacts.`);
            };

            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case "contacts/deleteContact":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
            };
        case "filter/currentValue":
            return {
                ...state,
                filter: action.payload,
            };
            
        default:
            return state;
    };
};


export const getContacts = storagedContacts => {
    return {
        type: "contacts/getContacts",
        payload: storagedContacts,
    };
};

export const addContact = newContact => {
    return {
        type: "contacts/addContact",
        payload: {
            id: nanoid(),
            name: newContact.name,
            number: newContact.number,
        },
    };
};

export const deleteContact = contactID => {
    return {
        type: "contacts/deleteContact",
        payload: contactID,
    };
};

export const currentValue = value => {
    return {
        type: "filter/currentValue",
        payload: value.toLowerCase(),
    };
};

