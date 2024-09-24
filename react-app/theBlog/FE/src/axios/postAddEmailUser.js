import instance from "./configAxios";

const postAddEmailUser = async (email) => {
    try {
        const res = await instance.post('posts/sub', { email });
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};

export default postAddEmailUser;
