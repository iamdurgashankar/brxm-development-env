/**
 * Mock API Service
 * Provides fallback data when Bloomreach API is not accessible
 */

export const mockApiClient = {
  get: (url) => {
    console.log("Mock API: GET", url);
    
    return Promise.resolve({
      status: 200,
      data: {
        page: {
          document: {
            id: "mock-document",
            name: "home",
            path: "/",
          },
          components: [
            {
              id: "header-component",
              name: "farnell-header",
              type: "org.bloomreach.cm1:container",
              children: [],
            },
            {
              id: "promo-component",
              name: "promo-ticker",
              type: "org.bloomreach.cm1:container",
              children: [],
            },
            {
              id: "hero-component",
              name: "hero-panel",
              type: "org.bloomreach.cm1:container",
              children: [],
            },
          ],
        },
      },
      headers: {},
      config: {},
    });
  },
  
  post: (url, data) => {
    console.log("Mock API: POST", url, data);
    return Promise.resolve({
      status: 200,
      data: { success: true },
      headers: {},
      config: {},
    });
  },
  
  request: (config) => {
    console.log("Mock API: REQUEST", config);
    return this.get(config.url);
  },
};
