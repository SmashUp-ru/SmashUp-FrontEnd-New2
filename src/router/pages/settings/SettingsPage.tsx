import { useSettingsPageData } from '@/router/features/settings/useSettingsPageData.ts';
import { useEffect, useState } from 'react';
import { Label } from '@/components/ui/label.tsx';
import ChevronRightIcon from '@/components/icons/ChevronRight.tsx';
import { Link } from 'react-router-dom';
import VKIcon from '@/components/icons/VK.tsx';
import { Switch } from '@/components/ui/switch.tsx';
import { explicitAllowed, multisessionAllowed } from '@/lib/bitmask.ts';
import { Slider } from '@/components/ui/slider.tsx';
import SettingsPageSkeleton from '@/router/pages/settings/SettingsPageSkeleton.tsx';
import { useGlobalStore } from '@/store/global.ts';
import UsernameDialog from '@/router/features/settings/UsernameDialog.tsx';
import EmailDialog from '@/router/features/settings/EmailDialog.tsx';
import PasswordDialog from '@/router/features/settings/PasswordDialog.tsx';
import UpdateAvatar from '@/router/features/toasts/UpdateAvatar.tsx';

export default function SettingsPage() {
    const { settings, isLoading, email } = useSettingsPageData();

    const currentUser = useGlobalStore((state) => state.currentUser);

    const [allowMultisessions, setAllowMultisessions] = useState(false);
    const [showExplicit, setShowExplicit] = useState(false);
    const [bitrate, setBitrate] = useState(3);

    useEffect(() => {
        if (settings !== null) {
            setAllowMultisessions(multisessionAllowed(settings));
            setShowExplicit(explicitAllowed(settings));
        }
    }, [settings]);

    if (!currentUser) return null;
    if (isLoading) return <SettingsPageSkeleton />;

    return (
        <section className='flex flex-col gap-y-6 pr-[35px]'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-4xl text-onSurface'>Настройки</h1>
            </div>
            <div className='w-full flex gap-x-12'>
                <UpdateAvatar />

                {/*настройки*/}
                <div className='w-full flex flex-col gap-y-[75px]'>
                    {/*настройки профиля*/}
                    <div className='w-full flex flex-col gap-y-[30px]'>
                        <h2 className='font-bold text-[32px]'>Настройки профиля</h2>
                        <UsernameDialog username={currentUser.username} />

                        <EmailDialog email={email} />

                        <PasswordDialog />

                        <div className='grid grid-cols-3 gap-x-20'>
                            <Link to='#' className='flex items-center justify-between'>
                                <div className='flex gap-x-[25px] items-center'>
                                    <VKIcon size={32} />
                                    <div className='flex flex-col'>
                                        <span className='font-medium text-onSurfaceVariant'>
                                            Не подключено
                                        </span>
                                        <span className='font-bold text-[24px] text-onSurface'>
                                            VK
                                        </span>
                                    </div>
                                </div>
                                <ChevronRightIcon width={13} height={23} />
                            </Link>
                        </div>
                    </div>

                    {/*настройки аккаунта*/}
                    <div className='w-full flex flex-col gap-y-[30px]'>
                        <h2 className='font-bold text-[32px]'>Настройки профиля</h2>
                        <div className='grid grid-cols-2 2xl:grid-cols-3 gap-x-20 items-center'>
                            <div className='flex items-center gap-x-10'>
                                <Label className='w-1/2 font-medium text-[18px] text-onSurfaceVariant'>
                                    Битрейт мэшапов
                                </Label>
                                <div className='w-full relative'>
                                    <Slider
                                        min={0}
                                        max={4}
                                        step={1}
                                        value={[bitrate]}
                                        showMarks={true}
                                        onValueChange={(v) => setBitrate(v[0])}
                                        className='z-30'
                                        rangeClassName='bg-primary'
                                        thumbClassName='bg-onSurface h-[30px] w-2.5 rounded-[2.8px]'
                                        captions={['64', '96', '128', '160', 'Ориг']}
                                    />
                                </div>
                            </div>

                            <div className='flex items-center justify-between'>
                                <Label className='font-medium text-[18px] text-onSurfaceVariant'>
                                    Разрешить мультисессии
                                </Label>
                                <Switch
                                    checked={allowMultisessions}
                                    onCheckedChange={(v) => setAllowMultisessions(v)}
                                    className='h-8 w-16 '
                                    thumbClassName='h-8 w-8 data-[state=checked]:translate-x-7'
                                />
                            </div>

                            <div className='flex items-center justify-between'>
                                <Label className='font-medium text-[18px] text-onSurfaceVariant'>
                                    Показывать Explicit-контент
                                </Label>
                                <Switch
                                    className='h-8 w-16 '
                                    checked={showExplicit}
                                    onCheckedChange={(v) => setShowExplicit(v)}
                                    thumbClassName='h-8 w-8 data-[state=checked]:translate-x-7'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
