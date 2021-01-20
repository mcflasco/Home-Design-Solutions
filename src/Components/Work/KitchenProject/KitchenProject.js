import React from 'react';
import kitchenRemodel from '../../../assets/images/kitchenRemodel.jpg'
const kitchenProject = (props) => {
    return (
        <div>
            <h1 className="title">Hello World</h1>
            <div className="project-container">
                <a href={kitchenRemodel}><img className="kitchen-image" src={kitchenRemodel} /></a>
                <div className="project-info">
                    <h3 className="project-description">Project Description:</h3><br/>
                    <p className="kitchen-description">Kitchen and cabinet design/remodling for condo in Pheonix, AZ</p>
                </div>
            </div>
        </div>
    )
}

export default kitchenProject;