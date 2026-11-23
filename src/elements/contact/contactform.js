import React, { useState } from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";

const ContactForm = ({url}) => {
    const { register, handleSubmit, errors, reset } = useForm({
		mode: "onBlur"
	})
    const [serverState, setServerState] = useState({
		submitting: false,
		status: null
    });
    
	const [value, setValue] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
    });
    
    const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg }
		});
		if (ok) {
			reset();
			setValue({
				name: '',
				email: '',
				subject: '',
				message: ''
			})
		}
    };
    

    const onSubmit = (data, e) => {
		const form = e.target;
		if (serverState.submitting) return;
		if (!url) {
			handleServerResponse(false, "The contact form is unavailable. Please use the email link below.", form);
			return;
		}
		setServerState({ submitting: true, status: null });
		axios({
			method: "post",
			url: url,
			data,
            headers: { Accept: "application/json" },
            timeout: 15000
		})
			.then(res => {
				handleServerResponse(true, "Thank you! Your message has been submitted. I’ll get back to you soon.", form);
			})
			.catch(err => {
				handleServerResponse(false, "Your message could not be sent. Please try again or use the email link below. Your message is still in the form.", form);
			});
	}

    const isErrors = Object.keys(errors).length !== 0 && true;
	const onChangeHandler = e => {
		setValue({ ...value, [e.target.name]: e.target.value })
	}

    return ( 
        <form onSubmit={handleSubmit(onSubmit)} aria-busy={serverState.submitting}>
            <div className={`form-group ${(isErrors && errors.name) ? 'has-error' : ''} ${value.name ? 'has-value' : ''}`}>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    onChange={onChangeHandler}
                    ref={register({
                        required: 'Full Name Required',
                    })}
                />
                <label htmlFor="name">Full Name</label>
                {errors.name && <span className="error">{errors.name.message}</span>}
            </div>

            <div className={`form-group ${(isErrors && errors.email) ? 'has-error' : ''} ${value.email ? 'has-value' : ''}`}>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChangeHandler}
                    ref={register({
                        required: 'Email Required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                <label htmlFor="email">Enter Your Email</label>
                {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className={`form-group ${(isErrors && errors.subject) ? 'has-error' : ''} ${value.subject ? 'has-value' : ''}`}>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    onChange={onChangeHandler}
                    ref={register({
                        required: 'Subject Required',
                    })}
                /> 
                <label htmlFor="subject">Subject</label> 
                {errors.subject && <span className="error">{errors.subject.message}</span>}
            </div>

            <div className={`form-group ${(isErrors && errors.message) ? 'has-error' : ''} ${value.message ? 'has-value' : ''}`}>
                <textarea
                    name="message"
                    id="message"
                    onChange={onChangeHandler}
                    ref={register({
                        required: 'Message Required',
                        minLength: { value: 10, message: "Minimum length is 10" }
                    })}
                >
                </textarea>
                <label htmlFor="message">Write your message here.</label> 
                {errors.message && <span className="error">{errors.message.message}</span>}
            </div>

            <div className="form-submit">
                <button className="rn-button" type="submit" disabled={serverState.submitting}>
                    {serverState.submitting ? "Sending…" : "Send Message"}
                </button>
                {serverState.status && (
                    <p role="status" aria-live="polite" className={`form-output ${!serverState.status.ok ? "error" : "success"}`}>
                        {serverState.status.msg}
                    </p>
                )}
                <p className="form-output">
                    Prefer email, or having trouble?{' '}
                    <a href="mailto:aylabasha@gmail.com">aylabasha@gmail.com</a>
                </p>
            </div>
        </form> 
    )
}

export default ContactForm;
