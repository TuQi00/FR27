import React, { useContext } from 'react';
// import imageAuthor from '../../assets/image/author.png';
import './About.css';
import { contextApp } from '../../App';
import Title from '../../components/Body/Title';

const About = () => {
    const dataContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;

    return (
        <div id={`mainAbout${isCheckTheme ? '_theme' : ''}`}>
            <div className='about'>
                <Title title='Join Doe' />
                <img alt="" className='about_image' />
                <div className='about_sectionFirst'>
                    <h3 className={`about_sectionFirst_title ${isCheckTheme ? 'chageColor' : ''}`}>
                        About Me
                    </h3>
                    <p className={`about_sectionFirst_text ${isCheckTheme ? 'chageColor' : ''}`}>
                        As a passionate and experienced UI designer, I am dedicated to creating intuitive and engaging user
                        experiences that meet the needs of my clients and their users. I have a strong understanding of design
                        principles and a proficiency in design tools, and I am comfortable working with cross-functional teams
                        to bring projects to fruition. I am confident in my ability to create designs that are both visually
                        appealing and functional, and I am always looking for new challenges and opportunities to grow as a designer.
                    </p>
                </div>
                <div className='about_sectionSecond'>
                    <h3 className={`about_sectionSecond_title ${isCheckTheme ? 'chageColor' : ''}`}>
                        Skills:
                    </h3>
                    <ul className={`about_sectionSecond_title_list ${isCheckTheme ? 'chageColor' : ''}`}>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme ? 'chageColor' : ''}`}>
                            Extensive experience in UI design, with a strong portfolio of completed projects
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme ? 'chageColor' : ''}`}>
                            Proficiency in design tools such as Adobe Creative Suite and Sketch
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme ? 'chageColor' : ''}`}>
                            Excellent visual design skills, with a strong understanding of layout, color theory, and typography
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme ? 'chageColor' : ''}`}>
                            Ability to create wireframes and prototypes to communicate design concepts
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme ? 'chageColor' : ''}`}>
                            Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme ? 'chageColor' : ''}`}>
                            Experience conducting user research and gathering insights to inform design decisions
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme ? 'chageColor' : ''}`}>
                            Proficiency in HTML, CSS, and JavaScript
                        </li>
                    </ul>
                </div>
                <div className='about_sectionSecond'>
                    <h3 className={`about_sectionSecond_title ${isCheckTheme ? 'chageColor' : ''}`}>
                        Experience:
                    </h3>
                    <ul className='about_sectionSecond_title_list'>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme ? 'chageColor' : ''}`}>
                            5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme ? 'chageColor' : ''}`}>
                            Led the design of a successful e-commerce website, resulting in a 25% increase in online sales
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme ? 'chageColor' : ''}`}>
                            Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme ? 'chageColor' : ''}`}>
                            Conducted user research and usability testing to inform the redesign of a healthcare provider's website, resulting in a 15% increase in website traffic
                        </li>
                    </ul>
                </div>
                <div className='about_sectionSecond'>
                    <h3 className={`about_sectionSecond_title ${isCheckTheme ? 'chageColor' : ''}`}>
                        Education:
                    </h3>
                    <ul className='about_sectionSecond_title_list'>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme ? 'chageColor' : ''}`}>
                            Bachelor's degree in Graphic Design
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme ? 'chageColor' : ''}`}>
                            Certified User Experience Designer (CUED)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
