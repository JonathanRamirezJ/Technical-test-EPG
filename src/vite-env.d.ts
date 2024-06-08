/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

export {};

declare global {
  interface Window {
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    VGSCollect: any;
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    VGSShow: any;
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    hbspt: any;
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    _hsp: any;
  }
}
