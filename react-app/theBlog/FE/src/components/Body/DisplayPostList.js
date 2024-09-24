import React, { useContext, useEffect, useState } from 'react';
import './DisplayPostList.css';
import PostItem from './PostItem';
import { contextApp } from '../../App';

const DisplayPostList = ({ RecentBlogPosts, AllBlogPosts, AllRecentBlogPosts, ProjectPosts, Newsletter, DataPosts, title }) => {
    const dataContextApp = useContext(contextApp);      
    const isCheckTheme = dataContextApp.isCheckTheme;
    const [dataPosts, setDataPosts] = useState(DataPosts);

    useEffect(() => {
        setDataPosts(DataPosts);
    }, [DataPosts]);

    const determineDisplayType = () => {
        if (RecentBlogPosts) {
            return 'DisplayPostList_content';
        } else if (AllBlogPosts || Newsletter) {
            return 'DisplayPostList_content_allBlogPosts';
        } else if (AllRecentBlogPosts) {
            return 'DisplayPostList_content_allRecentBlogPosts';
        } else if (ProjectPosts) {
            return 'DisplayPostList_content_projectPosts';
        } else {
            return 'DisplayPostList_content_default';
        }
    };

    return (
        <div className='DisplayPostList'>
            <h2 className={`DisplayPostList_title ${isCheckTheme ? 'chageColorDark' : 'chageColorbright'}`}>
                {title}
            </h2>
            <div className={determineDisplayType()}>
                {dataPosts && dataPosts.length > 0 && dataPosts.map((element, index) => {
                    if (RecentBlogPosts || ProjectPosts) {
                        if (index < 6) {
                            return <PostItem key={element.idPost} RecentBlogPosts={RecentBlogPosts} ProjectPosts={ProjectPosts} element={element} itemIndex={index + 1} />;
                        } else {
                            return null;
                        }
                    } else if (Newsletter && index < 3) {
                        return <PostItem key={element.idPost} AllBlogPosts={AllBlogPosts} element={element} itemIndex={index + 1} />;
                    } else {
                        return <PostItem key={element.idPost} AllBlogPosts={AllBlogPosts} AllRecentBlogPosts={AllRecentBlogPosts} element={element} itemIndex={index + 1} />;
                    }
                })}
            </div>
        </div>
    );
};

export default DisplayPostList;
