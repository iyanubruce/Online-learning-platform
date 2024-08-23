import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./index.module.css"
import { images } from "@/components/Arrays/images";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <>
      <div className="m-0">
        <Navbar />
        <div className={`${styles.Hero}`}>
          <div className={`flex w-11/12 justify-center items-center gap-20`}>
            <div className="flex flex-col justify-center">
              <span className={`${styles.hText}`}>
                Stellar Study
              </span>
              <span className={`${styles.hpar}`}>
                Create courses, track progress & engage learners
              </span>
              <form>
              <span className={`flex items-center bg-searchGray p-3 rounded-3xl mt-12`}>
                <input type="text" name="Search" placeholder="Find a course, instuctor or topic" className={`${styles.Hsearch}`}/>
              <button type="submit" className={`ml-auto`}>
                  <Image src="/search.svg" height={30} width={30} alt="searchicon" />
              </button>
              </span>
              </form>
            </div>
            <div className={`${styles.himg}`}>
              <Image src="/HeroImage.svg" alt='hero imaage' width={300} height={300}/>
            </div>
          </div>
        </div>
        
        <div className={`w-screen flex flex-col items-center`}>
          <span className="text-4xl text-white font-bold">
            Categories
          </span>
          <div className="flex w-11/12 mt-16 gap-4 flex-wrap">
            {images.map((image, index) => (
              <div className="flex-grow h-48 bg-searchGray flex flex-col items-center pt-4 rounded-3xl" key={index}>
              <span className="text-xl text-white font-bold">
                {image.text}
              </span>
              <span className="mt-auto mb-4">
                <Image src={`/${image.url}`} alt="Icon" width={100} height={100}/>
              </span>
            </div>
            ))}
          </div>
          <div className={`w-screen flex justify-center mt-20`}>
            <div className="w-11/12 grid gap-4 grid-cols-12">
              <div className="col-span-3 flex flex-col items-center">
                <div className="w-full bg-searchGray h-16 flex items-center gap-4 pl-6 rounded-xl">
                  <Image src="/icon.svg" alt='icon' width={30} height={30}/> <span className="text-2xl text-white font-bold">Manage Users</span>
                </div>
                <div className={`${styles.AnounCont}`}>
                  <span>
                    Cybersecurity
                  </span>
                  <span>
                    by Stellar Study
                  </span>
                  <span>
                    <Image src="/categories1.svg" alt="image" width={150} height={150} />
                  </span>
                  <button> Enroll Now </button>
                </div>
                <div className={`${styles.AnounCont}`}>
                  <span>
                    Exciting Updates
                  </span>
                  <span>
                    explore latest features
                  </span>
                  <span>
                    <Image src="/card.svg" alt="image" width={150} height={150} />
                  </span>
                  <button> Join Now </button>
                </div>
                <div className={`${styles.AnounCont}`}>
                  <span>Special Discount</span>
                  <span>Ends soon</span>
                  <div className={`${styles.time}`}> 
                    <span>1</span>
                    <span>2</span>
                    <span>:</span>
                    <span>5</span>
                    <span>7</span>
                  </div>
                </div>
              </div>

              <div className="col-span-9">
                <div className="w-full bg-searchGray h-16 mb-7 flex items-center gap-4 pl-6 rounded-xl">
                  <Image src="/Herowithoutbg.svg" alt='icon' width={30} height={30}/>
                  <span className="text-2xl text-white font-bold">Features</span>
                </div>
                <div className=" grid grid-cols-3 gap-4 justify-between gap-y-5 mb-20">
                  <div className={`${styles.features}`}>
                    <div>
                      <Image src={`/Interactive.png`} fill alt='featuresImage' className="rounded-2xl"/>
                    </div>
                    <span>
                      Interactive Lectures
                    </span>
                  </div>
                  <div className={`${styles.features}`}>
                    <div>
                      <Image src={`/CertificationCourse.jpeg`} fill alt='featuresImage' className="rounded-2xl"/>
                    </div>
                    <span>
                      Certification Courses
                    </span>
                  </div>
                  <div className={`${styles.features}`}>
                    <div>
                      <Image src={`/DigitalCourses.jpeg`} fill alt='featuresImage' className="rounded-2xl"/>
                    </div>
                    <span>
                      Digital Course Materials
                    </span>
                  </div>
                  <div className={`${styles.features}`}>
                    <div>
                      <Image src={`/DigitalCourses.jpeg`} fill alt='featuresImage' className="rounded-2xl"/>
                    </div>
                    <span>
                      Discover New Courses Daily
                    </span>
                  </div>
                  <div className={`${styles.features}`}>
                    <div>
                      <Image src={`/EngagingLessons.jpeg`} fill alt='featuresImage' className="rounded-2xl"/>
                    </div>
                    <span>
                      Engaging Lessons
                    </span>
                  </div>
                  <div className={`${styles.features}`}>
                    <div>
                      <Image src={`/pace.jpeg`} fill alt='featuresImage' className="rounded-2xl"/>
                    </div>
                    <span>
                      Learn at your own pace
                    </span>
                  </div>
                </div>
                <div className="w-full bg-searchGray h-16 mb-7 flex items-center gap-4 pl-6 rounded-xl">
                  <Image src="/paw.svg" alt='icon' width={30} height={30}/>
                  <span className="text-2xl text-white font-bold">Top Course Categories</span>
                </div>
                <div className="grid grid-cols-2 gap-5 w-full">
                  <div className="flex flex-col justify-center items-center h-64 bg-cover bg-center relative" style={{background: `url(/Softwaredev.jpg)`}}>
                    <span className="text-white text-xl font-bold mb-3 z-10">Software Development</span>
                    <span className="text-white mb-3 z-10">Boost your tech career with certifications </span>
                    <button className="bg-btnColor text-white rounded-xl p-4 text-xl z-10">Enroll Now</button>
                    <div className="w-full h-full bg-gray-900 z-0 absolute top-0 left-0 opacity-[0.7]"></div>
                  </div> 
                  <div className="flex flex-col justify-center bg-searchGray items-center  h-64 bg-cover bg-center relative" style={{background:`url(/artDesign.avif)`}}>
                    <span className="text-white text-xl font-bold mb-3 z-10">Software Development</span>
                    <span className="text-white mb-3 z-10">Boost your tech career with certifications </span>
                    <button className="bg-btnColor p-4 text-white rounded-xl text-xl z-10">Enroll Now</button>
                    <div className="w-full h-full bg-gray-900 z-0 absolute top-0 left-0 opacity-[0.7]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-searchGray w-screen flex justify-center mt-32">
            <div className="flex flex-col w-11/12 justify-center pt-20 pb-20">
              <span className="text-white text-2xl font-bold text-center mb-20">Discover New Insights</span>
              <div className="grid grid-cols-3 gap-4">

                <div className={`${styles.insights}`}>
                  <div>
                    <Image src="/insight1.jpeg" alt="in image" fill className='rounded-3xl'/>
                  </div>
                  <div>
                    Effective Learning Stategies
                  </div>
                  <div>
                    Learn how to enhance your study techniques
                  </div>
                  <div>
                    <span><Image alt="icon" width={40} height={40} src="/Herowithoutbg.svg" /></span>
                    <span>by Stellar Study</span>
                  </div>
                </div>
               
                <div className={`${styles.insights}`}>
                  <div>
                    <Image src="/insight2.jpeg" alt="in image" fill className='rounded-3xl'/>
                  </div>
                  <div>
                    Effective Learning Stategies
                  </div>
                  <div>
                    Learn how to enhance your study techniques
                  </div>
                  <div>
                    <span><Image alt="icon" width={40} height={40} src="/Herowithoutbg.svg" /></span>
                    <span>by Stellar Study</span>
                  </div>
                </div>
               
                <div className={`${styles.insights}`}>
                  <div>
                    <Image src="/insight3.jpeg" alt="in image" fill className='rounded-3xl'/>
                  </div>
                  <div>
                    Effective Learning Stategies
                  </div>
                  <div>
                    Learn how to enhance your study techniques
                  </div>
                  <div>
                    <span><Image alt="icon" width={40} height={40} src="/Herowithoutbg.svg" /></span>
                    <span>by Stellar Study</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
}