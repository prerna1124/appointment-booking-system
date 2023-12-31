import ServiceList from "../components/services/ServiceList";

const Services = () => {
  return <>
    <section>
    <div className="container">
        <div className="flex flex-col text-center">
          <div className="flex flex-col">
            <h1 className="heading">Our medical services</h1>
            <p>World-class care for everyone. Our health System offers unmatched expert health care.</p>
          </div>
        </div>
        <ServiceList />
      </div>
    </section>
  </>
};

export default Services;