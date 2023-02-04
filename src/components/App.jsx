import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from 'nanoid'
import Form from "./ContactForm/Form";
import Filter from "./Filter";

export class App extends Component{
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
}

  addContact = (name, number) => {
    const contact = {
      id: nanoid(10),
      name,
      number,
    }
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts]
    }))
  }

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value, })
    
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id!==contactId)
    }))
  }

  render() {
    const visibleContacts = this.getVisibleContacts()
    return (
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm  /> */}
        <Form onSubmit={ this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChangeFilter={ this.changeFilter} />
        <ContactList contacts={visibleContacts} OnDeleteContact={this.deleteContact} />
    </div>
    )
      
    }
}


