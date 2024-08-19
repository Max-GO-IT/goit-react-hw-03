import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import css from './Contact.module.css';

const Contact = ({listCont,delCell})=> {
    
const clickBut = (evt) => {
evt.preventDefault();
delCell(listCont.id);
};
        
 return(
<div>
        {/* <div>
            <FaUser />
            <p>{listCont.name}</p>
        </div>
        

        <div><BsFillTelephoneFill />
        <p>{listCont.number}</p>
        </div>
        
        <div>
        <button onClick = {clickBut} >Delete</button>
        </div> */}
<div className={css.contactContainer}>
      <div className={css.contactInfo}>
        <div className={css.contactItem}>
          <FaUser className={css.icon} />
          <p className={css.contactName}>{listCont.name}</p>
        </div>
        <div className={css.contactItem}>
          <BsFillTelephoneFill className={css.icon} />
          <p className={css.contactNumber}>{listCont.number}</p>
        </div>
      </div>
      <button className={css.deleteButton} onClick={clickBut}>
        Delete
      </button>
    </div>
    </div>
 )
}

export default Contact;