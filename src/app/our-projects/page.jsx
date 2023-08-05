import Projects from "@/components/our-projects/main";


const OurProjectPage = () => {
    return (
        <div className="container">
            
				<div
					className="h-[60vh]  bg-[white] pb-5"
					style={{
						backgroundImage: `url("https://i.ibb.co/s2pn0Bg/marvin-meyer-SYTO3xs06f-U-unsplash-min.jpg")`,
						backgroundSize: "cover",
					}}
				>
					<h1 className="text-6xl text-center text-[white] pt-32 font-bold">
						Misco<span>Lab</span> Projects
					</h1>
				</div>
                <div>
                <Projects/>
                </div>
            </div>
				
    );
};

export default OurProjectPage;