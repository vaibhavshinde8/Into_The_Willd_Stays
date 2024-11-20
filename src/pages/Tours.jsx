import ChardhamTour from "../TourPackages/ChardhamTour";
import ChoptaTungnath from "../TourPackages/ChoptaTungnath";
import Dhanaulti from "../TourPackages/Dhanaulti";
import Kedarnath from "../TourPackages/Kedarnath";

const Tours = () => {
  return (
    <div>
      <div className="p-24 bg-gray-100">
        <ChardhamTour />
        <ChoptaTungnath/>
        <Dhanaulti/>
        <Kedarnath/>
      </div>
    </div>
  );
};

export default Tours;
