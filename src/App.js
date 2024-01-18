import React from 'react';
import { ApplicationInsights } from '@microsoft/applicationinsights-web'

function App() {
  
const appInsights = new ApplicationInsights({ config: {
  connectionString: 'InstrumentationKey=655daf8d-e697-4d5a-82cf-9e5528d6292c;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/'
} });
appInsights.loadAppInsights();
appInsights.trackPageView();
  const value = 'World';
  return <div>Hello {value}</div>;
}

export default App;
