import React, { useEffect, useState } from "react";

function Header() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(interval);
  });

  return (
    <div>
      <h3>TodoList</h3>
      <p>
        You have used{" "}
        {timer < 60
          ? timer
          : Math.floor(timer / 60) + " minute/s & " + (timer % 60)}{" "}
        seconds on this website.
      </p>
    </div>
  );
}

export default Header;
