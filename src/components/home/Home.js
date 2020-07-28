import React from 'react';
import News from './../events/News';
import { withRouter } from "react-router-dom";

function Home({ location }) {
  return ( 
    <section className="route-section">
      <News />
    </section>
  );
}
 
export default withRouter(Home);