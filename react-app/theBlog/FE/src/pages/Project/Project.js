import { useContext, useEffect, useState } from 'react';
import { contextApp } from '../../App';
import getProject from '../../axios/getProject';
import Title from '../../components/Body/Title';
import DisplayPostList from '../../components/Body/DisplayPostList';


const Project = () => {
    const [dataProjectPosts, setDataProjectPosts] = useState([]);
    const dataContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataProjectPost = await getProject();
                setDataProjectPosts(dataProjectPost)
            } catch (error) {
                console.error('Error fetching topic posts:', error);
            };
        };
        fetchData();
    }, []);

    return (
        <div id={`mainProject${isCheckTheme === true ? '_theme' : ''}`}>
            <Title title='PROJECTS' />
            <DisplayPostList title='List Project' ProjectPosts DataPosts={dataProjectPosts} />
        </div>
    );
};

export default Project;