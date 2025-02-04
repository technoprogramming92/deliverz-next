import About from "@/components/(frontend)/basic-structure/About";
import Categories from "@/components/(frontend)/basic-structure/Categories";
import DeliveryBanner from "@/components/(frontend)/basic-structure/DeliveryBanner";
import EmailSubscription from "@/components/(frontend)/basic-structure/EmailSubscription";
import Footer from "@/components/(frontend)/basic-structure/Footer";
import Header from "@/components/(frontend)/basic-structure/Header";
import Slider from "@/components/(frontend)/basic-structure/Slider";
import Speciality from "@/components/(frontend)/basic-structure/Speciality";
import Subscriptions from "@/components/(frontend)/basic-structure/Subscriptions";
import Testimonials from "@/components/(frontend)/basic-structure/Testimonials";
import Topbar from "@/components/(frontend)/basic-structure/Topbar";

export default function Home() {
  return (
    <div id="wrapper">
      <Topbar />
      <Header />
      <Slider />
      <Speciality />
      <Categories />
      <Subscriptions />
      <About />
      <Testimonials />
      <DeliveryBanner />
      <EmailSubscription />
      <Footer />
    </div>
  );
}
