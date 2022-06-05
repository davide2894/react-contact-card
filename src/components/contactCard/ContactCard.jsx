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


        <article className="card">
            <img src={userProfileIcon} className="card--image" />
            <div className="card--info">
                <img 
                    src={starIcon} 
                    className="card--favorite"
                    onClick={toggleFavorite}
                />
                <h2 className="card--name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
            </div>
        </article>
    )
}