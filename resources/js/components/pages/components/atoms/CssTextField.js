import React from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles,makeStyles } from '@material-ui/core/styles';

const primaryColor = '#7c8492'
const CssTextField1 = withStyles({
    root: {
      '& label': {
        color: primaryColor
      },
      '& label.Mui-focused': {
        color: primaryColor,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: primaryColor,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: primaryColor,
        },
        '&:hover fieldset': {
          borderColor: primaryColor,
        },
        '&.Mui-focused fieldset': {
          borderColor: primaryColor,
        },
      },
      '& .MuiInputBase-root': {
        color:primaryColor 
      },
      "& .MuiFormHelperText-root" :{
        color: primaryColor,
      },
    },
  
  })(TextField);

  
  export const CssTextField = ({id , name, value , label  , type  , min, max, handle, helper, disabled   }) => {
    const useStyles = makeStyles((theme) => ({
      formControl: {
        margin: theme.spacing(1),
        minWidth: min,
        maxWidth: max,
      },
    }));
    const classes = useStyles();

    return (
             <CssTextField1
                id={id}
                name={name}
                value={value}
                label={label}
                variant="outlined"
                type={type}
                className={classes.formControl }
                onChange = {handle}
                helperText = {helper}
                disabled = {disabled}
                /> 
    )
}
