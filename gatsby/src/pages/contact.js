import React, { useState } from 'react';
import SEO from '../components/SEO';
import OrderStyles from '../styles/OrderStyles';
import useForm from '../utils/useForm';

export default function ContactPage() {
  // const [name, setName] = useState('');
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  return (
    <>
      <SEO title="Contact Anthony" />
      <OrderStyles>
        <h2>Contact AG Law</h2>
        <fieldset>
          <legend>Your Info</legend>

          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={updateValue}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={updateValue}
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={values.phone}
            onChange={updateValue}
          />

          <label htmlFor="message">Tell Us What Happened</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="8"
            value={values.message}
            onChange={updateValue}
          />
        </fieldset>
      </OrderStyles>
    </>
  );
}
