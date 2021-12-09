import PropTypes from "prop-types";
import styles from "./ContactListStyles.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.contacts}>
    {contacts.map((contact) => (
      <li className={styles.list} key={contact.id}>
        {contact.name} : {contact.number}
        {
          <button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
            className={styles.listBtn}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
