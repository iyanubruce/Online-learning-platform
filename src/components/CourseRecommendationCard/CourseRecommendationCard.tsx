import Image from "next/image";
type title = { title: string}
export default function CourseRecommendationCard({ title } : title) {

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
        <a href="#" className="mt-4 inline-block bg-btnColor text-white px-4 py-2 rounded-full">
          Enroll
        </a>
      </div>
    );
  }