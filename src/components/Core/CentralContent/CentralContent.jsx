import useDebouncing from "../../../hooks/useDebouncing";
import useThrottling from "../../../hooks/useThrottling";

const CentralContent = props => {


  const updateBaseData = (firstName, lastName) => {
    console.log(`${firstName} ${lastName} updated base data`);
  };

  const throttledUpdateBaseData = useThrottling(updateBaseData.bind(this, 'Yuvraj', 'Patil'), 5000);
  const debouncedUpdateBaseData = useDebouncing(updateBaseData.bind(this, 'Yuvraj', 'Patil'), 5000);

  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold">Centered Content</h1>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button onClick={throttledUpdateBaseData}
            className="btn btn-primary btn-lg px-4 me-sm-3">Update Base Data 1</button>
          <button onClick={debouncedUpdateBaseData}
            className="btn btn-outline-secondary btn-lg px-4">Update Base Data 2</button>
        </div>
      </div>
    </div>
  )
};

export default CentralContent;
