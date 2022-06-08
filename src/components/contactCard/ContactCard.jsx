import './ContactCard.scss';
import { useState } from 'react';
import Star from '../star/Star';
import userProfileIcon from '../../assets/icons/user-profile-96x96_icon.png';

export default function ContactCard() {  
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    function toggleFavorite() {
        setContact(prevContactObject => {
            return {
                ...prevContactObject,
                isFavorite: !prevContactObject.isFavorite
            }
        })
    }

    return(
        <article className="contactCard">
            <img 
                alt="user profile icon"
                src={userProfileIcon} 
                className="contactCard__image contactCard__image--user" />
            <div className="contactCard__info">
                <Star isFavorite={contact.isFavorite} handleClick={toggleFavorite}/>
                <h2 className="contactCard__name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="contactCard__contact contactCard__contact--email">{contact.email}</p>
                <p className="contactCard__contact contactCard__contact--phone">{contact.phone}</p>
            </div>
        </article>
    )
}