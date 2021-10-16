import "./App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, Route } from "react-router-dom";
import AppLayout from "./components/app-layout";
import { fetchGigs } from "./actions/gigsAction";
import { Routes } from "./interfaces";

import routes from "./routes";

function App({ gigs, fetchGigs }: any) {
  let history = useHistory();

  useEffect(() => {
    fetchGigs();
    // eslint-disable-next-line
  }, []);

  return (
    <AppLayout history={history}>
      {routes.map(({ name, path, component: Component }: Routes) => (
        <Route
          key={name}
          path={`/${path}`}
          render={(props) => <Component {...props} gigs={gigs} />}
        />
      ))}
    </AppLayout>
  );
}
const mapStateToProps = (state: any) => ({
  gigs: state.gigs,
});
export default connect(mapStateToProps, { fetchGigs })(App);
