import './ContactCard.scss';
import { useState } from 'react';
import userProfileIcon from '../../assets/icons/user-profile-96x96_icon.png';
import starEmptyIcon from '../../assets/icons/star-empty_icon.png';
import starFilledIcon from '../../assets/icons/star-filled_icon.png';

export default function ContactCard() {  
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    /**
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     * 
     * Then use the starIcon value to display the correct image
     */
    
    function toggleFavorite() {
        setContact(prevContactObject => {
            return {
                ...prevContactObject,
                isFavorite: !prevContactObject.isFavorite
            }
        })
    }
    
    const starIcon = contact.isFavorite ? starFilledIcon : starEmptyIcon;

    return(


        <article className="contactCard">
            <img 
                alt="user profile icon"
                src={userProfileIcon} 
                className="contactCard__image contactCard__image--user" />
            <div className="contactCard__info">
                <img 
                    alt="icon to mark conctact card as favourite"
                    src={starIcon} 
                    className="contactCard__image contactCard__image--favourite"
                    onClick={toggleFavorite}
                />
                <h2 className="contactCard__name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="contactCard__contact contactCard__contact--email">{contact.email}</p>
                <p className="contactCard__contact contactCard__contact--phone">{contact.phone}</p>
            </div>
        </article>
    )
}