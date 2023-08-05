import axios from "axios";

const getSingleProjects = async (id) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/projects?id=${id}`)
        const project = await res.data
        return {project}
    } catch (error) {
        return {}
    }
};

export default getSingleProjects;