import { IService } from "../ServiceData/type";
import { servicesData } from "../ServiceData/data";

const Services = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h5 className="my-1 font-medium">
        As a versatile front-end developer, I thrive on transforming digital
        landscapes. With a proven track record of driving significant
        improvements in website traffic and user engagement, I’m passionate
        about crafting seamless and delightful user experiences.
      </h5>
      <div
        className="flex-grow p-10 pt-0 mt-4 mb-0 bg-gray-400"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {servicesData.map((service: IService, index: number) => (
            <div
              key={index}
              className="p-4 bg-gray-200 rounded-lg lg:col-span-1"
            >
              <service.Icon className="w-8 h-8 mb-2 text-green-500" />
              <h4 className="font-semibold">{service.title}</h4>
              <p>{service.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
