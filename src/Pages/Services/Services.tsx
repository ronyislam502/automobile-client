import { Card } from "antd";
import SectionTitle from "../../Components/shared/SectionTitle";
import { useGetAllServicesQuery } from "../../redux/feature/service/serviceApi";
import { TService } from "../../types";

const Services = () => {
  const { data: services } = useGetAllServicesQuery(undefined);
  console.log(services);
  return (
    <div>
      <SectionTitle heading="Our Services" />
      <div className="max-w-6xl mx-auto px-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services?.data?.map((service: TService) => {
          return (
            <Card style={{ width: 300 }} cover={<img src={service.image} />}>
              <div>
                <h1 className="text-xl font bold">
                  Service Charge: {service?.price}
                </h1>
                <h2>{service?.name}</h2>
                <p>{service?.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
