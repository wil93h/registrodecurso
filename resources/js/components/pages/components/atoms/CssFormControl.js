import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const primaryColor = '#7c8492'

const CssFormControl1 = withStyles({
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
      '& .MuiSvgIcon-root': {
        color:primaryColor 
      }
    },
    
})(FormControl);


export const CssFormControl = ({id , name, value  , label  , handle , map ,min = '100px' , max = '250px', helper,disabled}) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: min,
      maxWidth: max
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    // selected: {
    //   '&.Mui-selected': {
    //       backgroundColor: "turquoise",
    //       color: '#406d96',
    //       fontWeight: 600
    //   },
      // }
  }));
 const classes = useStyles();
    return (
            <CssFormControl1 variant="outlined" className={classes.formControl}>
              <InputLabel id={id+'-label'}>{ label }</InputLabel>
                <Select 
                  labelId={id+'-label'}
                  id={id}
                  name={ name }
                  value={ value }
                  onChange={ handle }
                  label={ label }
                  disabled = {disabled}
                  // helperText ={helper}
                >
                <MenuItem value="">
                    <em>Ninguno</em>
                </MenuItem>
                    {map.map((data,index) => {
                        if ( index => 0){ return(
                          <MenuItem className={classes.selected} key = {data.id} value={data.id}>{data.name}</MenuItem>
                        )}
                    })}
                </Select>
                <FormHelperText style={{ color: primaryColor }} >{helper}</FormHelperText>
            </CssFormControl1>
    )
}
