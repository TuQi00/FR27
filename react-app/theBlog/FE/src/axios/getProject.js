import instance from "./configAxios";

const getProject = async () => {
    try {
        const res = await instance.get('posts/project');
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};

export default getProject;
