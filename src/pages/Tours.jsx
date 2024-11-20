import ChardhamTour from "../TourPackages/ChardhamTour";
import ChoptaTungnath from "../TourPackages/ChoptaTungnath";
import Dhanaulti from "../TourPackages/Dhanaulti";
import KauriPassTrek from "../TourPackages/KuariPassTrek";
import Kedarnath from "../TourPackages/Kedarnath";
import RishikeshKanatal from "../TourPackages/RishikeshKanatal";
import SpitiValley from "../TourPackages/SpitiValley";
import ValleyOfFlowers from './../TourPackages/ValleyOfFlowers';

const Tours = () => {
  return (
    <div>
      <div className="p-24 bg-gray-100">
        <ChardhamTour />
        <ChoptaTungnath/>
        <Dhanaulti/>
        <Kedarnath/>
        <KauriPassTrek/>
        <RishikeshKanatal/>
        <SpitiValley/>
        <ValleyOfFlowers/>
      </div>
    </div>
  );
};

export default Tours;
