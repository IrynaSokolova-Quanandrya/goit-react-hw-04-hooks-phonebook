import  React from "react";
import "../styles/button.css";
import "../styles/contactList.css";

export default function ContactList({ contacts, onDeleteContact }) {
  return (
      <ul className="contact__list">
        {contacts.map(({ id, name, number }) => (
          <li className="contact__item" key={id}>
            {name}: {number}
            <button
              type="button"
              className="btn"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
}
