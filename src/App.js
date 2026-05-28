import "./App.css";
import axios from "axios";
import { BrPage } from "@bloomreach/react-sdk";
import "./components/farnell/FarnellHome.css";
import {
  BrxCategoryRail,
  BrxFarnellHeader,
  BrxHeroPanel,
  BrxManufacturerCloud,
  BrxProductSection,
  BrxPromoTicker,
  BrxSiteFooter,
  BrxTrustStrip,
} from "./components/farnell/BrxFarnellComponents";
import { BrxTopTechVoicesPage } from "./components/top-tech-voice/BrxTopTechVoicesPage";
import { mockApiClient } from "./services/mockApi";
import { useState, useEffect } from "react";

// Create an axios instance with fallback error handling
const createAxiosInstance = (isUsingMock = false) => {
  const instance = axios.create();
  
  instance.interceptors.response.use(
    response => response,
    error => {
      console.error("API Error - falling back to mock data:", error.message);
      // Use mock API as fallback
      return mockApiClient.get(error.config?.url || "");
    }
  );
  
  return instance;
};

function App() {
  const [httpClient, setHttpClient] = useState(axios);
  const [hasError, setHasError] = useState(false);
  const [isUsingMock, setIsUsingMock] = useState(false);

  useEffect(() => {
    // Try to connect to real API on mount
    const testEndpoint = "https://developers.bloomreach.io/delivery/site/v1/channels/brxm-development-env/pages";
    
    axios.get(testEndpoint, { timeout: 5000 })
      .catch(() => {
        console.warn("Bloomreach API unreachable - switching to mock API fallback");
        setHasError(true);
        setIsUsingMock(true);
        // Use mock API client as fallback
        setHttpClient(createAxiosInstance(true));
      });
  }, []);

  const mapping = {
    FarnellHeader: BrxFarnellHeader,
    "farnell-header": BrxFarnellHeader,
    PromoTicker: BrxPromoTicker,
    "promo-ticker": BrxPromoTicker,
    HeroPanel: BrxHeroPanel,
    "hero-panel": BrxHeroPanel,
    CategoryRail: BrxCategoryRail,
    "category-rail": BrxCategoryRail,
    ProductSection: BrxProductSection,
    "product-section": BrxProductSection,
    ManufacturerCloud: BrxManufacturerCloud,
    "manufacturer-cloud": BrxManufacturerCloud,
    TrustStrip: BrxTrustStrip,
    "trust-strip": BrxTrustStrip,
    SiteFooter: BrxSiteFooter,
    "site-footer": BrxSiteFooter,
    TopTechVoicesPage: BrxTopTechVoicesPage,
    "top-tech-voices-page": BrxTopTechVoicesPage,
  };

  return (
    <>
      {hasError && (
        <div style={{
          padding: "12px 16px",
          backgroundColor: "#fff3cd",
          borderBottom: "2px solid #ffc107",
          color: "#856404",
          fontSize: "13px",
          fontWeight: "500"
        }}>
          ⚠️ <strong>Using Mock API Fallback:</strong> The Bloomreach API endpoint is not accessible. 
          To use live data, check your endpoint URL in App.js or verify your Bloomreach channel is published.
        </div>
      )}
      <BrPage
        configuration={{
          path: `${window.location.pathname}${window.location.search}`,
          endpoint: "https://developers.bloomreach.io/delivery/site/v1/channels/brxm-development-env/pages",
          NBRMode: true,
          httpClient: httpClient,
        }}
        mapping={mapping}
      />
    </>
  );
}

export default App;
