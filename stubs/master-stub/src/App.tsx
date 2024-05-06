import React, { useState } from "react";
import "./rental-decl.d.ts";
import "./car-decl.d.ts";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

const RemoteCarRentalForm = React.lazy(() => import("rental/CarRental"));
const CarDragDropContext = React.lazy(
  () => import("car/CarDragDropContext")
);
const AvailableCars = React.lazy(
  () => import("car/AvailableCars")
);

const App = () => {
  const [bpId, setBpId] = useState("");

  return (
    <div className="App">
      <CarDragDropContext>
        <div className="row">
          <h1>Sample final website</h1>
        </div>
        <div className="row">
          <h3>User website / Internal website / Mobile web app / Any other application</h3>
        </div>
        <div className="row">
          <div className="col">
            BusinessPartnerId:
            <input
              type="text"
              value={bpId}
              onChange={(e) => setBpId(e.target.value)}
            />
            <br /><br />
            <div className="RemoteCarRental">
              <RemoteCarRentalForm
                businessPartnerId={bpId}
              />
            </div>
          </div>
          <div className="col">
            <div className="Banner">

            </div>
          </div>
          <div className="col">
            <div className="AvailableCarsHeading"><h1>Available cars:</h1></div>
            <AvailableCars />
          </div>
        </div>
      </CarDragDropContext>
    </div>
  );
};

export default App;
