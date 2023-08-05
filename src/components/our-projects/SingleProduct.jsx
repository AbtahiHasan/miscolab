"use client"
import Image from 'next/image';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const SingleProduct = ({project}) => {
    const {_id,name, description,bulet_point,images , server_technologies, clints_technologies,server_github_link, live_link, client_github_link} = project?.project || {}
    return (
        <div className='container '>
                
                <div className="relative ">
                <div className="md:grid md:grid-cols-2 gap-5">
                <div className="flex items-center p-5"> 
                <Swiper
                    pagination={{
                    type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    
                    >
            {
                project?.project?.images && images.map((image, i )=> (
                    <SwiperSlide key={i}>
                    <div className="w-full md:h-[500px] h-[200px] relative">
                        <Image quality={75} fill={true} src={image} alt="project photo" />
                    </div>
                </SwiperSlide>
                ))
            }
                </Swiper>
                </div>
                <div className="p-5 overflow-hidden">
                    <h2 className="text-2xl"><span className='font-bold'>Project Name: </span>{name}</h2>
                    <p className="my-3">{description}</p>

                    <ol className="list-[number] ml-4 mt-2">
                        {
                            project?.project?.bulet_point && bulet_point.map((point, i) => <li key={i}>{point}</li>)
                        } 
                    </ol>
                <h3 className="text-xl text-primary font-bold mt-10">technologies</h3>
                <div className="flex gap-3">
                    <p className="text-primary">Client:</p>
                    <ul className="flex gap-3 items-center">
                        {
                            project?.project?.clints_technologies && clints_technologies.map((technology, i) => <li key={i}>{technology},</li>)
                        }
                    </ul>
                    </div>
                    <div className="flex gap-3">
                    <p className="text-primary">Server:</p>
                    <ul className="flex gap-3 items-center">
                        {
                            project?.project?.server_technologies && server_technologies.map((technology, i) => <li key={i}>{technology},</li>)
                        }
                    </ul>
                </div>
                <div className="flex justify-between items-center mt-10">
                    <a href={live_link}><p className="flex flex-col items-center hover:text-main"><AiOutlineLink/> <span>Live Link</span></p></a>
                    <a href={client_github_link}><p className="flex flex-col items-center hover:text-main"><AiFillGithub/> <span>Github Client</span></p></a>
                    <a href={server_github_link}><p className="flex flex-col items-center hover:text-main"><AiFillGithub/> <span>Github Server</span></p></a>
                </div>
                </div>
                
                </div>
                </div>

            </div>
    );
};

export default SingleProduct;