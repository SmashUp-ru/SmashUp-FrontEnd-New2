import { Button } from '@/components/ui/button.tsx';
import PlayHollowIcon from '@/components/icons/PlayHollowIcon.tsx';
import HideIcon from '@/components/icons/Hide.tsx';
import ShareIcon from '@/components/icons/Share.tsx';
import { ReactNode } from 'react';

interface MashupCollectionProps {
    title: string;
    name: string;
    children: ReactNode;
    image: string;
}

export default function MashupCollection({ title, name, image, children }: MashupCollectionProps) {
    return (
        <div className='flex flex-col gap-y-6'>
            <div className='flex items-center gap-x-12 bg-surface p-4 rounded-[34px]'>
                <img
                    src={image}
                    alt='radio'
                    className='w-[216px] h-[216px] rounded-[34px]'
                    draggable={false}
                />

                <div className='flex flex-col gap-y-6'>
                    <div>
                        <span className='font-medium text-lg text-additionalText'>{title}</span>
                        <h1 className='font-bold text-4xl text-onSurface'>{name}</h1>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <Button variant='ghost' size='icon'>
                            <PlayHollowIcon />
                        </Button>
                        <Button variant='ghost' size='icon'>
                            <HideIcon />
                        </Button>
                        <Button variant='ghost' size='icon'>
                            <ShareIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-y-1'>{children}</div>
        </div>
    );
}
