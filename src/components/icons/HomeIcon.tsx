import { cn } from '@/lib/utils.ts';
import { IconProps } from '@/components/icons/props.tsx';

export default function HomeIcon({
    className,
    color = 'onSurfaceVariant',
    size = 25,
    height,
    width
}: IconProps) {
    return (
        <svg
            width={size ? size : width}
            height={size ? size : height}
            viewBox='0 0 25 25'
            xmlns='http://www.w3.org/2000/svg'
            className={cn(`text-${color}`, 'fill-current', className)}
        >
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M12.7494 3.25935C12.5873 3.20703 12.4127 3.20703 12.2506 3.25935C12.2317 3.26607 12.1562 3.29291 11.9553 3.46205C11.7449 3.64059 11.4834 3.89833 11.0694 4.31044L3.83573 11.515C3.32742 12.0198 3.21955 12.1393 3.14539 12.2601C3.06393 12.3922 3.00387 12.5362 2.96742 12.6869C2.93506 12.8239 2.92697 12.985 2.92697 13.6991V20.3748C2.92697 20.9587 2.92697 21.3239 2.94989 21.5991C2.97146 21.8595 3.00652 21.932 3.01461 21.9481C3.09226 22.1002 3.21643 22.2238 3.36921 22.3011C3.38539 22.3092 3.4582 22.3441 3.71978 22.3656C3.99618 22.387 4.36292 22.3884 4.94944 22.3884H8.58989V18.0927C8.58989 17.0603 9.00185 16.0701 9.73513 15.34C10.4684 14.61 11.463 14.1998 12.5 14.1998C13.537 14.1998 14.5316 14.61 15.2649 15.34C15.9982 16.0701 16.4101 17.0603 16.4101 18.0927V22.3884H20.0506C20.6371 22.3884 21.0038 22.3884 21.2802 22.3642C21.5418 22.3441 21.6146 22.3092 21.6308 22.3011C21.7836 22.2238 21.9077 22.1002 21.9854 21.9481C21.9935 21.932 22.0285 21.8595 22.0488 21.5991C22.0717 21.3239 22.073 20.9587 22.073 20.3748V13.6978C22.073 12.9836 22.0649 12.8225 22.0326 12.6856C21.9962 12.5349 21.9361 12.3908 21.8546 12.2587C21.7804 12.1379 21.6712 12.0184 21.1643 11.5137L13.9306 4.31044C13.5153 3.89833 13.2564 3.64059 13.0434 3.46205C12.8438 3.29291 12.7683 3.26607 12.7494 3.2607V3.25935ZM11.4996 0.962527C12.1498 0.752074 12.8502 0.752074 13.5005 0.962527C13.944 1.10616 14.2987 1.35316 14.6142 1.6203C14.9108 1.86998 15.2411 2.19887 15.6146 2.57071L22.882 9.80618L22.9562 9.88001C23.3485 10.2706 23.6802 10.5995 23.9243 10.9955C24.1385 11.3438 24.2964 11.7234 24.3921 12.1205C24.5 12.5728 24.5 13.0387 24.5 13.5904V20.4191C24.5 20.9453 24.5 21.4098 24.469 21.7951C24.4353 22.2058 24.3598 22.6314 24.1467 23.0462C23.8366 23.6518 23.342 24.1442 22.7337 24.453C22.3171 24.6651 21.8897 24.7403 21.4784 24.7738C21.0901 24.8047 20.6236 24.8047 20.0951 24.8047H15.4528C15.0634 24.8047 14.6899 24.6507 14.4146 24.3765C14.1392 24.1024 13.9845 23.7305 13.9845 23.3428V18.0927C13.9845 17.7011 13.8282 17.3255 13.5501 17.0486C13.2719 16.7717 12.8947 16.6161 12.5014 16.6161C12.108 16.6161 11.7307 16.7717 11.4526 17.0486C11.1745 17.3255 11.0182 17.7011 11.0182 18.0927V23.3428C11.0182 24.1509 10.3616 24.8047 9.54989 24.8047H4.90494C4.3764 24.8047 3.90989 24.8047 3.52292 24.7738C3.11034 24.7403 2.68292 24.6651 2.26629 24.453C1.658 24.1442 1.1634 23.6518 0.853259 23.0462C0.663502 22.6546 0.553957 22.2293 0.531011 21.7951C0.5 21.4098 0.5 20.9453 0.5 20.4191V13.6964V13.5904C0.5 13.0387 0.5 12.5728 0.607865 12.1205C0.703596 11.7231 0.861348 11.3446 1.07573 10.9955C1.31978 10.5995 1.65146 10.2706 2.04382 9.88136L2.11933 9.80484L9.38674 2.57071C9.75888 2.19887 10.0879 1.86998 10.3845 1.6203C10.7013 1.35316 11.056 1.10616 11.4996 0.962527Z'
            />
        </svg>
    );
}