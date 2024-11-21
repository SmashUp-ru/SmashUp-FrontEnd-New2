import { IconProps } from '@/components/icons/props.tsx';
import { cn } from '@/lib/utils.ts';

export default function MailIcon({
    className,
    color = 'onSurfaceVariant',
    hoverColor,
    size,
    width = 24,
    height = 19
}: IconProps) {
    return (
        <svg
            width={size ? size : width}
            height={size ? size : height}
            viewBox='0 0 24 19'
            xmlns='http://www.w3.org/2000/svg'
            className={cn(`text-${color} hover:text-${hoverColor}`, 'fill-current', className)}
        >
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M9.66927 2.11046H14.3359C15.8122 2.11046 16.8219 2.11151 17.6081 2.16515C18.3768 2.21761 18.7888 2.31376 19.0841 2.43608C19.2835 2.51872 19.4753 2.61577 19.6578 2.72601L14.4977 7.45162C13.9303 7.97125 13.5456 8.32257 13.2257 8.57239C12.9153 8.81483 12.7265 8.91197 12.5708 8.95949C12.2005 9.07274 11.8047 9.07274 11.4344 8.95949C11.2787 8.91197 11.0899 8.81483 10.7795 8.57239C10.4596 8.32257 10.0749 7.97125 9.50749 7.45162L4.34737 2.72601C4.52997 2.61577 4.72165 2.51872 4.92112 2.43608C5.21644 2.31376 5.62838 2.21761 6.39708 2.16515C7.18334 2.11151 8.19305 2.11046 9.66927 2.11046ZM2.95295 4.08563C2.81892 4.29547 2.7026 4.51799 2.60601 4.75117C2.48369 5.04649 2.38753 5.45848 2.33508 6.22716C2.28143 7.01342 2.28038 8.02313 2.28038 9.49935C2.28038 10.9756 2.28143 11.9853 2.33508 12.7715C2.38753 13.5402 2.48369 13.9522 2.60601 14.2475C3.04018 15.2957 3.87295 16.1284 4.92112 16.5626C5.21644 16.6849 5.62838 16.7811 6.39708 16.8336C7.18334 16.8871 8.19305 16.8882 9.66927 16.8882H14.3359C15.8122 16.8882 16.8219 16.8871 17.6081 16.8336C18.3768 16.7811 18.7888 16.6849 19.0841 16.5626C20.1322 16.1284 20.965 15.2957 21.3992 14.2475C21.5215 13.9522 21.6176 13.5402 21.6701 12.7715C21.7237 11.9853 21.7248 10.9756 21.7248 9.49935C21.7248 8.02313 21.7237 7.01342 21.6701 6.22716C21.6176 5.45848 21.5215 5.04649 21.3992 4.75117C21.3026 4.51799 21.1863 4.29547 21.0523 4.08563L15.811 8.88553L15.7828 8.91127C15.2506 9.3987 14.8098 9.80245 14.4226 10.1048C14.0191 10.4199 13.6145 10.6738 13.1392 10.8191C12.3983 11.0455 11.6069 11.0455 10.866 10.8191C10.3907 10.6738 9.98606 10.4199 9.58263 10.1048C9.19537 9.80245 8.7546 9.3987 8.22237 8.91127L8.19422 8.88553L2.95295 4.08563ZM0.335938 9.49935C0.335938 6.60018 0.335937 5.15056 0.809573 4.00707C1.4411 2.48248 2.6524 1.27118 4.17702 0.639651C5.32048 0.166016 6.7701 0.166016 9.66927 0.166016H14.3359C17.2351 0.166016 18.6847 0.166016 19.8282 0.639651C21.3528 1.27118 22.5641 2.48248 23.1956 4.00707C23.6693 5.15056 23.6693 6.60018 23.6693 9.49935C23.6693 12.3985 23.6693 13.8481 23.1956 14.9916C22.5641 16.5162 21.3528 17.7275 19.8282 18.359C18.6847 18.8327 17.2351 18.8327 14.3359 18.8327H9.66927C6.7701 18.8327 5.32048 18.8327 4.17702 18.359C2.6524 17.7275 1.4411 16.5162 0.809573 14.9916C0.335937 13.8481 0.335938 12.3985 0.335938 9.49935Z'
            />
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M9.66927 2.11046H14.3359C15.8122 2.11046 16.8219 2.11151 17.6081 2.16515C18.3768 2.21761 18.7888 2.31376 19.0841 2.43608C19.2835 2.51872 19.4753 2.61577 19.6578 2.72601L14.4977 7.45162C13.9303 7.97125 13.5456 8.32257 13.2257 8.57239C12.9153 8.81483 12.7265 8.91197 12.5708 8.95949C12.2005 9.07274 11.8047 9.07274 11.4344 8.95949C11.2787 8.91197 11.0899 8.81483 10.7795 8.57239C10.4596 8.32257 10.0749 7.97125 9.50749 7.45162L4.34737 2.72601C4.52997 2.61577 4.72165 2.51872 4.92112 2.43608C5.21644 2.31376 5.62838 2.21761 6.39708 2.16515C7.18334 2.11151 8.19305 2.11046 9.66927 2.11046ZM2.95295 4.08563C2.81892 4.29547 2.7026 4.51799 2.60601 4.75117C2.48369 5.04649 2.38753 5.45848 2.33508 6.22716C2.28143 7.01342 2.28038 8.02313 2.28038 9.49935C2.28038 10.9756 2.28143 11.9853 2.33508 12.7715C2.38753 13.5402 2.48369 13.9522 2.60601 14.2475C3.04018 15.2957 3.87295 16.1284 4.92112 16.5626C5.21644 16.6849 5.62838 16.7811 6.39708 16.8336C7.18334 16.8871 8.19305 16.8882 9.66927 16.8882H14.3359C15.8122 16.8882 16.8219 16.8871 17.6081 16.8336C18.3768 16.7811 18.7888 16.6849 19.0841 16.5626C20.1322 16.1284 20.965 15.2957 21.3992 14.2475C21.5215 13.9522 21.6176 13.5402 21.6701 12.7715C21.7237 11.9853 21.7248 10.9756 21.7248 9.49935C21.7248 8.02313 21.7237 7.01342 21.6701 6.22716C21.6176 5.45848 21.5215 5.04649 21.3992 4.75117C21.3026 4.51799 21.1863 4.29547 21.0523 4.08563L15.811 8.88553L15.7828 8.91127C15.2506 9.3987 14.8098 9.80245 14.4226 10.1048C14.0191 10.4199 13.6145 10.6738 13.1392 10.8191C12.3983 11.0455 11.6069 11.0455 10.866 10.8191C10.3907 10.6738 9.98606 10.4199 9.58263 10.1048C9.19537 9.80245 8.7546 9.3987 8.22237 8.91127L8.19422 8.88553L2.95295 4.08563ZM0.335938 9.49935C0.335938 6.60018 0.335937 5.15056 0.809573 4.00707C1.4411 2.48248 2.6524 1.27118 4.17702 0.639651C5.32048 0.166016 6.7701 0.166016 9.66927 0.166016H14.3359C17.2351 0.166016 18.6847 0.166016 19.8282 0.639651C21.3528 1.27118 22.5641 2.48248 23.1956 4.00707C23.6693 5.15056 23.6693 6.60018 23.6693 9.49935C23.6693 12.3985 23.6693 13.8481 23.1956 14.9916C22.5641 16.5162 21.3528 17.7275 19.8282 18.359C18.6847 18.8327 17.2351 18.8327 14.3359 18.8327H9.66927C6.7701 18.8327 5.32048 18.8327 4.17702 18.359C2.6524 17.7275 1.4411 16.5162 0.809573 14.9916C0.335937 13.8481 0.335938 12.3985 0.335938 9.49935Z'
                fill-opacity='0.2'
            />
        </svg>
    );
}