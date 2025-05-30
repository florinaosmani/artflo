import classes from '../resources/css/form.module.css';

import { LanguageContext } from '../pages/Root';
import { useContext } from 'react';

function Form ({ onClose, showForm }) {
    const lang = useContext(LanguageContext);

    return (
        <>
        <div className={showForm ? classes.form : `${classes.form} ${classes.hidden}`}>	
            <button 
            className={classes.closeButton}
            onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <h3>
                {lang? 'Make an offer' : 'Mach ein Angebot'}
            </h3>
            <form>
        
            </form>
        </div>
        </>
    )
}

export default Form;