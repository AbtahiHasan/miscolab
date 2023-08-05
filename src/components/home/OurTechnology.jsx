import { BiLogoReact, BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import dot from "/public/dot effect.png"
import Image from "next/image";
const OurTechnology = () => {
    return (
        <section className="container mt-[140px]">
            <div className='text-center'>
                <h2 className='mb-5 text-3xl font-medium'>Our Technology<span className='text-primary'> Stack</span></h2>
                <p className='mb-16'>Our MEAN Stack professionals have mastered Full Stack JavaScript, as well as the four critical components of this technology: MongoDB (M), Express JS (E), Angular JS (A), and Node.js (N). We give top-of-the-line app solutions to assist you in pushing your organization into the digital era as a leading mean stack development services company. We ensure that the teams working on your MEAN development are experts in using practical tools.</p>
            </div>
            <div className="grid md:grid-cols-5 gap-5">
                <div>
                    <h3 className="text-2xl font-bold my-3">Frontend</h3>
                    <BiLogoReact className="text-[40px]"/>
                    <h3 className="text-2xl font-bold my-3">Backend</h3>
                    <SiExpress className="text-[40px]"/>
                    <h3 className="text-2xl font-bold my-3">Database</h3>
                    <BiLogoMongodb className="text-[40px]"/>
                </div>
                <div className="col-span-4 flex items-center">

                    <div className="bg-primary bg-opacity-10 w-[85%] p-10 relative">
                        <Image className="absolute -top-[26px] z-[0] -left-[26px]" src={dot} alt="dot logo" width={60} height={60} />
                        <div className="absolute z-5 text-white flex items-center left-0 bg-primary px-5 py-2 rounded-e-full">
                        <BiLogoReact className="text-[40px]"/> 
                        <h4 className="text-2xl">React</h4>
                        </div>
                        <h2 className="mt-20"> 
                            Our developers use the trending tools to deliver AngularJS development solutions for apps like music and video streaming, e-commerce, social networking .
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTechnology;