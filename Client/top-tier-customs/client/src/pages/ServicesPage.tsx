import mockServices from "../data/mockServices";
import ServiceCard from "../components/ServiceCard";

const ServicesPage = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-zinc-800 dark:text-white">
        Our Premium Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
