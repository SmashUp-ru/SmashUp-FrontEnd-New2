import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip.tsx';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import GavelIcon from '@/components/icons/Gavel.tsx';
import { Button } from '@/components/ui/button.tsx';
import DoorIcon from '@/components/icons/Door.tsx';
import { useGlobalStore } from '@/store/global.ts';
import AddMashupIcon from '@/components/icons/AddMashup.tsx';
import { isModerator } from '@/lib/bitmask';

export default function ProfileMenu() {
    const currentUser = useGlobalStore((state) => state.currentUser);
    const updateToken = useGlobalStore((state) => state.updateToken);
    const updateCurrentUser = useGlobalStore((state) => state.updateCurrentUser);

    const navigate = useNavigate();
    // const { isLoading } = useGlobalStore();
    //
    // if (isLoading) return <Skeleton className='w-12 h-12 rounded-full' />;

    if (!currentUser)
        return (
            <Link to='/login' draggable={false}>
                <DoorIcon />
            </Link>
        );

    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger>
                    <Link draggable={false} to={`/user/${currentUser.username}`}>
                        <Avatar className='w-12 h-12'>
                            <AvatarImage
                                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/user/${currentUser.imageUrl}_100x100.png`}
                            />
                            <AvatarFallback>{currentUser.username.charAt(0)}</AvatarFallback>
                        </Avatar>
                    </Link>
                </TooltipTrigger>
                <TooltipContent
                    sideOffset={18}
                    className='flex flex-col gap-y-7 rounded-3xl bg-surfaceVariant border-none p-2'
                >
                    <Link to='/mashup/upload'>
                        <AddMashupIcon />
                    </Link>
                    {isModerator(currentUser.permissions) && (
                        <Link to='/mashup/moderation'>
                            <GavelIcon />
                        </Link>
                    )}
                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => {
                            localStorage.removeItem('smashup_token');
                            sessionStorage.removeItem('smashup_token');
                            updateToken('');
                            navigate('/');
                            updateCurrentUser(null);
                        }}
                    >
                        <DoorIcon color='error' />
                    </Button>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
