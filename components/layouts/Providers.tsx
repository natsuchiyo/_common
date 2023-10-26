'use client';

import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
import { customTheme } from "../../theme/theme";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { toastOptions } from "../../functions/hooks/useToast";



export function Providers({ children }: PropsWithChildren) {

    return (
        <RecoilRoot>
            <ChakraProvider theme={customTheme} toastOptions={toastOptions}>
                <GoogleAnalytics trackPageViews />
                {children}
            </ChakraProvider>
        </RecoilRoot>
    );
};