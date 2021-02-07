import React, { useState } from "react";
import "./contact.sass";
import { Element } from "react-scroll";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        setLoading(true);

        fetch("https://portfolio-backend-contact.herokuapp.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status === "Message sent.") {
                    setMessageSent(true);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setLoading(false);
                    setError(false);
                } else if (res.status === "Message could not be sent.") {
                    setLoading(false);
                    setError(true);
                    setMessageSent(false);
                }
            });
    };

    const enabled = name.length > 0 && email.length > 0 && message.length > 0;

    return (
        <Element name="contact">
            <div className="contact-container">
                <h1 className="contact-title">Get in touch</h1>
                <div className="contact-box">
                    <div className="contact-left">
                        <p className="contact-description">
                            Let's work together! If you have an idea or would
                            like to know more, feel free to contact me at{" "}
                            <a
                                className="contact-email"
                                href="mailto:dmihalovits@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                dmihalovits@gmail.com
                            </a>
                            .
                        </p>
                    </div>
                    <div className="contact-right">
                        <form
                            className="contact-form"
                            onSubmit={sendEmail}
                            noValidate
                        >
                            <label
                                className="contact-form-label"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="contact-input"
                            />

                            <label
                                className="contact-form-label"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="contact-input"
                            />
                            <label
                                className="contact-form-label"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="contact-input contact-textarea"
                            />
                            <button
                                type="submit"
                                disabled={!enabled || loading}
                                className="contact-button"
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                            {error && (
                                <p className="contact-message-status">
                                    Message could not be sent.
                                </p>
                            )}
                            {messageSent && (
                                <p className="contact-message-status">
                                    Message sent!
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Contact;
