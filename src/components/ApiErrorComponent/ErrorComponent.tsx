import React from "react";

interface ErrorComponentProps {
  isVisible: boolean;
}

function ErrorComponent({
  isVisible,
}: ErrorComponentProps): JSX.Element | null {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="error-component">
      <h1>OOPS SOMETHING WENT WRONG!</h1>
      <h2>PLEASE TRY AGAIN LATER, BY THAT TIME WE WILL FIX IT!</h2>
    </div>
  );
}

export default ErrorComponent;
