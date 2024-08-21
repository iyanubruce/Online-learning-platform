import Image from "next/image"

type props = { title: string , progress: number};
export default function CourseCard({ title, progress }: props) {
    return (
      <div className="bg-searchGray p-4 rounded-lg shadow-md">
        <Image
          src="/HeroImage.svg"
          alt="Course Thumbnail"
          className="rounded-md mb-4"
          width={300}
          height={180}
        />
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-btnColor h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="ml-2 text-sm text-gray-600">{progress}%</span>
        </div>
        <a href="#" className="mt-4 inline-block bg-btnColor text-white px-4 py-2 rounded-full">
          Continue
        </a>
      </div>
    );
  }
  