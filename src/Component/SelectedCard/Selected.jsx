import React from 'react';

const Selected = ({choose}) => {
    return (
        <div>
            {choose.map((card) => (
                <div key={card.id} className="">
                    <img src={card.img} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Selected;