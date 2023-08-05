import getSingleProjects from '@/utils/getSingleProjects';
import SingleProduct from '@/components/our-projects/SingleProduct';
const SigleProject = async ({params}) => {
    const project = await getSingleProjects(params.id)
    return (
        <SingleProduct project={project}/>
    );
};

export default SigleProject;