import { IconProps } from '@/components/icons/props.tsx';
import { cn } from '@/lib/utils.ts';

export default function DoorIcon({
    className,
    color = 'onSurfaceVariant',
    hoverColor,
    size = 26,
    width,
    height
}: IconProps) {
    return (
        <svg
            width={size ? size : width}
            height={size ? size : height}
            viewBox='0 0 26 26'
            xmlns='http://www.w3.org/2000/svg'
            className={cn(`text-${color} hover:text-${hoverColor}`, 'fill-current', className)}
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.83769 0.428711H11.8583C12.1614 0.428711 12.4521 0.549119 12.6664 0.763446C12.8807 0.977773 13.0011 1.26846 13.0011 1.57157C13.0011 1.87467 12.8807 2.16536 12.6664 2.37969C12.4521 2.59402 12.1614 2.71443 11.8583 2.71443H8.88683C7.5874 2.71443 6.68226 2.71443 5.97712 2.77271C5.28569 2.82985 4.88797 2.935 4.5874 3.08814C3.9423 3.41684 3.41782 3.94133 3.08912 4.58642C2.93597 4.887 2.83083 5.28471 2.77369 5.97614C2.71654 6.68128 2.7154 7.58757 2.7154 8.88585V17.1144C2.7154 18.4139 2.7154 19.319 2.77369 20.0241C2.83083 20.7156 2.93597 21.1133 3.08912 21.4139C3.41782 22.059 3.9423 22.5834 4.5874 22.9121C4.88797 23.0653 5.28569 23.1704 5.97712 23.2276C6.68226 23.2847 7.58854 23.2859 8.88683 23.2859H11.8583C12.1614 23.2859 12.4521 23.4063 12.6664 23.6206C12.8807 23.8349 13.0011 24.1256 13.0011 24.4287C13.0011 24.7318 12.8807 25.0225 12.6664 25.2368C12.4521 25.4512 12.1614 25.5716 11.8583 25.5716H8.83769C7.59883 25.5716 6.59997 25.5716 5.79083 25.5053C4.95883 25.4367 4.22626 25.2939 3.55083 24.9487C2.47524 24.4011 1.60068 23.5269 1.05254 22.4516C0.707402 21.775 0.563402 21.0436 0.495973 20.2104C0.429688 19.4001 0.429688 18.4024 0.429688 17.1636V8.83671C0.429688 7.59785 0.429688 6.599 0.495973 5.78985C0.564545 4.95785 0.707402 4.22528 1.05254 3.54985C1.6 2.47384 2.47418 1.59886 3.54969 1.05043C4.22626 0.705282 4.95883 0.561282 5.79083 0.493854C6.60112 0.428711 7.59883 0.428711 8.83769 0.428711ZM19.0503 7.62071C19.2646 7.40646 19.5552 7.2861 19.8583 7.2861C20.1613 7.2861 20.4519 7.40646 20.6663 7.62071L25.2377 12.1921C25.4519 12.4065 25.5723 12.6971 25.5723 13.0001C25.5723 13.3032 25.4519 13.5938 25.2377 13.8081L20.6663 18.3796C20.4507 18.5877 20.162 18.7029 19.8624 18.7003C19.5627 18.6977 19.2761 18.5775 19.0642 18.3656C18.8523 18.1538 18.7321 17.8671 18.7295 17.5675C18.7269 17.2678 18.8421 16.9791 19.0503 16.7636L21.6708 14.143H10.7154C10.4123 14.143 10.1216 14.0226 9.90728 13.8083C9.69295 13.5939 9.57254 13.3032 9.57254 13.0001C9.57254 12.697 9.69295 12.4063 9.90728 12.192C10.1216 11.9777 10.4123 11.8573 10.7154 11.8573H21.6708L19.0503 9.23671C18.836 9.02239 18.7156 8.73176 18.7156 8.42871C18.7156 8.12567 18.836 7.83503 19.0503 7.62071Z'
            />
        </svg>
    );
}
