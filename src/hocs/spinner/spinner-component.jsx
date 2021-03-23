import React from "react";

const withSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...props }) =>
    isLoading ? <h1>Loading...</h1> : <WrappedComponent {...props} />;

  return Spinner;
};

export default withSpinner;
