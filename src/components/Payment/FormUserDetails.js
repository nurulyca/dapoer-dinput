import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
          <MuiThemeProvider>
            <>
              <Dialog
                open
                fullWidth
                maxWidth='sm'
              >
                <AppBar title="Enter User Details" />
                <TextField
                  placeholder="Enter Your First Name"
                  label="First Name"
                  onChange={handleChange('firstName')}
                  defaultValue={values.firstName}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter Your Last Name"
                  label="Last Name"
                  onChange={handleChange('lastName')}
                  defaultValue={values.lastName}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter Your Handphone Number"
                  label="Handphone"
                  onChange={handleChange('handphone')}
                  defaultValue={values.handphone}
                  margin="normal"
                  fullWidth
                />
                <br />
                <Button
                  color="default"
                  variant="contained"
                  onClick={this.continue}
                >Continue</Button>
              </Dialog>
            </>
          </MuiThemeProvider>
        );
      }
    }
    
export default FormUserDetails;