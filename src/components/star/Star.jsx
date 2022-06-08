import './Star.scss';
import starEmptyIcon from '../../assets/icons/star-empty_icon.png';
import starFilledIcon from '../../assets/icons/star-filled_icon.png';

export default function Star(props) {

    const starIcon = props.isFavorite ? starFilledIcon : starEmptyIcon;
    return (
        <div className="star">
            <img 
                alt="icon to mark conctact card as favourite"
                src={starIcon} 
                className="star__image star__image--favourite"
                onClick={props.handleClick}
            />
        </div>
    )
}