import ChardhamTour from "../TourPackages/ChardhamTour";
import ChoptaTungnath from "../TourPackages/ChoptaTungnath";
import Dhanaulti from "../TourPackages/Dhanaulti";
import KauriPassTrek from "../TourPackages/KuariPassTrek";
import Kedarnath from "../TourPackages/Kedarnath";
import RishikeshKanatal from "../TourPackages/RishikeshKanatal";
import SpitiValley from "../TourPackages/SpitiValley";
import ValleyOfFlowers from './../TourPackages/ValleyOfFlowers';
// import TourBanner from './../components/TourBanner';

const Tours = () => {
  return (
    <div>
      <div className="pt-32 bg-gray-100">
        <div className="bg-[url('https://images.trvl-media.com/lodging/109000000/108380000/108370800/108370765/28b3dc50.jpg?impolicy=resizecrop&rw=1200&ra=fit')] bg-cover bg-center bg-fixed lg:py-24 py-16 flex flex-col items-center lg:gap-4 text-white">
          <h1 className="lg:text-6xl text-3xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-green-500 to-green-700 relative inline-block">
            <span className="relative">Checkout Our Tours and events</span>
          </h1>
        </div>
      </div>
      <div className="p-12 lg:p-32">
        <ChardhamTour />
        <ChoptaTungnath />
        <Dhanaulti />
        <Kedarnath />
        <KauriPassTrek />
        <RishikeshKanatal />
        <SpitiValley />
        <ValleyOfFlowers />
      </div>
      {/* <TourBanner/> */}
    </div>
  );
};

export default Tours;
