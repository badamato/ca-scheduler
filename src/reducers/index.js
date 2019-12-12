//importing global variables from actions folder
import {
    TOGGLE_TEXT,
    SELECT_BOOKING,
    UPDATE_BOOKING,
    UPDATE_FORM
} from '../actions/actionTypes';


export default function rootReducer(state = getInitialState(), action) {
    switch (action.type) {
        //SWITCHING TEXT
        case TOGGLE_TEXT:
            let newState = {
                ...state,
                open: !state.open
            }
            localStorage.setItem('data', JSON.stringify(newState));
            return newState

        case SELECT_BOOKING:
            //SELECTING A TIME SLOT
            return {
                ...state,
                selectedBooking: action.payload
            }
        case UPDATE_FORM:
            //GETTING THE RIGHT TIME SLOT TO UPDATE
            return {
                ...state,
                selectedBooking: action.payload
            };

        case UPDATE_BOOKING:
            //UPDATE THE BOOKING DATA ARRAY
            return {
                ...state,
                bookingData: action.payload.bookingData
            }

        default:
            return state;
    }
}

//IS THIS FOR WHEN WE RESET THE COMPONENT BACK TO INITIAL STATE?
//EACH SESSION WILL REVIEW THE DATA ALREADY IN LOCAL STORAGE AND
//POPULATE THE SCHEDULE BASED ON WHAT IS ALREADY TAKEN
const getInitialState = () => {
    let localData = JSON.parse(localStorage.getItem('data'));
    if (localData) {
        return localData
    } else {
        return initialState
    }
}

const initialState = {
    bookingData: [{
        time: "9:00am-10:00am",
        name: '',
        phone: '',
        available: true
    },
    {
        time: "10:00am-11:00am",
        name: '',
        phone: '',
        available: true
    },
    {
        time: "11:00am-12:00pm",
        name: '',
        phone: '',
        available: true
    },
    {
        time: "12:00pm-1:00pm",
        name: '',
        phone: '',
        available: true
    },
    {
        time: "1:00pm-2:00pm",
        name: '',
        phone: '',
        available: true
    },
    {
        time: "2:00pm-3:00pm",
        name: '',
        phone: '',
        available: true
    },
    {
        time: "3:00pm-4:00pm",
        name: '',
        phone: '',
        available: true
    },
    {
        time: "4:00pm-5:00pm",
        name: '',
        phone: '',
        available: true
    },
    ],
    open: false,
    selectedBooking: {
        time: '',
        name: '',
        phone: '',
        available: true
    }
};