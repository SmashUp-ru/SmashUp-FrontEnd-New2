import { DialogClose, DialogDescription } from '@/components/ui/dialog.tsx';
import { Button } from '@/components/ui/button.tsx';

interface PasswordDialogSentContentProps {
    email: string;
}

export default function PasswordDialogSentContent({ email }: PasswordDialogSentContentProps) {
    return (
        <DialogDescription className='pt-0 flex flex-col gap-y-[30px]'>
            <span className='font-medium text-[18px] text-onSurfaceVariant text-center'>
                Мы отправили письмо на:
                <br />
                <span className='font-bold text-primary'>{email}</span>
                <br />
                Подтвердите изменение пароля, нажав на кнопку внутри письма.
            </span>

            <DialogClose>
                <Button type='submit' className='w-full'>
                    Хорошо
                </Button>
            </DialogClose>
        </DialogDescription>
    );
}