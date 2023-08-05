
import ProjectCard from "./ProjectCard";
import getAllProjects from "@/utils/getAllProjects";


const Projects = async () => {
    const {allProjects} = await getAllProjects()



    return (
        <div id="projects" className="container text-white mt-[140px]">
            
            <h2 className="text-3xl text-center font-bold ">Projects</h2>
            <p className='text-center font-bold mt-4'>Things I’ve built so far</p>
            <div className='mt-10 grid md:grid-cols-3 gap-5'>
                {
                    allProjects && allProjects.map(project => <ProjectCard  key={project._id} project={project}/>)
                }
            </div>
        </div>
    
    );
};

export default Projects;