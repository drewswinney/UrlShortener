import React, { FunctionComponent, ChangeEvent, KeyboardEvent, useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import styles from './textbox.module.css';
import Label from '../label';

interface ITextBoxProps {
    label?: string;
    labelFontColor?: string;
    labelFontSize?: number;
    labelHover?: string;
    placeholder:any;
    fontSize?: number;
    fontColor?: string;
    type?: string;
    onChange?: Function;
    onKeyDown?: Function;
    icon?: IconName;
    width?: number;
    height?: number;
    pattern?: string;
    maxLength?: number;
    testId?: string;
 };

const TextBox: FunctionComponent<ITextBoxProps> = (props) =>  {
      const [,forceUpdate] = useState();

      useEffect(() => {
          forceUpdate(null)
      }, []);

      return props.label ?
      (
        <div className={styles.wrapper}>
          <label>
              <Label
                text={props.label}
                fontSize={props.labelFontSize ? props.labelFontSize : 20}
                fontColor={props.labelFontColor ? props.labelFontColor : "#000000"}
                hoverText={props.labelHover} />
              {props.icon ? <FontAwesomeIcon className={styles.icon} icon={['far', props.icon]} /> : <div></div> }
              <input
                data-testid={props.testId}
                className={styles.textBox}
                style={{width: props.width ? (props.icon ? props.width - 30 : props.width): 50, height: props.height ? props.height : 39}}
                placeholder={props.placeholder}
                type={props.type}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {event.preventDefault(); props.onChange && props.onChange(event.target.value)}}
                onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {props.onKeyDown && props.onKeyDown(event)}}
                pattern={props.pattern}
                maxLength={props.maxLength}
              />
          </label>
        </div>
      ) : (
        <div className={styles.wrapper}>
          {props.icon ? <FontAwesomeIcon className={styles.icon} icon={['far', props.icon]} /> : <div></div> }
          <input
            data-testid={props.testId}
            className={styles.textBox}
            style={{width: props.width ? (props.icon ? props.width - 30 : props.width): 50, height: props.height ? props.height : 39}}
            placeholder={props.placeholder}
            type={props.type}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {event.preventDefault(); props.onChange && props.onChange(event.target.value)}}
            onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {props.onKeyDown && props.onKeyDown(event)}}
            pattern={props.pattern}
            maxLength={props.maxLength}
          />
        </div>
      )
  }
  
  export default TextBox;
  