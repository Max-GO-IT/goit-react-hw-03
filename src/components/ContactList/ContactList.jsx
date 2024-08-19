import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
const ContactList =({listConts,delCell}) => {
    return(
    <ul className={css.contactList}>
        {listConts.map((listCont,index)=>(
        <li key={index} id={listCont.id} className={css.contactItem}>
            <Contact listCont={listCont} delCell={delCell}/>
        </li>
        ))}     
    </ul>
    )
}

export default ContactList;