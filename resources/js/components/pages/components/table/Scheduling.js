import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const deleteColor = '#e2474b';
const useStyles = makeStyles ((theme) =>({
    table: {
        minWidth: 500,
    },
    container: {
        maxHeight: 245,
    },
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export const Scheduling = ({ values, handle, handleEdit }) => {
    const classes = useStyles();   

    return (
        <>   
        <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                    <TableCell align="left">DIA</TableCell>
                    <TableCell align="left">INICIO</TableCell>
                    <TableCell align="left">FIN</TableCell>
                    <TableCell align="center">ACCIONES</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {values.map((value,index) => {
                if (index => 0) {    return(             
                                    <TableRow key={value.id}>
                                    <TableCell component="th" scope="row">{value.horasEvento}</TableCell>
                                    <TableCell align="left">{value.fechaHoraInicio}</TableCell>
                                    <TableCell align="left">{value.fechaHoraFin}</TableCell>
                                    <TableCell align="center">
                                        <IconButton  onClick={() => handleEdit(value.id)}>
                                            <EditIcon  style={{ color: '#a8d0da' }}/>
                                        </IconButton>
                                        <IconButton  onClick={() => handle(value.id)}>
                                            <DeleteForeverIcon  style={{ color: deleteColor }}/>
                                        </IconButton>
                                    </TableCell>
                                    </TableRow>
                                        )
                                } 
                            }
                            )
            }
            </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}
