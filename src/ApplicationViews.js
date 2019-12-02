import { Route } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";
import RunList from "./Runs/runlist";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      {
        <Route
          exact
          path="/"
          render={props => {
            return( <>
            <RunList  {...props}/>
            </> )
          }}
        />
      }
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
