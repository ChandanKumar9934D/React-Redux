import React from "react";

const LoadingSpinner = () => {
  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-border spinnerC" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
