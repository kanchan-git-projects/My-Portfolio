import { FunctionComponent, useState } from "react";
import { IProject } from "../ServiceData/type";
import { AiFillGithub } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: { name, image_path, description, github_url, key_techs },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gradient-to-r from-blue-400 to-green-400 right:0 md:grid-cols-2 gap-x-12">
          <div>
            <img src={image_path} alt={name} />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg font-semibold bg-slate-200"
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full right-3 top-3 focus:outline-none "
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
