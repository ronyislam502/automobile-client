import CarCard from "../../Components/shared/CarCard";
import SectionTitle from "../../Components/shared/SectionTitle";

const Services = () => {
  return (
    <div>
      <SectionTitle heading="Our Services" />
      
      <div className="max-w-6xl mx-auto px-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  );
};

export default Services;
