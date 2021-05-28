import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import usePageView from '~/hooks/usePageView';
import '~/styles/global.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  usePageView();

  return <Component {...pageProps} />;
}

export default App;
