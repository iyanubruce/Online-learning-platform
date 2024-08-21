import Image from "next/image"
import styles from "./dash.module.css"
export default function Dashboard() {
  return (
    <>
          {/* Welcome Message & Quick Stats */}
          <div className={`p-6 ${styles.glass} rounded-lg shadow-md mb-6`}>
        <h1 className="text-2xl font-bold">Welcome, Jane!</h1>
        <p className="mt-2 text-whitish">Here&apos;s an overview of your teaching activity</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-bgCard p-4 rounded-lg">
            <h2 className="text-lg text-bgCtext font-semibold">Total Students</h2>
            <p className="text-2xl text-whit2 font-bold">1,200</p>
          </div>
          <div className="bg-bgCard p-4 rounded-lg">
            <h2 className="text-lg text-bgCtext font-semibold">Courses Published</h2>
            <p className="text-2xl text-whit2 font-bold">5</p>
          </div>
          <div className="bg-bgCard p-4 rounded-lg">
            <h2 className="text-lg text-bgCtext font-semibold">Average Rating</h2>
            <p className="text-2xl text-whit2 font-bold">4.7</p>
          </div>
          <div className="bg-bgCard p-4 rounded-lg">
            <h2 className="text-lg text-bgCtext font-semibold">Total Earnings</h2>
            <p className="text-2xl text-whit2 font-bold">$10,000</p>
          </div>
        </div>
      </div>

      {/* Recent Activity Feed */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="bg-searchGray p-4 rounded-lg shadow-md">
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span>New student enrolled in &quot;Course Title 1&quot;</span>
              <span className="text-gray-600">5 minutes ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>New comment on &quot;Course Title 2&quot;</span>
              <span className="text-gray-600">10 minutes ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Assignment submitted for &quot;Course Title 3&quot;</span>
              <span className="text-gray-600">20 minutes ago</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Course Performance Insights */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Course Performance Insights</h2>
        <div className="bg-searchGray p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Engagement Analytics</h3>
              <Image width={100} height={50} src="/" alt="Engagement Analytics Chart" className="rounded-md" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Student Progress Tracking</h3>
              <Image width={100} height={50} src="/" alt="Student Progress Chart" className="rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Revenue and Earnings */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Revenue and Earnings</h2>
        <div className="bg-searchGray p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Earnings Overview</h3>
              <Image width={100} height={50} src="/" alt="Earnings Overview Chart" className="rounded-md" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Detailed Transaction History</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span>Course Title 1 - $200</span>
                  <span className="text-gray-600">Oct 1, 2023</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Course Title 2 - $150</span>
                  <span className="text-gray-600">Oct 2, 2023</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Course Title 3 - $300</span>
                  <span className="text-gray-600">Oct 3, 2023</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
