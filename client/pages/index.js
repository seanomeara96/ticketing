import axios from "axios";
const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === "undefined") {
    // we are on the server
    // request should be made to http://SERVICENAME.NAMESPACE.svc.cluster.local
    // kubectl get namespaces
    // kubectl get services -n [namespace-name]
    const { data } = await axios.get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
      {
        headers: req.headers,
        // forward headers so that hostname and cookies can be accessed via this internal route
      }
    );
    return data;
  } else {
    // we are on the browser
    // requests can be made to ticketing.dev as base url
    const { data } = await axios.get("/api/users/currentuser");
    return data;
  }
  return {};
};

export default LandingPage;
