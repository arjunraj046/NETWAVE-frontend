import empty from "../../../assets/3369473.jpg"
const EmptyComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-7">
      <p className="text-gray-600 text-lg font-semibold mb-2">
        No data available
      </p>
      <img
        src={empty}
        alt="he he he"
        className="w-60 h-60 mb-4 animate-bounce"
      />
      {/* <p className="text-gray-400 text-sm"></p> */}
    </div>
  );
};

export default EmptyComponent;
