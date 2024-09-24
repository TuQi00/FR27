import { useContext, useEffect, useState } from "react";
import { contextApp } from "../../App";
import getBlogPosts from "../../axios/getBlogPosts";
import Subscriber from "../../components/Body/Subcriber";
import DisplayPostList from "../../components/Body/DisplayPostList";

const Newsletter = () => {
    const dataContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;
    const [dataBlogPost, setDataBlogPost] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataBlogPost = await getBlogPosts(dataContextApp.page, dataContextApp.postsPerPage);
                setDataBlogPost(dataBlogPost)
            } catch (error) {
                console.error('Error fetching topic posts:', error);
            };
        };
        fetchData();
    }, [dataContextApp.page, dataContextApp.postsPerPage]);

    return (
        <div className={`newsletter ${isCheckTheme === true ? 'chageBgColorDark ' : 'chageBgColorbright'}`}>
            <Subscriber />
            <DisplayPostList title="All blog posts" Newsletter DataPosts={dataBlogPost} />
        </div>
    );
};

export default Newsletter;