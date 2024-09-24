import instance from "./configAxios";

const getBlogPosts = async (page, postsPerPage) => {
   
    try {
        const res = await instance.get(`posts/blog/paging?postsPerPage=${postsPerPage}&&page=${page}`);
        return res.data.data;
    } catch (error) {
        console.log(error, 'Error');
    }
};

export default getBlogPosts;
