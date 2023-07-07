import React from 'react'
import { useEffect, useState } from "react"
import { getUsers } from "../../../api/loginrequests"
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Users = () => {


  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
  }, [])
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUsers(localStorage.getItem('token')).then((res) => {
        setUsers(res.users);
        console.log(res.users)
      });
    }
  }, [])
  return (

    <>
      {/* <ul>
      {users && users.map((user) => {
        return <li key={user._id}>{user.username}{user.name}</li>
      })}
    </ul> */}
    
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">Age</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, idx) => (
                  <TableRow
                    key={user.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {idx}
                    </TableCell  >
                    <TableCell align="right">{user.name}</TableCell>
                    <TableCell align="right">{user.username}</TableCell>
                    <TableCell align="right">{user.age}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    

    </>

  )
}


export default Users