import clsx from 'clsx';
import React from 'react';




type TitleSize = 'xs' | 'sm' | 'md' | 'xl'  | '2xl';

interface Props {
    size?: TitleSize;

    classname?: string;

    text: string;
}