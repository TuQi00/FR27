import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { contextApp } from '../../App';
import Title from '../../components/Body/Title';
import DisplayPostList from '../../components/Body/DisplayPostList';
import Paging from '../../components/Body/Pagination';
import getBlogPosts from '../../axios/getBlogPosts';
import blogPosts from '../../data/BlogsData';
 
const Home = () => {
    const dataContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;
    const [dataBlogPost, setDataBlogPost] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataBlogPost = await getBlogPosts(dataContextApp.page, dataContextApp.postsPerPage);
                setDataBlogPost(dataBlogPost);
                console.log(dataBlogPost, 'dataBlogPost');
            } catch (error) {
                console.error('Error fetching topic posts:', error);
            }
        };
        fetchData();
    }, [dataContextApp.page, dataContextApp.postsPerPage]);

    return (
        <div id={`main${isCheckTheme === true ? '_theme' : ''}`} >
            <div className={`${isCheckTheme === true ? 'chageBgColorDark' : 'chageBgColorbright'} `}>

                <Title title='THE BLOG' />
                <DisplayPostList title='Recent blog posts' RecentBlogPosts DataPosts={dataContextApp.dataGetRecentBlog} />
                <DisplayPostList title='All blog posts' AllBlogPosts DataPosts={dataBlogPost} />
                <Paging />
            </div>
        </div>
    );
};

export default Home;
