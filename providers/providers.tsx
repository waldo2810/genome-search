"use client";

import { store } from "@/redux/store";
import { ThemeProvider } from "next-themes";
import { Provider as ReduxProvider } from "react-redux";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster richColors position="top-center" />
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default Providers;
