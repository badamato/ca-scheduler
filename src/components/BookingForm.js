import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



class BookingForm extends Component {
    render() {
        let time = this.props.selectedBooking.time ? this.props.selectedBooking.time : '';
        let name = this.props.selectedBooking.name ? this.props.selectedBooking.name : '';
        let phone = this.props.selectedBooking.phone ? this.props.selectedBooking.phone : '';
        let isEnabled = (name !== '' && phone !== '') || (name === '' && phone === '');

        return (
            <div>
                <Dialog
                    //OPEN COMES DOWN FROM DASHBOARD PARENT BUT WHY ISN'T CLOSE AS WELL?
                    open={this.props.open}
                    onClose={this.props.handleClose}
                >
                    <DialogTitle>Booking Information</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {time}
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            value={this.props.selectedBooking.name}
                            onChange={this.props.handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="phone"
                            label="Phone Number"
                            type="tel"
                            fullWidth
                            value={this.props.selectedBooking.phone}
                            onChange={this.props.handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="default">
                            Cancel
                    </Button>
                        <Button onClick={this.props.handleSave} color="default" disabled={!isEnabled}>
                                Save
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default BookingForm;