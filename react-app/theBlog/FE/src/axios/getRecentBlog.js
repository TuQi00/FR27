import instance from "./configAxios";

const getRecentBlog = async () => {
    try {
        const res = await instance.get('posts/recentBlog');
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};

export default getRecentBlog;
