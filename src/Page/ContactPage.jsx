import React from 'react';
import Contact from '../components/Contact/Contact';
import Recipes2 from '../components/Recipes2/Recipes2';
import ContactForm from '../components/ContactForm/ContactForm';

const ContactPage = () => {
    return (
        <div>
            <ContactForm></ContactForm>
            <Contact></Contact>
            <Recipes2></Recipes2>
        </div>
    );
};

export default ContactPage;