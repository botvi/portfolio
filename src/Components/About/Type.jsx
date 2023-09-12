import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Web Developer","Newbie Game Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
