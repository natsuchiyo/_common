import { ImageResponse } from "next/og";
import { ReactNode } from "react";
import { customTheme } from "../theme/theme";



export const websiteIconSize = {
    width: 32,
    height: 32,
};


export const websiteIconContentType = 'image/png';



export const createWebsiteIcon = (label: ReactNode) => {

    return function Icon() {

        return new ImageResponse(
            <div
                style={{
                    fontSize: 24,
                    background: customTheme.colors.mainLight,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '10%'
                }}
                children={label}
            />
            , { ...websiteIconSize }
        );
    };
};