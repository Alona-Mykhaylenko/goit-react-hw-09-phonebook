import React, { useState } from "react";
import styles from "./contactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/operations";
import { getContactsSelector } from "../../redux/contacts-selectors";

const initialState = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const contacts = useSelector(getContactsSelector);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (contacts.find((contact) => contact.name === state.name)) {
      alert(`${state.name} is already in contacts`);
      return;
    }
    dispatch(addContact(state));

    setState(initialState);
  };

  return (
    <div className={styles.formBox}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={state.name}
            onChange={handleChange}
            className={styles.formInput}
          />
        </label>{" "}
        <label className={styles.label}>
          Number <br />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={state.number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.submitButton}>
          Add contact
        </button>
      </form>
    </div>
  );
}

// import React, { Component } from "react";
// import styles from "./contactForm.module.css";
// import { connect } from "react-redux";
// import { addContact } from "../../redux/operations";
// import { getContactsSelector } from "../../redux/contacts-selectors";

// class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     if (
//       this.props.contacts.find((contact) => contact.name === this.state.name)
//     ) {
//       alert(`${this.state.name} is already in contacts`);
//       return;
//     }

//     this.props.addContactProp(this.state.name, this.state.number);
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     return (
//       <div className={styles.formBox}>
//         <form onSubmit={this.handleSubmit}>
//           <label className={styles.label}>
//             Name <br />
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               required
//               value={this.state.name}
//               onChange={this.handleChange}
//               className={styles.formInput}
//             />
//           </label>{" "}
//           <label className={styles.label}>
//             Number <br />
//             <input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//               required
//               value={this.state.number}
//               onChange={this.handleChange}
//             />
//           </label>
//           <button type="submit" className={styles.submitButton}>
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   contacts: getContactsSelector(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   addContactProp: (name, number) => dispatch(addContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
