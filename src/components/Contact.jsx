import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const TableData = (props) => {

    const handleDelete=(id) => {
        props.handleDelete(id);
    }
    return (
        <>
            <TableRow>
                <TableCell><Avatar src={props.value.av}  > {props.value.name[0]}</Avatar></TableCell>
                <TableCell> {props.value.name}</TableCell>
                <TableCell>{props.value.number}</TableCell>
                <TableCell>{props.value.email}</TableCell>
                <TableCell>{props.value.address}</TableCell>
                <TableCell><Button size='small'onClick={()=> handleDelete(props.id)} color='error' variant='text'><DeleteOutlineIcon />
                </Button></TableCell>
            </TableRow>
        </>
    )
}

const Contact = (props) => {
    const handleDelete=(id) => {
        props.handleDelete(id);
    }
    return (
        <TableContainer maxWidth sx={{ maxHeight: 620 }}>


            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Action</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Contact</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        (props.searchData.length > 0)?
                     props.searchData.map((value, key) => <TableData key={key} value={value} handleDelete={((id)=>handleDelete(id))}/>):
                      props.contactData.map((value, key) => <TableData key={key} value={value} handleDelete={((id)=>handleDelete(id))}/>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Contact;