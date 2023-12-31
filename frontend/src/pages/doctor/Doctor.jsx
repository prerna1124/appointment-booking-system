import DoctorList from "../../components/doctor/DoctorList";
import Testimonial from "../../components/testimonial/Testimonial";

const Doctor = () => {
  return <>

    <div className="container">
      <div className="flex flex-col">
        <div className="flex flex-col text-center">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col pt-15">
              <h1 className="heading">Find a Doctor</h1>
              <p>World-class care for everyone. Our health System offers unmatched expert health care.</p>
            </div>
            <div className="flex flex-row items-center justify-center">
                <input className="leading-[48px] cursor-pointer rounded-xl rounded-r-none text-center border border-stone-300 w-1/2" type="search" placeholder="search a doctor"/>
                <button className="btn mt-0 leading-[30px] rounded-[0px] rounded-r-md lg:w-1/8 sm:1/32">search</button>
            </div>
          </div>
        </div>
          <DoctorList />
      </div>
    </div>
    <section>
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col text-center">
            <div className="flex flex-col">
              <h1 className="heading">What out patient say</h1>
              <p>World-class care for everyone. Our health System offers unmatched expert health care.</p>
            </div>
          </div>
          <Testimonial />
        </div>
      </div>
    </section>
  </>
};

export default Doctor;