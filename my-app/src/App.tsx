import "./App.css";
// import AppBuilder from "@appbuilder/react";
import AgoraAppBuilder from "@appbuilder/react";
import { useEffect } from "react";
function App() {
  const authenticate = async () => {
    await AgoraAppBuilder.login(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoZW50aWNhdGlvbl90eXBlIjoxLCJhcHBfaWQiOiI3Zjc2NTJhZThjM2I0Y2E4Yjk3YTdiMjBhMTFiYWNmZCIsInVzZXJfaWQiOiJjLTI2OWE1OWRlLWI3YzItNGFjMS05NDJjLTU3YzI3Y2YzNTFkZSIsInByb2plY3RfaWQiOiIzMjAzYmNiMDk5NjBjZDQ3MzY5YyIsImV4cCI6MTc0OTExODE2N30.Jyq71ZHgF90jGaDXh-Aa5MM7EHjHZnYMpOo-z5VKalI"
    );

    //optional
    //if you want to skip user to see the create screen and navigate user to directly to precall screen
    //MEETING_ID generated from Create Channel API
    //await AgoraAppBuilder.joinPrecall("<INSERT_YOUR_MEETING_ID>");
    //more details check the joinPrecall methods
  };

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* <AppBuilder.View /> */}
      <AgoraAppBuilder.View />
    </div>
  );
}

export default App;
