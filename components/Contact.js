import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      className="-mt-16 pb-20 !bg-cover !bg-no-repeat relative flex-center-center"
      id="contact"
      style={{
        background:
          "linear-gradient(rgba(8, 15, 13, 0.8), rgba(8, 15, 13, 0.8)), url('/images/hero-bg.png')",
      }}
    >
      <div>
        <div className="flex-center-center">
          <div className="gradient-tag !py-1">
            <span className="text-muted">Contact</span>
          </div>
        </div>
        <h1 className="text-center mt-2 text-2xl font-semibold">
          Need to reach out to me? Contact me for business
        </h1>
        <div className="my-4 max-w-6xl mx-auto !w-[85%] pl-8 sm:pl-0">
          <div className="my-4">
            <FiMapPin />
            <div>
              <h1 className="text-base">Address:</h1>
              <p>Uganda Kampala, Makerere-Kikoni</p>
            </div>
          </div>
          <div className="my-4">
            <FiPhone />
            <div>
              <h1 className="text-base">Phone:</h1>
              <p>
                (+256) 775 358738 <br />
                (+256) 758 548836 <br />
                (+256) 752 870867 (WhatsApp)
              </p>
            </div>
          </div>
          <div className="my-4">
            <FiMail />
            <div>
              <h1 className="text-base">Email:</h1>
              <p>
                wabwenib66@gmail.com <br />
                wabzbraize66@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-1/5 bottom-0 bg-gradient-to-t from-main-bg to-transparent" />
    </section>
  );
};

export default Contact;
