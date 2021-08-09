import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import ButtonOrder from './ButtonOrder';


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const data = JSON.parse(localStorage.getItem('customer'));
    const { firstName, lastName, handphone, address, city, province } = data;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank you for your order</h1>
            <p>You will get total and shipping cost after this!</p>
            <ButtonOrder firstName={firstName} lastName={lastName} handphone={handphone} address={address} city={city} province={province}>Checkout</ButtonOrder>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;