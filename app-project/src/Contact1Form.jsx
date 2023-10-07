import React from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

const Contact1Form = ({ onSubmit }) => {
  const [contact, setContact] = React.useState({
    name: '',
    email: '',
    type: 'Home',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
    setContact({ name: '', email: '', type: 'Home', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Contact Name"
        value={contact.name}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="email"
        label="Email ID"
        value={contact.email}
        onChange={handleChange}
        fullWidth
        required
      />
      <FormControl fullWidth>
        <InputLabel>Contact Type</InputLabel>
        <Select name="type" value={contact.type} onChange={handleChange}>
          <MenuItem value="Home">Home</MenuItem>
          <MenuItem value="CellNumber">Cell Number</MenuItem>
          <MenuItem value="OfficeNumber">Office Number</MenuItem>
          <MenuItem value="ContactNumber">Contact Number</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="number"
        label="Contact Number"
        value={contact.number}
        onChange={handleChange}
        fullWidth
        required
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" type="submit">
          Add Contact
        </Button>
      </Box>
    </form>
  );
};
  export default Contact1Form;