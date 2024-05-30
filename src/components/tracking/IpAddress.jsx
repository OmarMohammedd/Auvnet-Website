import React, { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

function IpAddress() {
  const [ip, setip] = useState("");
  useEffect(() => {
    const loadFingerprintJS = async () => {
      try {
        // Initialize the agent at application startup.
        const fp = await FingerprintJS.load();

        // Get the visitor identifier when you need it.
        const result = await fp.get();
        // This is the visitor identifier:
        const visitorId = result.visitorId;
        setip(visitorId);
      } catch (error) {
        console.error(error);
      }
    };

    loadFingerprintJS();

    // Clean up if necessary
    return () => {
      // Any clean-up code here
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return ip;
}

export default IpAddress;
