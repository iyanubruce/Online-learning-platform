import Image from "next/image";
import Link from "next/link"
type title = { 
  title: string,
  description: string,
  lessons: number,
  author: string,
  link: string,
  category: string
}
export default function CourseRecommendationCard({ title, description, lessons, author, link, category } : title) {

    return (
      <Link href={`/${link}`} className="bg-[#263238] p-4 aspect-square hover:scale-[1.01] transition duration-[400ms] rounded-lg relative isolate shadow-md shadow-white flex flex-col">
        <Image
          src="/HeroImage.svg"
          alt="Course Thumbnail"
          className="rounded-md mb-4 object-cover z-[-1]"
          layout="fill"
        />
        <div className="flex justify-between">
          <span> 
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="38" height="38" rx="19" fill="#56CCF2"/>
            <path d="M19 28L12 24.2V18.2L8 16L19 10L30 16V24H28V17.1L26 18.2V24.2L19 28ZM19 19.7L25.85 16L19 12.3L12.15 16L19 19.7ZM19 25.725L24 23.025V19.25L19 22L14 19.25V23.025L19 25.725Z" fill="white"/>
            </svg>
          </span>
          <span className="flex gap-2">
            <span>{lessons}</span>
            <span>Lessons</span>
          </span>
        </div>
        <div className="absolute top-14 left-0 max-w-[100px]">
          <h3 className="text-lg font-semibold mt-5 pt-1 pl-7 pb-1 pr-1 max-w-[250px] bg-[#0D4059] w-max bg-opacity-75 rounded-md">{title}</h3>
          <p className="bg-[#2D9CDB] w-max p-1 pl-7 bg-opacity-75 max-w-[250px]">{description}</p>
        </div> 
        <p className="mt-auto">{author}</p>
      </Link>
    );

  }