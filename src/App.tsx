import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Caroussel from "./components/Caroussel";
import { fetchPrograms } from "./redux/actions/programsAction";
import { IRootState } from "./redux/store";
import { useSelector } from "react-redux";

import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarrousselData } from "./components/Caroussel/CarousselData";

function App() {
  const dispatch = useDispatch();
  const { programs } = useSelector((state: IRootState) => state.programs);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchPrograms());
  }, [dispatch]);

  return (
    <div className="carousel-container">
      <Caroussel>{CarrousselData(programs)}</Caroussel>
    </div>
  );
}

export default App;
