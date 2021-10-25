import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleSubmit = (person) => {
    if (
      this.state.contacts.find(
        (contact) => contact.name.toLowerCase() === person.name.toLowerCase()
      )
    ) {
      alert(`${person.name} is already in contacts.`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        {
          id: uuidv4(),
          name: person.name,
          number: person.number,
        },
      ],
    }));
  };
  handleInputFilterContact = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter((cont) =>
      cont.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  deleteContact = (contactId) => {
    this.setState({
      contacts: this.state.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    });
  };
  componentDidMount() {
    console.log("rararad");
    const contacts = localStorage.getItem("contact"); // прочитати з localStorage поле 'contact' : "[{name:"AAA", phone:"123"},{name:"BBB", phone:"123"}]"
    const parsedContacts = JSON.parse(contacts); // перетворити рядок в масив
    if (parsedContacts) {
      console.log("set contacts");
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("mazefaca");
    if (this.state.contacts !== prevState.contacts) {
      console.log("obnovit");
      localStorage.setItem("contact", JSON.stringify(this.state.contacts));
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <Filter contact={this.handleInputFilterContact} />
        <ContactList
          contacts={this.filterContacts(this.state.contacts, this.state.filter)}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
