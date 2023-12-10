'use client';

import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
import { customTheme } from "../../theme/theme";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { toastDefaultOptions } from "../../functions/hooks/useToast";



export function Providers({ children }: PropsWithChildren) {

    return (
        <RecoilRoot>
            <ChakraProvider theme={customTheme} toastOptions={toastDefaultOptions}>
                <GoogleAnalytics trackPageViews />
                {children}
            </ChakraProvider>
        </RecoilRoot>
    );
};