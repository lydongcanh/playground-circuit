import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";
import App from "./App.tsx";
import "@xyflow/react/dist/style.css";
import "@mantine/core/styles.css";

const theme = createTheme({
  primaryColor: "dark",
});

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
