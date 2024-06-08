import i18next from "i18next";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// Global styles
import './index.css'

// Store
import store from "./Redux/Store";

// Global files
import global_en from "./Translation/En/global.json";
import global_es from "./Translation/Es/global.json";

// Own router
import { router } from "./Routes";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <PersistGate persistor={persistor}>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </I18nextProvider>
    </Provider>
  </PersistGate>
)
