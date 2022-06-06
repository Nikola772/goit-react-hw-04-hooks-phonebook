import styles from './ContactsList.module.css'

const ContactsList = ({contacts,  onDeleteContacts}) => (

<ul className={styles.ul__list}>{contacts.map(({contact, name, number, id}) => (
    <li key={id} className={styles.contacts__item}>
        <p>{name}: {number}</p>
        <button onClick={() => onDeleteContacts(id)}>Видалити</button>
    </li>
))}
</ul>
);

export default ContactsList;