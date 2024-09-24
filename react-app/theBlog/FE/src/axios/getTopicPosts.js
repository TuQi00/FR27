import instance from "./configAxios";

const getTopicPosts = async (idPost) => {
    try {
        const res = await instance.get(`posts/topics/${idPost}`);
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};

export default getTopicPosts;
