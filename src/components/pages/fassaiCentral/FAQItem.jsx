import React, { useState } from 'react';

function numberToLetter(num){
    let ascii = 'a'.charCodeAt(0) + num;
    return String.fromCharCode(ascii);
}
// function toggleAcc(target) {
//     accItems.forEach((item) => item !== this ? item.classList.remove("accordion__item--active") : null
//     );

//     if (this.classList !== "accordion__item--active") {
//         this.classList.toggle("accordion__item--active");
//     }
// }



function FAQItem(props) {
    const [activated, toggle] = useState(false);

    return (
        <div className={'accordion__item' + (activated ? ' accordion__item--active' : '')}>
            <button className="accordion__btn" 
            onClick={() => {
                toggle(!activated);
            }}>
                <span className="accordion__caption" > {numberToLetter(props.number) + ' ' +  props.ques}</span>
                <span className="accordion__icon"><i className="fa fa-plus"></i></span>
            </button>

            <div className="accordion__content">
                <p >{props.answer}</p>
            </div>
        </div>);
}

export default FAQItem;