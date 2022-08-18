import React from 'react';
import styles from './LoginPage.module.css';

export const LoginPage: React.FC = props => {
  console.log(props);

  return (
    <div className={styles['page-content']}>
      <h1>login</h1>
    </div>
  );
};
