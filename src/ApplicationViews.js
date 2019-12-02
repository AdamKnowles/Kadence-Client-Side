import { Route, Redirect } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      {
        <Route
          exact
          path="/"
          render={props => {
            return <>
            <p>Kadence</p>
            </>;
          }}
        />
      }
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
