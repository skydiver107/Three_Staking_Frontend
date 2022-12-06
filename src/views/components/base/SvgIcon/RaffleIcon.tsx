import React, { Fragment } from "react";
import { useRouter } from "next/router";
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const RaffleIcon = (props: SvgIconProps) => {
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
      <svg viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.44444 3.4375H15.5556V10.3125H4.44444V3.4375ZM18.3333 6.875C18.3333 7.82425 19.0795 8.59375 20 8.59375V12.0312C20 12.9805 19.2538 13.75 18.3333 13.75H1.66667C0.74618 13.75 0 12.9805 0 12.0312V8.59375C0.920486 8.59375 1.66667 7.82425 1.66667 6.875C1.66667 5.92575 0.920486 5.15625 0 5.15625V1.71875C0 0.769499 0.74618 0 1.66667 0H18.3333C19.2538 0 20 0.769499 20 1.71875V5.15625C19.0795 5.15625 18.3333 5.92575 18.3333 6.875ZM16.6667 3.15104C16.6667 2.67642 16.2936 2.29167 15.8333 2.29167H4.16667C3.70642 2.29167 3.33333 2.67642 3.33333 3.15104V10.599C3.33333 11.0736 3.70642 11.4583 4.16667 11.4583H15.8333C16.2936 11.4583 16.6667 11.0736 16.6667 10.599V3.15104Z" fill="#0D0D0D" />
      </svg>


    </SvgIcon>
  );
};

export default RaffleIcon;
