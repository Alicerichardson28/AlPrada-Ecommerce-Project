import React, { useState } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';

import useStyles from './styles'

const steps = ['Shipping address', 'Payment details']

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();
    return (
        <>
         <div className={classes.toolbar} />
         <main className={classes.layout}>
             <Typography variant="h4" align="center">Checkout</Typography>
             <Stepper activeStep={activeStep} className={classes.stepper}>
                 {steps.map((step)=> (
                     <Step key={step}>
                         <StepLabel>{step}</StepLabel>
                     </Step>
                 ))}
             </Stepper>
         </main>
        </>
    )
}

export default Checkout
