import React from 'react';
import logo from '../../assets/icons/logo.svg';
import styles from './Header.module.css';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import languageData from '../../i18n/en.json';
import { changeLanguage } from '../../state/slices/language';
import i18n from 'i18next';
import { useSelector } from '../../state/hooks';

export function Header() {
  const navigate = useNavigate();
  const languageState = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const langMenuItems = languageState.languageList.map(
    (item: any, index: number) => ({
      label: item.name,
      key: item.code,
    })
  );

  const mainMenuItems: any = [];

  const [t] = useTranslation();
  Object.keys(languageData.mainMenu).forEach((key, index) => {
    mainMenuItems.push({ label: t(`mainMenu.${key}`), key: index });
  });

  const switchLanguage = (e: any) => {
    dispatch(changeLanguage(e.key));
    i18n.changeLanguage(e.key);
  };

  return (
    <div className={styles['app-header']}>
      <div className={styles['top-header']}>
        <div className={styles['inner']}>
          <Typography.Text>{t(`header.slogan`)}</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={<Menu items={langMenuItems} onClick={switchLanguage} />}
            icon={<GlobalOutlined />}
          >
            {t(`header.language`)}
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button>
              <Link to={'Register'}>{t(`header.register`)}</Link>
            </Button>
            <Button>
              <Link to={'Login'}>{t(`header.login`)}</Link>
            </Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={'main-header'}>
        <img
          className={styles['App-logo']}
          src={logo}
          alt=""
          onClick={() => {
            navigate('/');
          }}
        />
        <Typography.Title className={styles['title']} level={3}>
          {t(`header.title`)}
        </Typography.Title>
        <Input.Search
          className={styles['search-input']}
          placeholder={t(`header.placeholder`)}
        />
      </Layout.Header>
      <Menu
        mode={'horizontal'}
        className={styles['main-menu']}
        items={mainMenuItems}
      />
    </div>
  );
}
