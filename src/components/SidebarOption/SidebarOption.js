import React from 'react';
import styles from './SidebarOption.module.css';
import { useHistory } from 'react-router-dom';

function SidebarOption({ Icon, title, number, selected}) {
    const history = useHistory();
    return <div className={`${styles.sidebarOption} ${selected && styles.sidebarOption__active}`} onClick={() => history.push('/')}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>   
    </div>
}

export default SidebarOption
