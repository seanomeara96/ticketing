import axios from "axios";
export default ({ req }) => {
  if (typeof window === "undefined") {
    // on the server
    // request should be made to http://SERVICENAME.NAMESPACE.svc.cluster.local
    // kubectl get namespaces
    // kubectl get services -n [namespace-name]

    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    // on browser
    return axios.create({
      baseURL: "/",
    });
  }
};
