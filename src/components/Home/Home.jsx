import Bannar from "../Bannar/Bannar";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


export default function Home() {
  return (
    <div>
        <Bannar></Bannar>
        <CategoryList></CategoryList>
        <FeaturedJobs></FeaturedJobs>
    </div>
  )
}
