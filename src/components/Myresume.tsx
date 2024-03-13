
import { languages } from "../ServiceData/data";
import { ISkill } from "../ServiceData/type";
import { tools } from "../ServiceData/data";
import { ITools } from "../ServiceData/type";

const Myresume = () => {
  return (
    <div className="px-6 py-2">
      {/* Education and experience */}
      <div className="grid gap-2 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h6 className="my-2 text-lg font-semibold">
              Bachelor of Technology (B.Tech): Information Technology{" "}
            </h6>
            <p className="font-semibold">
              Birsa Institute of Technology, Sindri (2013-2017)
            </p>
          </div>
        </div>
        {/* Experience*/}

        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <ul className="my-2 text-lg font-semibold">
              <li> BYJUS Think & Learn (Web Content Associate)</li>
              <li> Bankers Adda 247 (Web Content Design - Intern)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Language & tools */}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Languages & Framework */}
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2 text-white">
            {/* Render the Iskills here  */}
            {languages.map((skill: ISkill, index: number) => (
              <div
                key={index}
                className="flex items-center p-2 m-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400 "
                style={{ width: skill.level }}
              >
                <skill.Icon className="mr-2 text-white" />
                <span className="px-2 ">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* text-white bg-gray-300 rounded-full */}
        {/* px-2 py-1 m-2 rounded-full bg-gradient-to-r from-green-400 to-blue-600  */}
        {/* Tools & Softwares */}
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2 text-white">
            {/* render the ITools here */}
            {tools.map((tool: ITools, index: number) => (
              <div
                key={index}
                className="flex items-center p-2 m-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400 "
                style={{ width: tool.level }}
              >
                <tool.Icon className="mr-2 text-white" />
                <span className="px-2">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myresume;
