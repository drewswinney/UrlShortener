import React, { FunctionComponent, KeyboardEvent } from 'react';
import styles from './button.module.css';

interface ButtonProps {
    text:any;
    width?: number;
    height?: number;
    color?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: Function;
    onEnter?: Function;
    testId?: string;
};

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    return (
        <button
            data-testid={props.testId}
            className={styles.button}
            style={{ width: props.width, height: props.height, background: props.color }}
            type={props.type ? props.type : 'button'}
            onClick={(event) => {props.onClick && props.onClick(event)}}
            onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => {if(event.key === 'Enter') {props.onEnter && props.onEnter()}}}
        >{props.text}
        </button>
    );
  }
  
  export default Button;
  