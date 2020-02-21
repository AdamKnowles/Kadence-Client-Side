import { Route } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";
import RunList from "./Runs/runlist";
import RunForm from "./Runs/runform"
import RunDetail from "./Runs/rundetail"
import MapBox from "./Runs/mapbox"

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
          path="/mapbox"
          render={props => {
            return( <>
            <MapBox  {...props}/>
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
{
        <Route
        path="/runDetail/:runDetailId(\d+)"
        render={props => {
          const runId = +props.match.params.runDetailId;
          return <RunDetail  runDetailId={runId}   {...props} />;
        }}
      />
}
      
      
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
