import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


const UserServicesList = () => {
    const [services, setServices] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    

    useEffect(() => {
        fetch('https://arcane-escarpment-26588.herokuapp.com/userServices?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const classes = useStyles();
    return (
        <div className="row">
            <div className="col-md-4">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8 mt-5">
                <h3 className="mb-5 text-center">Your Services Details</h3>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell> <b>Services Name</b></TableCell>
                                <TableCell align="right"><b>Amount</b></TableCell>
                                <TableCell align="right"><b>Payment Status</b></TableCell>
                                <TableCell align="right"><b>Status</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {services.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.serviceName}
                                    </TableCell>
                                    
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">Paid</TableCell>
                                    <TableCell align="right">Pending</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    );
};

export default UserServicesList;