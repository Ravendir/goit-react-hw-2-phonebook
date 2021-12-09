import { Component } from "react";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import shortid from "shortid";
import styles from "../components/AppStyles.module.css";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (task) => {
    const contactId = shortid.generate();
    const identicalName = this.state.contacts
      .map((cont) => cont.name)
      .includes(task.name);

    if (identicalName) {
      alert(`${task.name} is already in contacts`);
    } else if (!task.name.length) {
      alert("Fields must be filled!");
    } else {
      const contact = {
        ...task,
        id: contactId,
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.filterContacts();
    return (
      <>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={styles.contactForm}>Contacts</h2>
        {filterContacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        {filterContacts.length ? (
          <ContactList
            contacts={filterContacts}
            onRemoveContact={this.removeContact}
          />
        ) : (
          <p className={styles.contactForm}>
            Your phonebook is empty. Please add contact.
          </p>
        )}
      </>
    );
  }
}
