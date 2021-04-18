import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const ManageServices = () => {
    const [services, setServices] = useState([]);
    // const id = books._id;
    // console.log(books);
  
    useEffect(() => {
      fetch('https://arcane-escarpment-26588.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
  

    const deleteProduct = (event, id) => {
    
        fetch(`https://arcane-escarpment-26588.herokuapp.com/delete/${id}`, {
          method: 'DELETE',
    
        })
          .then(res => res.json())
          .then(result => {
            if(result){
              event.target.parentNode.style.display="none"
            }
          })
      }
    
      // --------------------------------------------
      const classes = useStyles();

    return (
        <div className="row"> 
           <div className="col-md-4">
               <SideBar></SideBar>
           </div>
           <div className="col-md-8 mt-5">
               
           <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> <b>Service Name</b></TableCell>
              <TableCell align="right"> <b>Services Available</b></TableCell>
              <TableCell align="right"> <b>Price</b></TableCell>

              <TableCell align="right"><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.serviceName}
                </TableCell>
                <TableCell align="right">Yes</TableCell>
                <TableCell align="right">{row.price}</TableCell>

                <TableCell align="right"><Button onClick={(event) => deleteProduct(event, row._id)} variant="contained" color="secondary">Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

           </div>
        </div>
    );
};

export default ManageServices;