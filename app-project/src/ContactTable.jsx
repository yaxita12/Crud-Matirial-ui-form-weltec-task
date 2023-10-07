import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

const ContactTable = ({ contacts, onDelete }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Contact Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'type', headerName: 'Contact Type', width: 150 },
    { field: 'number', headerName: 'Contact Number', width: 180 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={() => onDelete(params.id)}>
          <Delete />
        </IconButton>
      ),
    },
  ];

  const rows = contacts.map((contact, index) => ({
    id: index + 1,
    name: contact.name,
    email: contact.email,
    type: contact.type,
    number: contact.number,
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default ContactTable;
