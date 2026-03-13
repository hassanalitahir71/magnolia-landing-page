import DestinatioSection from "./components/DestinatioSection";
import Header from "./components/header";
import Herosection from "./components/Herosection";
import OurServices from "./components/OurServices";
import TestimonialsSection from "./components/TestimonialsSection";

function FrontPage() {
  return (
    <container className="flex flex-col items-center bg-backColor pt-5  justify-center gap-15">
      {" "}
      <Header />
      <Herosection />
      <OurServices />
      <DestinatioSection/>
      <TestimonialsSection/>
    </container>
  );
}

export default FrontPage;
