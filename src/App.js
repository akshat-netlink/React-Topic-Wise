import React, { useState } from "react";
import InputBoxData from "./InputBoxData";
import Props from "./Props";
import State from "./State";
import RegisterForm from "./RegisterForm";
import ConditionalRendering from "./ConditionalRendering";
import BasicValidation from "./BasicValidation";
import ShouldComponentUpdate from "./ShouldComponentUpdate";
import ComponentWillUnmount from "./ComponentWillUnmount";
import UseEffectHook from "./UseEffectHookParent";
import Styling from "./Styling";
import ArrayLists from "./ArrayLists";
import NestedArray from "./NestedArray";

export default function App() {
  const [name, setName] = useState("Akshat");

  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <State />
          </div>
          <div className="col">
            <Props name={name} />
            <button
              onClick={() => {
                setName("Temp");
              }}
            >
              Update Name
            </button>
          </div>
          <div className="col">
            <InputBoxData />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <RegisterForm />
          </div>
          <div className="col">
            <ConditionalRendering />
          </div>
          <div className="col">
            <BasicValidation />
            
          </div>
        </div>
        <div className="row">
          <div className="col">            
              <ShouldComponentUpdate />
          </div>

          <div className="col">
              <ComponentWillUnmount/>
          </div>

          <div className="col">
              <UseEffectHook/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Styling/>
          </div>
          <div className="col">
            <ArrayLists/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <NestedArray/>
          </div>
        </div>
      </div>
    </>
  );
}
