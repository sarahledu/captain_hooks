import React from "react";
import ClassCounter from "../Components/ClassCounter";
// import HookCounter from "../Components/HookCounter";

const Intro = () => {
  return (
    <section className="container">
      <h1 className="title">Intro Page</h1>
      <div className="counters">
        <ClassCounter  />
        {/* <HookCounter /> */}
      </div>
    </section>
  );
};

export default Intro;
