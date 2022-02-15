import React from 'react';

const Fooditem = (props) => {
    // console.log(props);
    const {strCategory,strCategoryDescription,strCategoryThumb} = props.food
    return (
        <div className="col-md-4">
            <div className="card" >
                    <img src={strCategoryThumb} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{strCategory}</h5>
                        <p className="card-text">{strCategoryDescription}</p>
                        <a href={strCategoryThumb} className="btn btn-primary">See Details</a>
                    </div>
                </div>
        </div>
    );
};

export default Fooditem;