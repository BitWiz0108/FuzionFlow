"use client";

import * as React from "react";

import { useGoogleMaps } from "react-hook-google-maps";

const App = () => {
  
  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
    // NOTE: even if you change options later
    {
      center: { lat: 33.7849948122061, lng: -84.38385425889547 },
      zoom: 10,
    }
  );
  return (
    <div className="flex items-center justify-center px-10">
      <div ref={ref} className="w-full h-[400px]" />;
    </div>
  );
};

export default App;
