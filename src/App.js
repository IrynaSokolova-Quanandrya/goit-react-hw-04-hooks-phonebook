import { useEffect, useState} from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
const INITIAL_CONTACTS_LIST = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]
function Phonebook() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? INITIAL_CONTACTS_LIST);
  const [filter, setFilter] = useState('');

  useEffect(() => {localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])
  
  const addSubmitData = ({ name, number }) => {
    const friendName = name;
    console.log(contacts);
    console.log(friendName);
    if (contacts.some(({ name }) => name === friendName)) {
      alert(`${name} is already in contact`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(contact);
    setContacts((prev) => 
      [...prev, contact]
    );
  };
  
  const changeFilter = (e) => {
    setFilter(e.target.value );
  };
  
  const getFilterSearch = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  const deleteContact = (nameId) => {
    setContacts((prev) => (prev.filter((contact) => contact.id !== nameId)
    ));
  };
  // const filterSearch = this.getFilterSearch();
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={addSubmitData} />
      <h2 className="title">Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getFilterSearch()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   componentDidMount(prevProps, prevState) {
//     const contacts = localStorage.getItem('contacts')
//     const parseContacts = JSON.parse(contacts)

//     this.setState({contacts: parseContacts})
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//     }
//   }

  // addSubmitData = ({ name, number }) => {
  //   const friendName = name;
  //   if (this.state.contacts.some(({ name }) => name === friendName)) {
  //     alert(`${name} is already in contact`);
  //     return;
  //   }
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   this.setState(({ contacts }) => {
  //     return { contacts: [...contacts, contact] };
  //   });
  // };
  // changeFilter = (e) => {
  //   console.log(e);
  //   this.setState({ filter: e.target.value });
  // };
  // getFilterSearch = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  // deleteContact = (nameId) => {
  //   console.log(nameId);
  //   this.setState((prev) => ({
  //     contacts: prev.contacts.filter((contact) => contact.id !== nameId),
  //   }));
  // };

//   render() {
//     const { filter } = this.state;
//     const filterSearch = this.getFilterSearch();
    // return (
    //   <div>
    //     <h1 className="title">Phonebook</h1>
    //     <ContactForm onSubmit={this.addSubmitData} />
    //     <h2 className="title">Contacts</h2>
    //     <Filter value={filter} onChange={this.changeFilter} />
    //     <ContactList
    //       contacts={filterSearch}
    //       onDeleteContact={this.deleteContact}
    //     />
    //   </div>
    // );
//   }
// }

export default Phonebook;
