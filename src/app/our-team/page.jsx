import { FaLinkedinIn } from "react-icons/fa";
import {
	RiFacebookFill,
	RiInstagramFill,
	RiSkypeFill,
	RiTwitterFill,
} from "react-icons/ri";

import Image from "next/image";

const OurTeamPage = () => {
	return (
		<div className="container mx-auto">
			<div className="bg-[#ffffff]">
				<div
					className="h-[60vh]  bg-[white] pb-5"
					style={{
						backgroundImage: `url("https://i.ibb.co/s2pn0Bg/marvin-meyer-SYTO3xs06f-U-unsplash-min.jpg")`,
						backgroundSize: "cover",
					}}
				>
					<h1 className="text-6xl text-center text-[white] pt-32 font-bold">
						Misco<span>Lab</span> Team
					</h1>
				</div>
				<h1 className="text-[50px] font-bold text-[#000000] pt-7 text-center">
					Meet Our Clever Team
				</h1>
				<div className="bg-[#0DA1DB] w-[100px] mx-auto h-[6px]"></div>
			</div>
			<div className="bg-[#E8ECF7]  grid  lg:grid-cols-3 mt-8 h-full">
				<div className=" addClass   hover:drop-shadow-2xl duration-500">
					<div className=" bg-white w-[358px] rounded-3xl mx-auto my-10 h-[431px]">
						<div className="avatar pt-[35px] flex justify-center items-center">
							<div className="w-[160px] relative  h-[160px]  rounded-full">
								<Image  fill={true}  alt="team member image" className="rounded-full" src="https://i.ibb.co/YNX8jYx/Whats-App-Image-2023-07-22-at-12-20-30-AM.jpg" />
							</div>
						</div>

						<div>
							<h1 className="text-[28px] duration-500 leading-snug text-center pt-6 text-black font-semibold ">
								Sagor Ahmed{" "}
							</h1>
							<p className="text-center font-[13px] text-[#9E9E9E] mb-5">
								Founder & CEO, Web Developer
							</p>

							<div>
								<div className="flex justify-center gap-3  mt-16   text-3xl">
									<a href="https://twitter.com/developerSagor">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#2BA1E9] duration-500 rounded-full">
											<RiTwitterFill className="text-white "></RiTwitterFill>
										</div>
									</a>
									<a href="https://www.facebook.com/sagorahmed090400/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#4A6399] duration-500 rounded-full">
											<RiFacebookFill className="text-white"></RiFacebookFill>
										</div>
									</a>
									<a href="https://www.instagram.com/sagorahmed090400/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#E400E9] duration-500 rounded-full">
											<RiInstagramFill className="text-white"></RiInstagramFill>
										</div>
									</a>

									<a href="https://www.linkedin.com/in/sagor-ahmed-02a472271/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#0A66C2] duration-500 rounded-full">
											<FaLinkedinIn className=" text-white"></FaLinkedinIn>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" addClass   hover:drop-shadow-2xl duration-500  ">
					<div className=" bg-white w-[358px] rounded-3xl mx-auto my-10 h-[431px]">
						<div className="avatar pt-[35px] flex justify-center items-center">
							<div className="w-[160px] relative h-[160px]  rounded-full">
								<Image fill={true}  alt="team member image" className="rounded-full" src="https://i.ibb.co/Ybmd3cb/361614513-923929135369407-8705623956156444758-n.png" />
							</div>
						</div>

						<div>
							<h1 className="text-[28px] duration-500 leading-snug text-center pt-6 text-black font-semibold ">
								Shariar Rahman Anik
							</h1>
							<p className="text-center font-[13px] text-[#9E9E9E] mb-5">
								Co-Founder & Project Manager
							</p>

							<div>
								<div className="flex justify-center gap-3  mt-16   text-3xl">
									<a href="">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#2BA1E9] duration-500 rounded-full">
											<RiTwitterFill className="text-white "></RiTwitterFill>
										</div>
									</a>
									<a href="https://www.facebook.com/S.RahmanAnik">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#4A6399] duration-500 rounded-full">
											<RiFacebookFill className="text-white"></RiFacebookFill>
										</div>
									</a>
									<a href="https://www.instagram.com/s.rahmananik/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#E400E9] duration-500 rounded-full">
											<RiInstagramFill className="text-white"></RiInstagramFill>
										</div>
									</a>

									<a href="">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#0A66C2] duration-500 rounded-full">
											<FaLinkedinIn className=" text-white"></FaLinkedinIn>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" addClass   hover:drop-shadow-2xl duration-500  ">
					<div className=" bg-white w-[358px] rounded-3xl mx-auto my-10 h-[431px]">
						<div className="avatar pt-[35px] flex justify-center items-center">
							<div className="w-[160px] relative h-[160px]  rounded-full">
								<Image fill={true} alt="team member image" className="rounded-full" src="https://i.ibb.co/jgRCNmY/Whats-App-Image-2023-07-22-at-12-03-29-AM.jpg" />
							</div>
						</div>

						<div>
							<h1 className="text-[28px] duration-500 leading-snug text-center pt-6 text-black font-semibold ">
								Md Moniruzzaman
							</h1>
							<p className="text-center font-[13px] text-[#9E9E9E] mb-5">
								Co-founder & Web Designer
							</p>

							<div>
								<div className="flex justify-center gap-3  mt-16   text-3xl">
									<a href="">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#2BA1E9] duration-500 rounded-full">
											<RiTwitterFill className="text-white "></RiTwitterFill>
										</div>
									</a>
									<a href="https://www.facebook.com/Itmonir360">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#4A6399] duration-500 rounded-full">
											<RiFacebookFill className="text-white"></RiFacebookFill>
										</div>
									</a>
									<a href="">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#E400E9] duration-500 rounded-full">
											<RiInstagramFill className="text-white"></RiInstagramFill>
										</div>
									</a>

									<a href="https://www.linkedin.com/in/md-moniruzzaman-91a7a1224/">
										<div fill={true} className="p-[7px] bg-[#A1A1A1] hover:bg-[#0A66C2] duration-500 rounded-full">
											<FaLinkedinIn className=" text-white"></FaLinkedinIn>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" addClass   hover:drop-shadow-2xl duration-500  ">
					<div className=" bg-white w-[358px] rounded-3xl mx-auto my-10 h-[431px]">
						<div className="avatar pt-[35px] flex justify-center items-center">
							<div className="w-[160px] relative h-[160px]  rounded-full">
								<Image fill={true}  alt="team member image" className="rounded-full" src="https://i.ibb.co/ynSJcd5/129303963-2799082077sdfsdf017088-4714356675360439919-n-1.jpg" />
							</div>
						</div>

						<div>
							<h1 className="text-[28px] duration-500 leading-snug text-center pt-6 text-black font-semibold ">
								Sagor Ahmed{" "}
							</h1>
							<p className="text-center font-[13px] text-[#9E9E9E] mb-5">
								Founder & CEO, Web Developer
							</p>

							<div>
								<div className="flex justify-center gap-3  mt-16   text-3xl">
									<a href="https://twitter.com/developerSagor">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#2BA1E9] duration-500 rounded-full">
											<RiTwitterFill className="text-white "></RiTwitterFill>
										</div>
									</a>
									<a href="https://www.facebook.com/sagorahmed090400/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#4A6399] duration-500 rounded-full">
											<RiFacebookFill className="text-white"></RiFacebookFill>
										</div>
									</a>
									<a href="https://www.instagram.com/sagorahmed090400/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#E400E9] duration-500 rounded-full">
											<RiInstagramFill className="text-white"></RiInstagramFill>
										</div>
									</a>

									<a href="https://www.linkedin.com/in/sagor-ahmed-02a472271/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#0A66C2] duration-500 rounded-full">
											<FaLinkedinIn className=" text-white"></FaLinkedinIn>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" addClass   hover:drop-shadow-2xl duration-500  ">
					<div className=" bg-white w-[358px] rounded-3xl mx-auto my-10 h-[431px]">
						<div className="avatar pt-[35px] flex justify-center items-center">
							<div className="w-[160px] relative h-[160px]  rounded-full">
								<Image fill={true}  alt="team member image" className="rounded-full" src="https://i.ibb.co/ynSJcd5/129303963-2799082077sdfsdf017088-4714356675360439919-n-1.jpg" />
							</div>
						</div>

						<div>
							<h1 className="text-[28px] duration-500 leading-snug text-center pt-6 text-black font-semibold ">
								Sagor Ahmed{" "}
							</h1>
							<p className="text-center font-[13px] text-[#9E9E9E] mb-5">
								Founder & CEO, Web Developer
							</p>

							<div>
								<div className="flex justify-center gap-3  mt-16   text-3xl">
									<a href="https://twitter.com/developerSagor">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#2BA1E9] duration-500 rounded-full">
											<RiTwitterFill className="text-white "></RiTwitterFill>
										</div>
									</a>
									<a href="https://www.facebook.com/sagorahmed090400/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#4A6399] duration-500 rounded-full">
											<RiFacebookFill className="text-white"></RiFacebookFill>
										</div>
									</a>
									<a href="https://www.instagram.com/sagorahmed090400/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#E400E9] duration-500 rounded-full">
											<RiInstagramFill className="text-white"></RiInstagramFill>
										</div>
									</a>

									<a href="https://www.linkedin.com/in/sagor-ahmed-02a472271/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#0A66C2] duration-500 rounded-full">
											<FaLinkedinIn className=" text-white"></FaLinkedinIn>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurTeamPage;