/// <reference types="react-scripts" />

declare module 'react-loader-spinner';
declare module 'react-formik-ui';

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly REACT_APP_SOBOT_URL: string;
  }
}
