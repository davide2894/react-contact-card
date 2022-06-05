import './ContactCard.scss';
import { useState } from 'react';
import userProfileIcon from '../../assets/icons/user-profile-96x96_icon.png';
import starIcon from '../../assets/icons/star-48x48_icon.png';

export default function ContactCard() {  
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    
    function toggleFavorite() {
        console.log("Toggle Favorite")
    }
    
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
                    John Doe
                </h2>
                <p className="card--contact">+1 (719) 555-1212</p>
                <p className="card--contact">itsmyrealname@example.com</p>
            </div>
        </article>
    )
}