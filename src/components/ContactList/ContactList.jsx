import { useDispatch, useSelector } from "react-redux";

// import { selectContacts} from "redux/selectors";
import { selectContacts, selectFilter } from "components/redux/selectors";

import css from './ContactList.module.css'
import { deleteContact } from "components/redux/operations";



export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter= useSelector(selectFilter)

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );


 

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id))


  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li className={css.listItem} key={contact.id}> {contact.name} {contact.phone}
         <button className = {css.button} type="button" onClick={()=> handleDelete(contact.id)}> Delete </button>
        </li>
      ))}
    </ul>
  );
};


