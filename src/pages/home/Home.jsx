import React, { useEffect, useState } from "react";
import "./Home.scss";
import Hero from "../../components/Home/Hero/Hero";
import WhyUs from "../../components/Home/WhyUs/WhyUs";
import Approach from "../../components/Home/Approach/Approach";
import Details from "../../components/Details/Details";
import Question from "../../components/Home/Questions/Question";
import { useWebsiteTrackingMutation } from "../../store/tracking/TrackingApiSlice";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import UniLoading from "../../components/loading/Loading";

function Home() {
  const title = "AUVNET";
  const description = "AUVNET";
  const [websiteTracking, { isSuccess }] = useWebsiteTrackingMutation();
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const tr = async () => {
      if (!localStorage.getItem("website-tracking")) {
        await websiteTracking({
          website: localStorage.getItem("ipAddress"),
        }).unwrap();
      }
    };

    tr();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("storedTime", JSON.stringify(Date.now()));
      localStorage.setItem("website-tracking", "true");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setLoaded(false);
      }, 1000);
    }
  }, []);
  localStorage.setItem("services-visited", "false");
  return (
    <>
      <HtmlHead title={title} description={description} />

      <div className="home">
        {loaded ? (
        <UniLoading />
        ) : (
          <>
            <Hero />
            <div className="text-sections">
              <WhyUs />
              <Approach />
              <Question />
              <Details />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
