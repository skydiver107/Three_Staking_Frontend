import React, { Fragment } from "react";
import { useRouter } from "next/router";
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const DaoIcon = (props: SvgIconProps) => {
  const linkRouter = useRouter();

  React.useEffect(() => {
    (async () => {

    })()
  }, []);

  return (
    <SvgIcon
      {...props}
      style={{ width: `100%`, height: `100%` }}

    >
      <svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.69022 21.6659C9.61611 21.6399 9.54259 21.6122 9.4673 21.5891C8.66211 21.3404 8.11454 20.5654 8.21452 19.8086C8.32627 18.9517 9.00442 18.2898 9.82079 18.2412C10.7542 18.1847 11.5223 18.7126 11.7376 19.5571C11.8396 19.9763 11.7742 20.4171 11.5543 20.7922C11.3345 21.1673 10.9761 21.4495 10.5501 21.5828C10.4684 21.6083 10.3878 21.6394 10.3066 21.6659H9.69022Z" fill="#0D0D0D" />
        <path d="M13.1969 6.54431C11.0626 6.54431 8.92821 6.54431 6.79358 6.54431C5.98016 6.54431 5.53257 6.97784 5.53198 7.76521C5.53198 9.80909 5.53198 11.8532 5.53198 13.8974C5.53198 14.695 5.97957 15.124 6.80946 15.1251C7.87286 15.1251 8.93625 15.1251 9.99964 15.1251C11.063 15.1251 12.1264 15.1251 13.1898 15.1251C14.0132 15.1251 14.4602 14.6972 14.4608 13.9144C14.4608 11.8633 14.4608 9.81211 14.4608 7.76069C14.4608 6.97332 14.015 6.54488 13.1969 6.54431ZM11.7106 12.3555C11.4698 12.5082 11.1863 12.5871 10.8978 12.5816H10.8813L8.50866 12.5782V11.6082H11.1518C11.3518 11.6082 11.5469 11.549 11.7106 11.4387V12.3555ZM11.7106 11.0656H9.24503V10.0917H11.7106V11.0656ZM11.7106 9.67344C11.5468 9.56337 11.3518 9.50419 11.1518 9.50387H8.50866V8.53506L10.8813 8.53167H10.8978C11.1863 8.5261 11.4698 8.60495 11.7106 8.75776V9.67344Z" fill="#0D0D0D" />
        <path d="M1.78178 17.1067C1.54721 17.1059 1.3151 17.0607 1.09869 16.9738C0.882284 16.8868 0.685825 16.7597 0.520531 16.5997C0.355236 16.4398 0.224344 16.2501 0.135326 16.0415C0.0463081 15.833 0.00090866 15.6096 0.00171966 15.3841C0.00253066 15.1587 0.0495362 14.9357 0.140052 14.7277C0.230569 14.5197 0.362823 14.3309 0.529264 14.1721C0.695706 14.0132 0.893074 13.8874 1.1101 13.8019C1.32713 13.7163 1.55956 13.6727 1.79414 13.6735C2.26788 13.675 2.72156 13.8574 3.05539 14.1805C3.38922 14.5035 3.57584 14.9407 3.5742 15.396C3.57256 15.8513 3.3828 16.2873 3.04666 16.6081C2.71051 16.9289 2.25553 17.1083 1.78178 17.1067Z" fill="#0D0D0D" />
        <path d="M1.79475 4.56257C2.14899 4.56419 2.49474 4.667 2.78803 4.85793C3.08132 5.04886 3.30892 5.31929 3.44188 5.63484C3.57485 5.95039 3.60718 6.29681 3.53476 6.63006C3.46235 6.96331 3.28846 7.26835 3.0352 7.50639C2.78195 7.74443 2.46076 7.90472 2.11247 7.9669C1.76417 8.02908 1.40451 7.99032 1.07919 7.85557C0.753879 7.72081 0.477603 7.49614 0.285488 7.21011C0.0933724 6.92408 -0.00590637 6.58961 0.000271776 6.24922C0.00647524 5.79717 0.19878 5.3659 0.535094 5.04979C0.871409 4.73368 1.32434 4.55849 1.79475 4.56257Z" fill="#0D0D0D" />
        <path d="M18.2061 4.56313C18.5603 4.56168 18.9069 4.66144 19.2019 4.84973C19.4969 5.03802 19.7271 5.30635 19.8631 5.62061C19.999 5.93488 20.0347 6.2809 19.9656 6.61471C19.8965 6.94852 19.7257 7.25505 19.4749 7.49536C19.2241 7.73566 18.9046 7.8989 18.5571 7.96432C18.2095 8.02974 17.8496 7.9944 17.523 7.86278C17.1964 7.73116 16.9178 7.50921 16.7228 7.22513C16.5277 6.94104 16.425 6.60765 16.4275 6.2673C16.4275 6.04308 16.4736 5.82106 16.563 5.61396C16.6525 5.40687 16.7836 5.21878 16.9488 5.06046C17.114 4.90215 17.3101 4.77673 17.5259 4.69139C17.7417 4.60604 17.9728 4.56246 18.2061 4.56313Z" fill="#0D0D0D" />
        <path d="M18.2067 17.1045C17.9697 17.1069 17.7345 17.064 17.5149 16.9782C17.2953 16.8924 17.0957 16.7654 16.9277 16.6047C16.7597 16.444 16.6267 16.2527 16.5364 16.0421C16.4461 15.8314 16.4004 15.6056 16.4019 15.3778C16.4034 15.15 16.452 14.9247 16.5451 14.7152C16.6381 14.5056 16.7736 14.316 16.9437 14.1573C17.1137 13.9986 17.315 13.8741 17.5357 13.7909C17.7564 13.7077 17.9921 13.6676 18.2291 13.673C19.2154 13.678 19.9936 14.4479 19.9936 15.4127C19.9925 15.6368 19.9454 15.8584 19.8549 16.0648C19.7644 16.2712 19.6323 16.4585 19.4662 16.6157C19.3002 16.7729 19.1034 16.897 18.8873 16.9809C18.6711 17.0648 18.4398 17.1068 18.2067 17.1045Z" fill="#0D0D0D" />
        <path d="M9.98544 3.43039C9.51467 3.42759 9.06397 3.24681 8.7308 2.92716C8.39763 2.60751 8.20878 2.17468 8.20508 1.72226C8.20508 1.26549 8.39389 0.827426 8.72998 0.504439C9.06607 0.181452 9.5219 0 9.9972 0C10.4725 0 10.9283 0.181452 11.2644 0.504439C11.6005 0.827426 11.7893 1.26549 11.7893 1.72226C11.7878 1.9483 11.7399 2.17183 11.6484 2.38007C11.5568 2.5883 11.4235 2.77714 11.2559 2.93579C11.0884 3.09445 10.8899 3.21979 10.6719 3.30466C10.4539 3.38953 10.2206 3.43226 9.98544 3.43039Z" fill="#0D0D0D" />
        <path d="M4.26088 5.28782C4.15854 5.19512 4.00503 5.11825 3.9668 5.00125C3.92799 4.89385 3.99739 4.74293 4.04385 4.61971C4.0615 4.57223 4.14619 4.54623 4.20324 4.51458C5.19919 3.96065 6.19495 3.40748 7.19051 2.85506C7.22874 2.83358 7.26697 2.81267 7.30814 2.79458C7.50399 2.70697 7.69691 2.7601 7.80337 2.93023C7.85553 3.00836 7.87331 3.10319 7.8528 3.1939C7.83229 3.28461 7.77517 3.36379 7.69397 3.41407C7.49811 3.53729 7.29049 3.64356 7.08758 3.75321C6.25396 4.21633 5.42073 4.67793 4.5879 5.13803C4.50203 5.18664 4.40675 5.22169 4.26088 5.28782Z" fill="#0D0D0D" />
        <path d="M16.0694 4.77225C16.0777 5.15378 15.7783 5.33352 15.5042 5.19052C15.1513 5.00569 14.8067 4.80616 14.4585 4.61285C13.7746 4.23302 13.0908 3.85356 12.407 3.47447C12.1499 3.33091 12.0758 3.14551 12.1911 2.9392C12.3064 2.73289 12.5164 2.69502 12.7763 2.83859C13.7897 3.3993 14.8043 3.96057 15.8124 4.52581C15.9318 4.59533 16.0165 4.72025 16.0694 4.77225Z" fill="#0D0D0D" />
        <path d="M7.8516 18.4554C7.8516 18.8307 7.56987 19.0048 7.29932 18.8697C7.03935 18.7402 6.78997 18.591 6.53471 18.4503C5.74658 18.0143 4.96041 17.5779 4.17619 17.1412C3.92681 17.0027 3.85741 16.8207 3.97269 16.6189C4.08797 16.4171 4.29618 16.3691 4.53732 16.5019C5.5666 17.0672 6.59588 17.6375 7.61928 18.2146C7.73103 18.2785 7.80514 18.4056 7.8516 18.4554Z" fill="#0D0D0D" />
        <path d="M16.0717 16.8721C16.034 16.9191 15.977 17.0457 15.8776 17.1016C14.8255 17.6963 13.7692 18.2839 12.7086 18.8646C12.6667 18.8905 12.6197 18.9078 12.5705 18.9154C12.5214 18.9231 12.4711 18.9208 12.4229 18.9089C12.3747 18.8969 12.3295 18.8755 12.2903 18.846C12.2511 18.8165 12.2187 18.7795 12.1951 18.7374C12.0822 18.556 12.1363 18.3497 12.3415 18.2332C13.3908 17.6465 14.4419 17.0634 15.4947 16.4838C15.7676 16.3335 16.0722 16.5087 16.0717 16.8721Z" fill="#0D0D0D" />
        <path d="M1.40362 10.8361C1.40362 10.2708 1.40362 9.71012 1.40362 9.14659C1.40362 8.8538 1.53595 8.71079 1.78768 8.71531C2.02824 8.71984 2.15764 8.86567 2.15822 9.14206C2.15822 10.268 2.15822 11.3943 2.15822 12.521C2.15822 12.8076 2.02236 12.9557 1.77063 12.9529C1.53066 12.95 1.40479 12.8082 1.40362 12.5255C1.40185 11.9626 1.40362 11.399 1.40362 10.8361Z" fill="#0D0D0D" />
        <path d="M18.5901 10.827C18.5901 11.3923 18.5901 11.9535 18.5901 12.5165C18.5901 12.8093 18.4602 12.9546 18.2114 12.9534C17.9626 12.9523 17.8379 12.8025 17.8379 12.5092C17.8379 11.3757 17.8379 10.2422 17.8379 9.10872C17.8379 8.92672 17.9079 8.78654 18.0908 8.73228C18.2537 8.68367 18.4243 8.70515 18.519 8.85832C18.5673 8.95215 18.5903 9.05612 18.586 9.16072C18.5937 9.71465 18.5901 10.2708 18.5901 10.827Z" fill="#0D0D0D" />
        <path d="M10.3807 4.97801C10.3807 5.13966 10.3896 5.30189 10.3807 5.46241C10.366 5.68285 10.2114 5.83038 10.0096 5.83377C9.958 5.83548 9.90656 5.82703 9.85846 5.80893C9.81036 5.79083 9.76662 5.76347 9.72994 5.72853C9.69325 5.69359 9.66438 5.65181 9.64512 5.60575C9.62585 5.5597 9.61659 5.51034 9.6179 5.46072C9.60732 5.14532 9.60673 4.82879 9.6179 4.51282C9.61716 4.46481 9.62656 4.41716 9.64554 4.37275C9.66451 4.32833 9.69266 4.28807 9.72829 4.25442C9.76392 4.22076 9.80628 4.19439 9.85282 4.17692C9.89936 4.15945 9.9491 4.15123 9.99903 4.15277C10.2072 4.15277 10.3631 4.29351 10.3796 4.51226C10.3896 4.666 10.3802 4.82087 10.3807 4.97801Z" fill="#0D0D0D" />
        <path d="M9.61258 16.6693C9.61258 16.5218 9.60729 16.3737 9.61258 16.2268C9.62376 15.9945 9.77903 15.8385 9.98842 15.8379C10.1978 15.8373 10.3695 15.9843 10.3772 16.2143C10.3878 16.523 10.3872 16.8327 10.3772 17.1419C10.3695 17.3748 10.2096 17.5183 9.99136 17.5166C9.77315 17.5149 9.62905 17.3668 9.61199 17.1328C9.61199 17.1193 9.61199 17.1051 9.61199 17.091L9.61258 16.6693Z" fill="#0D0D0D" />
        <path d="M4.29681 14.3535C4.24723 14.3537 4.19809 14.3444 4.15232 14.3261C4.10654 14.3078 4.06504 14.2809 4.03028 14.2469C3.99552 14.2129 3.9682 14.1725 3.94993 14.1282C3.93166 14.0839 3.92282 14.0366 3.92392 13.9889C3.92392 13.7854 4.17918 13.5644 4.41739 13.5627C4.51759 13.5645 4.61302 13.6042 4.68295 13.6732C4.75288 13.7422 4.79166 13.835 4.79087 13.9313C4.7891 14.1427 4.5409 14.3546 4.29681 14.3535Z" fill="#0D0D0D" />
        <path d="M4.79087 7.74032C4.79071 7.83691 4.75068 7.9295 4.67955 7.99775C4.60842 8.066 4.51202 8.10433 4.41151 8.10433C4.16977 8.10037 3.92039 7.88106 3.92275 7.67588C3.92251 7.62839 3.93207 7.58132 3.95088 7.5374C3.96968 7.49348 3.99736 7.45357 4.0323 7.41999C4.06725 7.38641 4.10877 7.35981 4.15448 7.34174C4.20018 7.32367 4.24916 7.31448 4.29858 7.3147C4.54325 7.3147 4.79205 7.53175 4.79087 7.74032Z" fill="#0D0D0D" />
        <path d="M15.6894 14.3541C15.4435 14.3507 15.1994 14.1337 15.2035 13.9234C15.2049 13.8271 15.2459 13.7352 15.3175 13.6677C15.3891 13.6003 15.4856 13.5628 15.5858 13.5634C15.8293 13.5718 16.077 13.7928 16.0717 13.9975C16.0712 14.0451 16.0609 14.0921 16.0414 14.1359C16.0219 14.1797 15.9935 14.2193 15.958 14.2525C15.9224 14.2857 15.8804 14.3117 15.8343 14.3292C15.7882 14.3466 15.7389 14.3551 15.6894 14.3541Z" fill="#0D0D0D" />
        <path d="M15.2035 7.72838C15.2106 7.51812 15.4653 7.30898 15.7064 7.3152C15.7559 7.31659 15.8046 7.32735 15.8497 7.34687C15.8948 7.36638 15.9355 7.39427 15.9694 7.42893C16.0032 7.4636 16.0297 7.50435 16.0471 7.54885C16.0646 7.59335 16.0727 7.64072 16.0711 7.68825C16.0664 7.88947 15.8005 8.10992 15.5676 8.10539C15.4676 8.10099 15.3734 8.059 15.3053 7.98848C15.2372 7.91796 15.2006 7.82455 15.2035 7.72838Z" fill="#0D0D0D" />
      </svg>


    </SvgIcon>
  );
};

export default DaoIcon;
