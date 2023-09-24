import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function ErrorPage() {
  return (
    
    <div >
        <Header></Header>
        <div className="mx-auto py-20 w-[80%] h-96 text-center items-center ">
            <h2 className="text-6xl">404</h2>
            <p className="text-lg">This page Not Found</p>
        </div>
        <Footer></Footer>
    </div>
  )
}
