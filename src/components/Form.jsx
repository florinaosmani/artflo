import classes from '../resources/css/form.module.css';

import { LanguageContext } from '../pages/Root';
import { useContext, useState } from 'react';

function Form ({ onClose, showForm }) {
    const lang = useContext(LanguageContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className={showForm ? classes.form : `${classes.form} ${classes.hidden}`}>	
            <button 
            className={classes.closeButton}
            onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <h3>
                {lang? 'Buy this painting' : 'Kaufe dieses Gemälde'}
            </h3>
            <form
            name='contactArt'
            method='post'>
                <input
                type='hidden'
                name='form-name'
                value='contactArt' />
                <div>
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder = {lang? 'Your name' : 'Dein Name'}
                    required />
                </div>
                <div>
                    <label htmlFor='email'>
                        {lang? 'Email:' : 'E-Mail:'}
                    </label>
                    <input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder = {lang? 'Your email' : 'Deine E-Mail'}
                    required
                    />
                </div>
                <button type='submit'>
                    {lang? 'Send Message': 'Nachricht senden'}
                </button>
            </form>
        </div>
    )
}

export default Form;