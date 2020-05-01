import React from 'react';
import styled from 'styled-components';

const contactPic = require('../pics/kontakta-yogasyster-matilda.jpg');

const StyleContactPicText = styled.div`
  img {
    height: auto;
    width: 100%;
    display: flex;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-family: Zeyada;
    font-size: 2em;
    display: flex;
    align-self: center;
    color: #84142d;
    margin-top: 2%;
    margin-bottom: 0%;
  }

  h2,
  h3 {
    color: #8d6262;
    display: flex;
    /* opacity: 80%; */
    margin: 5px;
    font-family: 'arial';
    font-size: 0.9em;
    font-weight: lighter;
    /* line-height: 150%; */
  }

  h3 {
    margin-top: 2%;
    font-weight: bold;
    font-family: 'Bellota';
    /* color: #84142d; */
    color: #4d4545;
  }
`;

const ContactText = () => {
  return (
    <StyleContactPicText>
      <div className='container'>
        <img
          src={contactPic}
          alt='Yogasyster Matilda vilar på klipporna i Lysekil'
        />
        <section className='contact-container'>
          <h1>Kontakta Yogasyster</h1>
          <h2>Mejl: matildaeden@gmail.com</h2>
          <h2>Telefon: 0704-809205</h2>
          {/* <h3>Skicka ett meddelande till mig:</h3> */}
        </section>
      </div>
    </StyleContactPicText>
  );
};

export default ContactText;
