//React-Redux imports
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//styling imports
import List from '@material-ui/core/List';
import '../styles/styles.css';

//helper-file imports
import BookingItem from './BookingItem';
import BookingForm from './BookingForm';

//action imports
import * as Actions from '../actions/actions';


class Dashboard extends Component {

    _openModalForm = (bookingItem) => {
        this.props.action.toggleText();
        this.props.action.selectBooking(bookingItem);
    }
    _closeModalForm = () => {
        this.props.action.toggleText();
    }

    _handleChange = (e) => {
        e.preventDefault();
        let newSelectedBooking = {
            ...this.props.selectedBooking,
            [e.target.id]: e.target.value
        } 
        this.props.action.updateForm(newSelectedBooking);
    }

    _handleSave = () => {
        let updatedBooking;

        //conditionally render a selected booking to be colored red
        if (this.props.selectedBooking.name !== '' || 
        this.props.selectedBooking.phone !== '') {
            updatedBooking = {
                ...this.props.selectedBooking,
                available: false
            };
        } else {
            updatedBooking = {
                ...this.props.selectedBooking,
                available: true
            };
        }

        //find the selected booking and replace it in the initial booking array
        //NOTE:  received help from another dev/friend
        let newBookingDataArray = this.props.bookingData.map(booking => {
            if (booking.time === this.props.selectedBooking.time) {
                return updatedBooking;
            } else {
                return booking;
            }
        });

        this.props.action.updateBooking(newBookingDataArray);
        this.props.action.toggleText();
    }

    render() {
        let bookingsArray = this.props.bookingData.map(bookingItem => {
            return (
                <div key={bookingItem.time} onClick={() => this._openModalForm(bookingItem)}>
                    <BookingItem
                        time={bookingItem.time}
                        name={bookingItem.name}
                        phone={bookingItem.phone}
                        available={bookingItem.available}
                    />
                </div>
            )
        });

        return (
            <div className='dashboard'>
                <List component='div'>
                    {bookingsArray}
                </List>
                <BookingForm
                    open={this.props.open}
                    handleClose={this._closeModalForm}
                    selectedBooking={this.props.selectedBooking}
                    handleChange={this._handleChange}
                    handleSave={this._handleSave}
                >
                </BookingForm>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    bookingData: state.bookingData,
    open: state.open,
    selectedBooking: state.selectedBooking
});

const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(Actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);