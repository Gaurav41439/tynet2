import React , { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.scss'; 
import ProjectItem from '../project_item_v2';

Project.propTypes = {
    data: PropTypes.array,
};
 
function Project(props) {
        const {data} = props; 

    const [dataTitle] = useState(
        {
            title: 'Domains',
            
        }
    )

    return (
        <section className="tf-section project_3">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                        <h2 className="title">
                            {dataTitle.title} <br className="show-destop"/>  {dataTitle.title_2}
                        </h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="project-box-style2_wrapper">
                    {
                        data.slice(10,13).map(item => (
                            <ProjectItem key={item.id} item={item} />
                        ))
                    }
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="project-box-style2_wrapper">
                    {
                        data.slice(13,16).map(item => (
                            <ProjectItem key={item.id} item={item} />
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Project;