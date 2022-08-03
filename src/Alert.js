import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  });

  return (
    <div className={`${type}`}>
      <h3 className="text-xs">{msg}</h3>
    </div>
  );
};

export default Alert;
