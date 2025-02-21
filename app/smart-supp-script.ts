declare global {
  interface Window {
    _smartsupp: {
      key: string;
    };
    smartsupp: {
      (action: string, ...args: any[]): void;
      _: any[];
    };
  }
}

export function loadSmartsupp() {
  window._smartsupp = window._smartsupp || {};
  window._smartsupp.key = "76c9514a6b25343567ff650b51d836f2d37286ed";
  window.smartsupp =
    window.smartsupp ||
    function () {
      (window.smartsupp._ = window.smartsupp._ || []).push(arguments);
    };
  window.smartsupp._ = window.smartsupp._ || [];

  const d = document;
  const s = d.getElementsByTagName("script")[0];
  const c = d.createElement("script");
  c.type = "text/javascript";
  c.charset = "utf-8";
  c.async = true;
  c.src = "https://www.smartsuppchat.com/loader.js?";
  s.parentNode?.insertBefore(c, s);
}
