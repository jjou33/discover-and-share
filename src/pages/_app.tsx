import { ComponentType } from 'react'

import Footer from '@/app/components/common/Footer/page'
import Layout from '@/app/layout'
interface AppPropsType {
  Component: ComponentType
  pageProps?: object
}
export default function App({ Component, pageProps }: AppPropsType) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}
