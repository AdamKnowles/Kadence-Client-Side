import { Route } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";
import RunList from "./Runs/runlist";
import RunForm from "./Runs/runform"

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
      {
        <Route
          exact
          path="/runform"
          render={props => {
            return( <>
            <RunForm  {...props}/>
            </> )
          }}
        />
      }
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
