import React from 'react';

const renderStars = (value, color) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
        let half = i - 0.5;
        stars.push(
            <span key={i}>
            <i style={{color}} className=
                {value >= i ? 'fas fa-star' : value >= half ? 'fas fa-star-half-alt' : 'far fa-star'}
            />
        </span>
        )
    }
    return stars;
}


const Rating = ({value, text, color}) => (
    <div className='rating'>
        {renderStars(value, color).map(star => (star))}
        <span>{text && text}</span>
    </div>
);
Rating.defaultProps = {
    color: '#f8e825'
}
export default Rating;