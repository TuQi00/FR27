import instance from "./configAxios";

const getDetailPost = async (idPost) => {
    try {
        const res = await instance.get(`/posts/detailPosts/${idPost}`);
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};

export default getDetailPost;
