import styles from "./contactList.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/operations";
import React, { useEffect } from "react";
import { getfilteredContactsSelector } from "../../redux/contacts-selectors";

// const mapStateToProps = (state) => ({
//   filteredContactsProp: getfilteredContactsSelector(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchContacts: () => dispatch(fetchContacts()),
//   deleteContactProp: (id) => dispatch(deleteContact(id)),
// });

export default function ContactList() {
  const dispatch = useDispatch();
  // componentDidMount() {
  //   this.props.fetchContacts();
  // }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = (id) => dispatch(deleteContact(id));

  const filteredContactsProp = useSelector(getfilteredContactsSelector);

  return (
    <ol className={styles.contactsList}>
      {filteredContactsProp.map((contact) => (
        <li key={contact.id} className={styles.li}>
          {contact.name}: {contact.number}
          <button className={styles.button} type="button" onClick={onDelete}>
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}

ContactList.propTypes = {
  filteredContactsProp: PropTypes.array.isRequired,
  deleteContactProp: PropTypes.func.isRequired,
};

// import styles from "./contactList.module.css";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { deleteContact, fetchContacts } from "../../redux/operations";
// import React, { Component } from "react";
// import { getfilteredContactsSelector } from "../../redux/contacts-selectors";

// class ContactList extends Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   render() {
//     return (
//       <ol className={styles.contactsList}>
//         {this.props.filteredContactsProp.map((contact) => (
//           <li key={contact.id} className={styles.li}>
//             {contact.name}: {contact.number}
//             <button
//               className={styles.button}
//               type="button"
//               onClick={() => this.props.deleteContactProp(contact.id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ol>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   filteredContactsProp: getfilteredContactsSelector(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchContacts: () => dispatch(fetchContacts()),
//   deleteContactProp: (id) => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// ContactList.propTypes = {
//   filteredContactsProp: PropTypes.array.isRequired,
//   deleteContactProp: PropTypes.func.isRequired,
// };
