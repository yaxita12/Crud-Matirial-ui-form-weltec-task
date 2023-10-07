import React from 'react';
   import Contact1Form from './Contact1Form';
   import ContactTable from './ContactTable';

   const App = () => {
     const [contacts, setContacts] = React.useState([]);

     const addContact = (contact) => {
       setContacts((data) => [...DataTransferItem, contact]);
     };

     const deleteContact = (id) => {
       setContacts((data) => data.filter((_, index) => index + 1 !== id));
     };

     return (
       <div>
         <h1>Contact List</h1>
         <Contact1Form onSubmit={addContact} />
         <ContactTable contacts={contacts} onDelete={deleteContact} />
       </div>
     );
   };

   export default App