import { projects } from "../ServiceData/data";
import ProjectCard from "../components/ProjectCard";

const ProjectSections = () => {
  return (
    <div className="px-5 py-2 overfloy-y-scroll" style={{ height: "65vh" }}>
      <nav> All Projects</nav>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div className="col-span-3 p-2 bg-gray-300 rounded-lg sm:col-span-6 lg:col-span-4">
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSections;
