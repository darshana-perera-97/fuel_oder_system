import React from "react";
import Design from "./Design";
import LoadingSc from "./LoadingSc/LoadingSc";

export default function Des() {
  const [e, setE] = React.useState(false);
  setTimeout(() => {
    setE(true);
  }, 3000);
  return (
    <div>
      {e && <Design />}
      {!e && <LoadingSc />}
    </div>
  );
}
