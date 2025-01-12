import CarCard from "../shared/CarCard";
import SectionTitle from "../shared/SectionTitle";

const Service = () => {
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

export default Service;
