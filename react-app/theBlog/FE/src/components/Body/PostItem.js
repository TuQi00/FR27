import React, { useContext, useEffect, useState } from 'react';
import './PostItem.css';
// import imgArrow from '../../assets/image/arrow-up-right.svg';
// import { TColorBackgroud, TColorText } from '../../assets/ts/Color';
// import getTopicPosts from '../../axios/getTopicPosts';
import { Link, useNavigate } from 'react-router-dom';
// import { scrollToTop } from '../../utils/animationscrollToTop';
import { contextApp } from '../../App';
import Button from './Button';
import getTopicPosts from '../../axios/getTopicPosts';
import { TColorBackgroud, TColorText } from '../../assets/Color';
import { scrollToTop } from '../../utils/animationscrollToTop';

const initGetTopicPosts = async (idPost) => {
    try {
        const resquestTopicPost = await getTopicPosts(idPost);
        return resquestTopicPost;
    } catch (error) {
        console.error('Error fetching topic posts:', error);
        return null;
    }
};

const PostItem = ({ RecentBlogPosts, AllBlogPosts, AllRecentBlogPosts, ProjectPosts, element, itemIndex }) => {
    const [dataTopicPost, setDataTopicPost] = useState([]);
    const [containerColorBg, setContainerColorbg] = useState(Object.values(TColorBackgroud));
    const [containerColorText, setContainerColorText] = useState(Object.values(TColorText));
    const [count, setCountBg] = useState(Math.floor(Math.random() * containerColorBg.length));
    const [image, setImage] = useState(`data:image/png;base64,${element.image}`);
    const navigate = useNavigate();
    const dataContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;

    const handleLinkClick = () => {
        navigate(`/detailPosts/${element.idPost}`);
        scrollToTop();
    };

    const isCheckChangePostItem = (data) => {
        switch (itemIndex) {
            case 1:
                return data[itemIndex - 1];
            case 2:
                return data[itemIndex - 1];
            case 3:
                return data[itemIndex - 1];
            case 4:
                return data[itemIndex - 1];
            case 5:
                return data[itemIndex - 1];
            case 6:
                return data[itemIndex - 1];
            default:
                return '';
        }
    };
    const [isCheckTypeDisplayPostItem, setIsCheckTypeDisplayPostItem] = useState(() => {
        if (RecentBlogPosts === true) {
            return isCheckChangePostItem([
                `post_item-recentPostItem${itemIndex}`,
                `post_item-recentPostItem${itemIndex}`,
                `post_item-recentPostItem${itemIndex}`,
                `post_item-recentPostItem${itemIndex}`
            ]);
        } else if (AllBlogPosts === true) {
            return 'post_item-allBlogPostItem';
        } else if (AllRecentBlogPosts === true) {
            return 'post_item-AllRecentBlogPosts';
        } else if (ProjectPosts === true) {
            return isCheckChangePostItem([
                `post_item-projectPostItem${itemIndex}`,
                `post_item-projectPostItem${itemIndex}`,
                `post_item-projectPostItem${itemIndex}`,
                `post_item-projectPostItem${itemIndex}`,
                `post_item-projectPostItem${itemIndex}`,
                `post_item-projectPostItem${itemIndex}`
            ]);
        } else {
            return '';
        }
    });
    const [isCheckTypeDisplayPostItemImg, setIsCheckTypeDisplayPostItemImg] = useState(() => {
        if (RecentBlogPosts === true) {
            return isCheckChangePostItem([
                'post_item_image-recentPostItem1',
                'post_item_image-recentPostItem2',
                'post_item_image-recentPostItem3',
                'post_item_image-recentPostItem4'
            ]);
        } else if (AllBlogPosts === true) {
            return 'post_item_image-allBlogPostItem';
        } else if (AllRecentBlogPosts === true) {
            return 'post_item_image-AllRecentBlogPosts';
        } else if (ProjectPosts === true) {
            return isCheckChangePostItem([
                `post_item_image-projectPostItem${itemIndex}`,
                `post_item_image-projectPostItem${itemIndex}`,
                `post_item_image-projectPostItem${itemIndex}`,
                `post_item_image-projectPostItem${itemIndex}`,
                `post_item_image-projectPostItem${itemIndex}`,
                `post_item_image-projectPostItem${itemIndex}`
            ]);
        } else {
            return '';
        }
    });
    const [isCheckTypeDisplayPostItemContent, setIsCheckTypeDisplayPostItemContet] = useState(() => {
        if (RecentBlogPosts === true) {
            return isCheckChangePostItem([
                'post_item_content-recentPostItem1',
                'post_item_content-recentPostItem2',
                'post_item_content-recentPostItem3',
                'post_item_content-recentPostItem4'
            ]);
        } else if (AllBlogPosts === true) {
            return 'post_item_content-allBlogPostItem';
        } else if (AllRecentBlogPosts === true) {
            return 'post_item_content-AllRecentBlogPosts';
        } else if (ProjectPosts === true) {
            return isCheckChangePostItem([
                `post_item_content-projectPostItem${itemIndex}`,
                `post_item_content-projectPostItem${itemIndex}`,
                `post_item_content-projectPostItem${itemIndex}`,
                `post_item_content-projectPostItem${itemIndex}`,
                `post_item_content-projectPostItem${itemIndex}`,
                `post_item_content-projectPostItem${itemIndex}`
            ]);
        } else {
            return '';
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataTopicPost = await initGetTopicPosts(Number(element.idPost));
                setDataTopicPost(dataTopicPost);
            } catch (error) {
                console.error('Error fetching topic posts:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={isCheckTypeDisplayPostItem} >
            <img src={image} srcSet={`${image} 1x, ${image} 2x`} alt="" className={isCheckTypeDisplayPostItemImg} />
            <div className={isCheckTypeDisplayPostItemContent} >
                <span className='post_item_content_authorAndDate'>
                    {element.authorName} • {element.FormattedDate}
                </span>
                <Link to={`/detailPosts/${element.idPost}`} style={{ textDecoration: 'none', color: 'inherit', display: 'inherit' }} onClick={handleLinkClick}>
                    <h3 className={`post_item_content_title ${isCheckTheme === false ? 'chageColorDark' : 'chageColorbright'}`}>{element.title} </h3><img  alt="Arrow" className='post_item_content_imgArrow' />
                </Link>
                <p className={`post_item_content_description ${isCheckTheme === false ? 'chageColorDark' : 'chageColorbright'}`}>{element.decscription}</p>
                <div className='post_item_content_topic'>
                    {
                        dataTopicPost && dataTopicPost.length > 0 ?
                            dataTopicPost.map((item, index) => (
                                <div key={index}>
                                    <Button bgColor={`${containerColorBg[count === containerColorBg.length ? count - 1 : count]}`} color={`${containerColorText[count === containerColorText.length ? count - 1 : count]}`} text={item} />
                                </div>
                            ))
                            : null
                    }
                </div>
            </div>
        </div >
    );
};

export default PostItem;
