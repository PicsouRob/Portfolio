import React from 'react';
import { ContactContainer, ContactWrapper, ContactHeader, ContactImage } from './ContactStyle';
import '../../Styles/form.css';
import image from '../../assets/contactimage.png';
import { useWidth, HeaderDescription } from '../../Styles/GlobalStyleWrapper';

function Contact() {
    const { width } =  useWidth();

    return (
        <ContactWrapper id="contact">
            <ContactHeader width={width}>
                <HeaderDescription header="Inquiry" width={width}
                    bottom="Contact Me" isRight={false}
                ></HeaderDescription>
            </ContactHeader>
            <ContactContainer width={width}>
                <div style={{ display: "flex", 
                        justifyContent: "space-between", 
                        width: "100%",
                    }}>
                    <div>
                            <form style={{  }}>
                                <label className="label" for="mail">Enter your mail</label>
                                <input placeholder="Enter your mail" type="text" />

                                <label className="label" for="message">Enter your message</label>
                                <input type="texterea" placeholder="Enter your message" />

                                <input type='submit' value="Send" />
                            </form>
                    </div>
                    {width >= 992 && (
                        <ContactImage>
                            <img src={image} alt="contact"/>
                        </ContactImage>
                    )}
                </div>
            </ContactContainer>
        </ContactWrapper>
    )
}

export default Contact;