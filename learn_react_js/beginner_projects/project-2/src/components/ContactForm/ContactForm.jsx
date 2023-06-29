import Button from '../Button/Button.jsx'
import styles from './Contact.module.css'
import { MdMessage } from 'react-icons/md'
import { MdCall } from 'react-icons/md'
import { HiMail } from 'react-icons/hi'
import { useState } from "react";





const ContactForm = () => {

	const [name, setName] = useState("Amit");
	const [email, setEmail] = useState("support@dosomecoding.com");
	const [text, setText] = useState("follow me on linkedin");


	const onSubmit = (event) => {
		event.preventDefault();

		setName(event.target[0].value);
		setEmail(event.target[1].value);
		setText(event.target[2].value);
	}

	const onViaCallSubmit = () => {
		console.log("I am from call")
	}


	return (
		<section className={styles.container}>
			<div className={styles.contact_form}>
				<div className={styles.top_btn}>
					<Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
					<Button onClick={onViaCallSubmit} text="VIA CALL" icon={<MdCall fontSize="24px" />} />
				</div>
				<Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail />} />

				<form onSubmit={onSubmit}>
					<div className={styles.form_controller}>
						<label htmlFor="name">Name</label>
						<input type="text" name='name' />
					</div>
					<div className={styles.form_controller}>
						<label htmlFor="email">E-mail</label>
						<input type="email" name='email' />
					</div>
					<div className={styles.form_controller}>
						<label htmlFor="text">Text</label>
						<textarea name="text" id="" cols="30" rows="6"></textarea>
					</div>
					<div style={{ display: "flex", justifyContent: "end" }}><Button text="SUBMIT" /></div>
					<div>{name + " " + email + " " + text}</div>
				</form>
			</div>
			<div className={styles.contact_image}>
				<img src="/images/contact.svg" alt="contact-image" />
			</div>
		</section>
	)
}

export default ContactForm