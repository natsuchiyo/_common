'use client';

import { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

export function RecoilRootClient(props: PropsWithChildren) {
    return (
        <RecoilRoot>
            {props.children}
        </RecoilRoot>
    );
};