import { HiCalendarDays } from "react-icons/hi2";

const FitnessCard = ({
  fitnessValue = "199",
  fitnessMeasure = "Lorem",
  fitnessFeature = "Temperature",
  icon = <HiCalendarDays />,
}) => {
  return (
    <div className="bg-primary text-white w-60 h-24 rounded-medium flex justify-start items-center p-4">
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between">
          <span className="text-lg font-bold">{`${fitnessValue} ${fitnessMeasure}`}</span>
          <div className="text-xl bg-primary-700 flex justify-center items-center h-8 w-8 rounded-small">
            {icon}
          </div>
        </div>
        <span className="text-xs">{fitnessFeature}</span>
      </div>
    </div>
  );
};

export default FitnessCard;
