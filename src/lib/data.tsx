import LikeIcon from '@/components/icons/Like.tsx';
import HomeIcon from '@/components/icons/HomeIcon.tsx';
import React from 'react';
import { IconProps } from '@/components/icons/props.tsx';
import AddIcon from '@/components/icons/Add.tsx';

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
        icon: LikeIcon
    },
    {
        link: '/add',
        icon: AddIcon
    }
];