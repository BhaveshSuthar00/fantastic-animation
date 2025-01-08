'use client';
import { AuroraBackground } from "./ui/aurora-background";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('here in the form submit.');
  }
    return (
      <>
        <AuroraBackground id="ContactUs" className={'py-1'}>
          <div className="flex justify-between w-w85 m-auto items-center flex-wrap">
            <div>
              <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-black text-sm mb-2"
                    htmlFor="grid-first-name"
                    >
                    First Name
                  </label>

                  <input
                    className="block w-full bg-slate-100 border-none text-gray-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="grid-first-name"
                    type="text"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-black text-sm mb-2"
                    htmlFor="grid-last-name"
                    >
                    Last Name
                  </label>
                  <input
                    className="block w-full bg-slate-100 border-none text-gray-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="grid-last-name"
                  type="text"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-black text-sm mb-2"
                    htmlFor="grid-password"
                    >
                    E-mail
                  </label>
                  <input
                    className="block w-full bg-slate-100 border-none text-gray-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="email"
                    type="email"
                    />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-black text-sm mb-2"
                    htmlFor="grid-password"
                    >
                    Message
                  </label>
                  <textarea
                    className="block w-full bg-slate-100 border-none text-gray-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                        id="message"
                    ></textarea>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button
                    className="shadow bg-green-700 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    >
                    Send
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
              </form>
            </div>
            <div className="text-xl">
              <ul>
                <li className="font-extrabold">Questions? Let's Get In Touch</li>
                <li className="font-bold mt-4 my-2">Registered Office:</li>
                <li> <IoLocationSharp className="inline mr-2"/> Zoi Fintech Services Pvt Ltd. <br/> Marol, Andheri(E), Mumbai - 400059, <br/> Maharashtra</li>                
                <li> <FaPhoneAlt className="inline mr-2"/> +91-84337 27714</li>
                <li className="font-bold mt-4 mb-2">Development Center:</li>
                <li> <IoLocationSharp className="inline mr-2"/> Zoi Fintech Services Pvt Ltd. <br/> 2nd Floor, Vijay Tower, Opp. Bell School, <br/> Samathanapuram, Tirunelveli - 627002 <br/> Tamil Nadu</li>
                <li className="mt-4">
                  <MdEmail className="inline mr-2" />
                  <a className="underline text-green-700" href="mailto:team@zoifintech.com">team@zoifintech.com</a>
                </li>
              </ul>
            </div>
          </div>
        </AuroraBackground>
      </>
  );
};

export default ContactUs;
