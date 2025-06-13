import classes from '../resources/css/form.module.css';

import { LanguageContext } from '../pages/Root';
import { useContext, useState } from 'react';

function Form ({ onClose, showForm, error, submit, setSubmit, setError }) {
    const lang = useContext(LanguageContext);
    /* form data */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    /* encode and handlesubmit according to netlify forms documentation */

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = event => {
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                'form-name': 'contactArt',
                'name': name,
                'email' : email,
                'message': message
            })
        }).then(() => setSubmit(true))
        .catch(() => setError(true));

        event.preventDefault();
    }

    /* annoying new line with enter in the textarea ugh */
    const handleKeyDown = event => {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    }

    if (error) {
        return (
            <div className={showForm ? classes.form : `${classes.form} ${classes.hidden}`}>
                <button 
                className={classes.closeButton}
                onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <p>
                    There's been an error. Try closing and opening the form again!
                </p>
            </div>
        )
    } else if (!submit) {
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
                method='post'
                onSubmit={handleSubmit}>
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
                    <div>
                        <label htmlFor='message'>
                            {lang ? 'Message:' : 'Nachricht:x'}
                        </label>
                        <textarea
                        name='message'
                        id='message'
                        value={message}
                        maxLength='2000'
                        onChange={e => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}>
                        </textarea>
                    </div>
                    <button type='submit'>
                        {lang? 'Send Message': 'Nachricht senden'}
                    </button>
                </form>
            </div>
        )
    } else {
        return (
            <div className={showForm ? classes.form : `${classes.form} ${classes.hidden}`}>
                <button 
                className={classes.closeButton}
                onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <p>Thank you for your message!
                    <br/> I will get back to you shortly!
                </p>
            </div>
        )
    }
}

export default Form;