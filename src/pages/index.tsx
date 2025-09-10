import type { ReactElement } from 'react';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';

import styles from './index.module.css';

export default function Home(): ReactElement {
  return (
    <Layout title="o2-ui Docs" description="UI Components Documentation for o2-ui">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">o2-ui</h1>
          <p className="hero__subtitle">React 기반 UI 컴포넌트 라이브러리 문서</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/carmore-icon/overview">
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
