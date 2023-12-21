import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

const queryClient = new QueryClient();
// eslint-disable-next-line react/function-component-definition
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </main>
  );
}
