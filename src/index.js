import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";

import slides from "./slider/slides";
import CitiesSliderComponent from "./slider/CitiesSliderComponent";

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CitiesSliderComponent slides={slides} />);
