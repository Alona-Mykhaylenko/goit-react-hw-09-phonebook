import styles from "./contactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/operations";
import React, { useEffect } from "react";
import { getfilteredContactsSelector } from "../../redux/contacts-selectors";

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = (contactId) => dispatch(deleteContact(contactId));

  const filteredContactsProp = useSelector(getfilteredContactsSelector);

  return (
    <ol className={styles.contactsList}>
      {filteredContactsProp.map((contact) => (
        <li key={contact.id} className={styles.li}>
          {contact.name}: {contact.number}
          <button
            className={styles.button}
            type="button"
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}
