import React, { FunctionComponent } from 'react';

interface ILogoProps {
    width?: number;
    height?: number;
};

const Logo: FunctionComponent<ILogoProps> = (props: ILogoProps) => {
   return (
    <svg width={props.width ? props.width : "50px"} height={props.height ? props.height : "50px"} viewBox="0 0 50 50" version="1.1">
        <g id="Clean" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Home-Page" transform="translate(-597.000000, -435.000000)">
                <g id="Main" transform="translate(339.000000, 432.000000)">
                    <g id="Logo" transform="translate(258.000000, 3.000000)">
                        <circle id="Oval" fill="#00E397" cx="33.5" cy="16.5" r="16.5"></circle>
                        <ellipse id="Oval" fill-opacity="0.599814248" fill="#05B188" cx="16.5" cy="25" rx="16.5" ry="17"></ellipse>
                        <circle id="Oval" fill-opacity="0.691870629" fill="#8CFFB9" cx="33.5" cy="33.5" r="16.5"></circle>
                    </g>
                </g>
            </g>
        </g>
    </svg>
   );
}
  
export default Logo;
  