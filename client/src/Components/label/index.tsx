import React, { FunctionComponent } from 'react';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './label.module.css';
import 'react-tippy/dist/tippy.css';

interface LabelProps {
    text:any;
    fontSize: number;
    fontColor: string;
    hoverText?: string;
 };

const Label: FunctionComponent<LabelProps> = (props) => {
    return (
    (props.hoverText && (
        <React.Fragment>
            <div className={styles.labelText} style={{ fontSize: props.fontSize, color: props.fontColor }}>{props.text}</div>
            <div data-tip={props.hoverText} className={styles.labelText} style={{ fontSize: props.fontSize, color: props.fontColor }}>
                <FontAwesomeIcon style={{color: props.fontColor, marginLeft: 2 }} icon={['far', 'question-circle']} size="xs" />
            </div>
            <ReactTooltip/>
        </React.Fragment>
    ))
    || (
        <div style={{fontSize: props.fontSize, color: props.fontColor }}>
            {props.text}
        </div>
    ));
}
  
  export default Label;
  