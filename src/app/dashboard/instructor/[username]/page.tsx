import Image from "next/image"
import styles from "./dash.module.css"
import { orders } from "@/components/Arrays/orders";
export default function Dashboard() {
  return (
    <div className="p-10 text-white">
      <div className="w-full grid gap-3 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 auto-rows-auto">
        <div className={`${styles.analytics}`}> 
          <div>
            <span>
              Total Revenue
            </span>
            <span>
              $
            </span>
          </div>
          <div>
            $45,231.89
          </div>
          <div>
            +20% from last month
          </div>
        </div>
        <div className={`${styles.analytics}`}>
        <div>
            <span>
              Purchases
            </span>
            <span>
              $
            </span>
          </div>
          <div>
            +2350
          </div>
          <div>
            +180.1% from last month
          </div>
        </div>
        <div className={`${styles.analytics}`}>
        <div>
            <span>
              Withdrawn
            </span>
            <span>
              $
            </span>
          </div>
          <div>
            $1,231.80
          </div>
        </div>
        <div className={`${styles.analytics}`}>
        <div>
            <span>
              Total Revenue
            </span>
            <span>
              $
            </span>
          </div>
          <div>
            $45,231.89
          </div>
          <div>
            +20% from last month
          </div>
        </div>
      </div>
      <div className="w-full border border-gray-500 mt-7 h-[500px] rounded p-5 flex-col flex">
        <div className="flex flex-col pb">
          <span className="text-2xl font-bold pb-2">Your courses</span>
          <span className="text-sm pb-2"> Manage your Courses and veiw their sales and ratings</span>
        </div>
        <div className="w-full h-[85%] border border-gray-500 p-2">
          <div className={`${styles.list} ${styles.header}`}>
            <div>

            </div>
            <div>
              Name
            </div>
            <div>
              Category
            </div>
            <div>
              Price
            </div>
            <div>
              Total Sales
            </div>
            <div >
              Created At
            </div>
          </div>
          <div className="overflow-y-scroll h-[90%]">
          {orders.map((course, index) => (
            <div key={index} className={`${styles.list} ${styles.content}`}>
            <div>
              <Image src={course.imageurl} width={60} height={60} alt="hs" />
            </div>
            <div>
              {course.name}
            </div>
            <div>
              {course.category}
            </div>
            <div>
              {course.price}
            </div>
            <div>
              {course.totalSales}
            </div>
            <div >
              {course.createdAt}
            </div>
          </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
