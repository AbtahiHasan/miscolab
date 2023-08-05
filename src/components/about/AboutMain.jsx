import motto from "/public/about-us/motto.jpg"
import vision from "/public/about-us/vision.png"
import Image from 'next/image';

const AboutMain = () => {
    return (
        <main className='container'>
            <div>

                <div className='grid items-center gap-4 my-20 md:grid-cols-2'>
                    <div>
                        <h2 className='mb-5 text-2xl font-semibold'>Our Motto</h2>
                        <p className='mb-2'>1. First of all, become friendly to yourself and have a strong will ahead of the illusion</p>
                        <p className='mb-2'>2. Individuals become friendly with each other and keep in mind continuous employment relationships</p>
                        <p className='mb-2'>3. Understand and master the principles of luck, knowledge, and body</p>
                        <p className='mb-2'>4. Make full use of life navigation to work in a well-balanced manner and enjoy life</p>
                        <p className='mb-2'>5. Use star observation to train your introspection and appearance</p>
                        <p className='mb-2'>6. Look ahead with compassion and make success a habit</p>
                        <p className='mb-2'>7. Circulate brightness and fun to the world</p>
                        <p className='mb-2'>8. Enhance yourself with original methods of existence</p>
                        <p className='mb-2'>9. I keep a promise</p>
                        <p className='mb-2'>10. Know and practice the importance of goodness and compassion every day</p>
                    </div>
                    <Image src={motto} alt='' />
                </div>
                <div className='grid items-center gap-10 my-20 md:grid-cols-2'>
                    <Image src={vision} alt='' />
                    <div>
                        <h2 className='mb-5 text-2xl font-semibold'>Our Vision</h2>
                        <p className='mb-2'>1. Contributing to the world with an attractive and friendly organization</p>
                        <p className="mb-2">
                        2. Good care that is passed down from generation to generation
                        </p>
                        <p className="mb-2">3. Coordinating know-how and ideas to solve all poverty and difficult trouble</p>
                        <p className="mb-2">4. Share of profits from each period will be donated to disaster-stricken areas to assist in reconstruction</p>
                        <p className="mb-2">5. To create world class entrepreneurs from Bangladesh</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutMain;