import React from 'react'
import { withStyles,makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const primaryColor = '#7c8492'
const CssTextField = withStyles({
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



export const CssDate = ({id , name, value , label, max, handle, helper }) => {

    const useStyles = makeStyles((theme) => ({
 
        textField: {
            margin: theme.spacing(1),
            // marginRight: theme.spacing(1),
            maxDate: new Date(),
            width: max,
        },
      }));
    const classes = useStyles();

  return (
    <>
        <CssTextField
            id={id}
            name={name}
            value={value}
            label={label}
            variant="outlined"
            type = "date"
            className={classes.textField}
            onChange = {handle}
            helperText = {helper}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </>
    )
}
