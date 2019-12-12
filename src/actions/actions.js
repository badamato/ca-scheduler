//importing global variables from actions folder
//BETH NOTE:  WHY SEPARATE THIS OUT - WHY IMPORTED AND NOT DECLARED IN THIS FILE?

//actions are functions that return an object

import {
    TOGGLE_TEXT,
    SELECT_BOOKING,
    UPDATE_BOOKING,
    UPDATE_FORM
} from './actionTypes';

export const toggleText = () => ({
    type: TOGGLE_TEXT,
});

export const selectBooking = (bookingItem) => ({
    type: SELECT_BOOKING,
    payload: {
        time: bookingItem.time,
        name: bookingItem.name,
        phone: bookingItem.phone,
        available: bookingItem.available,
    }
});

//WHY BOOKING DATA OUTSIDE OF PAYLOAD?
export const updateBooking = (bookingData) => ({
    type: UPDATE_BOOKING,
    payload: {
        bookingData
    },
    bookingData
});

export const updateForm = (bookingItem) => ({
    type: UPDATE_FORM,
    payload: {
        time: bookingItem.time,
        name: bookingItem.name,
        phone: bookingItem.phone,
        available: bookingItem.available,
    }
});