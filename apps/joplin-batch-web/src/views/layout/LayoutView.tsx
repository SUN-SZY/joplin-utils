import * as React from 'react'
import { Suspense } from 'react'
import { Layout, Menu, Select } from 'antd'
import css from './LayoutView.module.css'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { useAsyncFn, useMount } from 'react-use'
import { i18n } from '../../constants/i18n'
import en from '../../i18n/en.json'
import zhCN from '../../i18n/zhCN.json'
import { LanguageEnum } from '@liuli-util/i18next-util'
import {
  convertLanguagePrefix,
  useLanguage,
} from '../../common/hooks/useLanguage'
import { PathUtil } from '@liuli-util/string'
import { routeList } from '../../constants/routes'

export const LayoutView: React.FC = () => {
  const language = useLanguage()
  const [{ value: list }, fetch] = useAsyncFn(
    async (language) => {
      console.log('language: ', language)
      await i18n.init({ en, zhCN }, language)
      const prefix = convertLanguagePrefix(language)
      return routeList().map((item) => ({
        ...item,
        path: PathUtil.join(prefix, item.path as string),
      }))
    },
    [language],
  )

  useMount(() => fetch(language))

  const location = useLocation()
  const history = useHistory()

  async function changeLanguage(value: LanguageEnum) {
    const path = location.pathname.replace(
      convertLanguagePrefix(language),
      convertLanguagePrefix(value),
    )
    console.log('path: ', language, value, path)
    await fetch(value)
    history.push(path)
  }
  return (
    <Layout className={css.app}>
      <Layout.Sider className={css.sider} width="max-content">
        <h2 className={css.logo}>Joplin Batch</h2>
        <Menu>
          {list &&
            list.map((item) => (
              <Menu.Item key={item.path as string}>
                <Link to={item.path as string}>{item.title}</Link>
              </Menu.Item>
            ))}
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header className={css.header}>
          <Select
            options={[
              { label: 'English', value: LanguageEnum.En },
              { label: '中文', value: LanguageEnum.ZhCN },
            ]}
            value={language}
            onChange={changeLanguage}
          />
        </Layout.Header>
        <Layout.Content className={css.main}>
          <Suspense fallback={'loading...'}>{renderRoutes(list)}</Suspense>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
