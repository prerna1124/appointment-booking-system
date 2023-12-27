import heroImg01 from "./../assets/images/hero-img01.png";
import heroImg02 from "./../assets/images/hero-img02.png";
import heroImg03 from "./../assets/images/hero-img03.png";


const Home = () => {
  return (
    <div className="hero__Section pt-[60px] 2xl:h-[800px]">
      <div className="container flex flex-col lg:flex-row items-center gap-[90px]">
        <div>
          {/* ============ Left Text Section ============= */}
          <div className="text__Section flex items-center">
            <h1 className="text-[40px] text-headingColor font-[800]">We help Patients <br/>live a healthy,<br/> longer life</h1>
          </div>
          <div>
          <p className="py-[2.5px]">Lorem ipsum dolor sit amet, consectetur <br/>
          adipisicing elit. Velit quisquam ipsum obcaecati? Aperiam <br/>
          quis quidem labore corrupti quos. Quia tempora omnis soluta <br/>
          doloribus suscipit deserunt perferendis incidunt temporibus <br/>
          accusamus repellendus.</p>
          </div>
          <div>
            <button className="btn">Book an Appointement</button>
          </div>
          <div className='hero__counter mt-[30px] flex flex-col lg:flex-row gap-5 lg:gap-[30px]'>
            <div>
              <h2 className="font-[800] text-[30px]">30+</h2>
              <span className="w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]"></span>
              <p className="text__para">Year of Experiance</p>
            </div>
            <div>
              <h2 className="font-[800] text-[30px]">15+</h2>
              <span className="w-[100px] h-2 bg-violet-700 rounded-full block mt-[-14px]"></span>
              <p className="text__para">Clinic Location</p>
            </div>
            <div>
              <h2 className="font-[800] text-[30px]">100%</h2>
              <span className="w-[100px] h-2 bg-emerald-600 rounded-full block mt-[-14px]"></span>
              <p className="text__para">Patient Satisfaction</p>
            </div>
          </div>
        </div>
        {/* ============ Right Images Section ============= */}
        <div className="images flex justify-end gap-[30px]">
          <img src={heroImg01} alt="" className="h-[400px]"></img>
        </div>
        <div className="mt-[10px]">
          <img src={heroImg02} alt="" className="h-[280px] mb-[30px]"></img>
          <img src={heroImg03} alt="" className="h-[250px]"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;