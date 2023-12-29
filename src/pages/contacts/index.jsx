import React, { useState } from 'react';

import { Button, Typography } from '../../shared/ui';
import styles from './styles.scss';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        company: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const isEmailValid = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(formData.email);
    };

    const isFullNameValid = (fullName) => {
        const nameParts = fullName.split(' ');
        return nameParts.length === 2 && nameParts.every(part => part.length > 0 && !/\d/.test(part));
    };

    const updateErrors = (name, errorMessage) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));
    };

    const validateAndSetError = (fieldName, validationFunction, errorMessage) => {
        const isValid = validationFunction(formData[fieldName]);
        updateErrors(fieldName, isValid ? '' : errorMessage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        validateAndSetError('email', isEmailValid, 'The email must be a valid email address.');
        validateAndSetError('name', isFullNameValid, 'Invalid full name. Please provide both first name and last name without numbers.');
    };

    return (
        <div className={styles.wrapper}>
            <Typography title="Get in touch" />
            <Typography
                title="If you are interested in knowing more about my experience, please complete the form below, and I will be in touch shortly."
                className={styles.text}
            />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        <Typography title="Full Name" className={styles.text} />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name*"
                            value={formData.name}
                            onChange={handleChange}
                            aria-describedby="name-error"
                            className={errors.email && styles['input-error']}
                        />
                    </label>
                    {errors.name && (
                        <Typography title={errors.name} tag="span" className={styles['text-error']} />
                    )}
                </div>
                <label htmlFor="company">
                    <Typography title="Company" className={styles.text} />
                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </label>
                <div>
                    <label htmlFor="email">
                        <Typography title="Email" className={styles.text} />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={handleChange}
                            aria-describedby="email-error"
                            className={errors.email && styles['input-error']}
                        />
                    </label>
                    {errors.email && (
                        <Typography title={errors.email} tag="span" className={styles['text-error']} />
                    )}
                </div>
                <label htmlFor="message">
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </label>
                <Button type="submit" title="Submit" />
            </form>
        </div>
    );
};

export default Contacts;
