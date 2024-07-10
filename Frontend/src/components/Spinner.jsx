import { PulseLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "40px auto",
  textAlign: "center",
};

const Spinner = ({ isLoading }) => {
  return (
    <PulseLoader
      color={"#26292c"}
      cssOverride={override}
      loading={isLoading}
      size={6}
      aria-label="Loading Spinner"
      data-testid="loader"
      speedMultiplier={0.7}
    />
  );
};
export default Spinner;
