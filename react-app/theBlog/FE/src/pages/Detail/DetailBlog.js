import React, { useContext, useEffect, useState } from 'react';
import './DetailBlog.css';
import { contextApp } from '../../App';
// import getDetailPost from '../../axios/getDetailPost';
import { useParams } from 'react-router-dom';
import imageDetailPost1 from '../../assets/10framework.png';
import imageDetailPost2 from '../../assets/10framework.png';
import imageDetailPost3 from '../../assets/10framework.png';
import imageDetailPost4 from '../../assets/10framework.png';
import imageDetailPost5 from '../../assets/10framework.png';
import imageDetailPost6 from '../../assets/10framework.png';
import imageDetailPost7 from '../../assets/10framework.png';
import imageDetailPost8 from '../../assets/10framework.png';
import imageDetailPost9 from '../../assets/10framework.png';
import imageDetailPost10 from '../../assets/10framework.png';
// import imageDetailPost2 from '../../assets/image/Image2.png';
// import imageDetailPost3 from '../../assets/image/Image3.png';
// import imageDetailPost4 from '../../assets/image/Image4.png';
// import imageDetailPost5 from '../../assets/image/Image5.png';
// import imageDetailPost6 from '../../assets/image/Image6.png';
// import imageDetailPost7 from '../../assets/image/Image7.png';
// import imageDetailPost8 from '../../assets/image/Image8.png';
// import imageDetailPost9 from '../../assets/image/Image9.png';
// import imageDetailPost10 from '../../assets/image/Image10.png';
// import getTopicPosts from '../../axios/getTopicPosts';
// import { TColorBackgroud, TColorText } from '../../assets/ts/Color';
// import { scrollToTop } from '../../utils/animationscrollToTop';
import DisplayPostList from '../../components/Body/DisplayPostList';
import Subscriber from '../../components/Body/Subcriber';
import Button from '../../components/Body/Button';
import getDetailPost from '../../axios/getDetailPost';
import getTopicPosts from '../../axios/getTopicPosts';
import { TColorBackgroud, TColorText } from '../../assets/Color';
import { scrollToTop } from '../../utils/animationscrollToTop';

const DetailPost = () => {
    const dataContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;
    const { idPost } = useParams();
    const [dataBlogPost, setDataBlogPost] = useState({});
    const [dataTopicPost, setDataTopicPost] = useState([]);
    const [containerColorBg, setContainerColorbg] = useState(Object.values(TColorBackgroud));
    const [containerColorText, setContainerColorText] = useState(Object.values(TColorText));
    const [count, setCountBg] = useState(Math.floor(Math.random() * containerColorBg.length));
    const [showButton, setShowButton] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showListRecentBlogPost, setShowListRecentBlogPost] = useState(windowWidth >= 1200);

    const loop = [
        imageDetailPost1,
        imageDetailPost2,
        imageDetailPost3,
        imageDetailPost4,
        imageDetailPost5,
        imageDetailPost6,
        imageDetailPost7,
        imageDetailPost8,
        imageDetailPost9,
        imageDetailPost10
    ];

    const handleLinkClick = () => {
        scrollToTop ();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [detailPost, topicPosts] = await Promise.all([getDetailPost(Number(idPost)), getTopicPosts(Number(idPost))]);
                setDataTopicPost(topicPosts);
                setDataBlogPost(detailPost[0]);
            } catch (error) {
                console.error('Error fetching topic posts:', error);
            }
        };
        fetchData();
    }, [idPost]);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setShowListRecentBlogPost(windowWidth >= 1200);
            setWindowWidth(windowWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);

    const handleOnclickChageShowListRecentBlogPosts = () => {
        setShowListRecentBlogPost(!showListRecentBlogPost);
    };

    return (
        <div className={`detailPost ${isCheckTheme ? 'chageBgColorDark' : 'chageBgColorbright'}`}>
            <div className={`detailPost_list ${showListRecentBlogPost ? 'show' : 'hiddent'}`}>
                {windowWidth < 1200 && (
                    <button className='detailPost_list_btn-left' onClick={handleOnclickChageShowListRecentBlogPosts} style={{ display: `${showListRecentBlogPost ? 'block' : 'none'}` }}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                )}
                <DisplayPostList title='Recent blog posts' AllRecentBlogPosts DataPosts={dataContextApp.dataGetRecentBlog} />
            </div>
            {windowWidth >= 1200 && (
                <button className='detailPost_list_btn-right' onClick={handleOnclickChageShowListRecentBlogPosts} style={{ display: `${!showListRecentBlogPost ? 'block' : 'none'}` }}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            )}
            <div className='detailPost_content'>
                <h4 className='detailPost_content_text'>
                    {dataBlogPost.authorName} • {dataBlogPost.FormattedDate}
                </h4>
                <h2 className={`detailPost_content_title ${isCheckTheme ? 'chageColorDark' : 'chageColorbright'}`}>
                    {dataBlogPost.title}
                </h2>
                <img src={`data:image/png;base64,${dataBlogPost.image}`} alt="" className='detailPost_content_image' />
                <p className={`${isCheckTheme ? 'chageColorDark' : 'chageColorbright'}`}>
                    A grid system is a design tool used to arrange content on a webpage...
                </p>
                <div style={{ display: 'flex', margin: '30px 0px' }}>
                    {dataTopicPost.map((item, index) => (
                        <div key={index}>
                            <Button bgColor={containerColorBg[count === containerColorBg.length ? count - 1 : count]} color={containerColorText[count === containerColorText.length ? count - 1 : count]} text={item} />
                        </div>
                    ))}
                </div>
                <div className='detailPost_content_subscriber'>
                    <Subscriber />
                </div>
            </div>
            {showButton && (
                <button className='detailPost_btnControllerTop' onClick={handleLinkClick}>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            )}
        </div>
    );
};

export default DetailPost;
