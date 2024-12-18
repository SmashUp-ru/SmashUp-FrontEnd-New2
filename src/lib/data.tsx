import LikeOutlineIcon from '@/components/icons/LikeOutline.tsx';
import HomeIcon from '@/components/icons/HomeIcon.tsx';
import React from 'react';
import { IconProps } from '@/components/icons/props.tsx';

interface NavLink {
    link: string;
    icon: React.FC<IconProps>;
}

export const navLinks: NavLink[] = [
    {
        link: '/',
        icon: HomeIcon
    },
    {
        link: '/favorites',
        icon: LikeOutlineIcon
    }
];
