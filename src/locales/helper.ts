import type { LocaleType } from '/#/config';

import { set } from 'lodash-es';

export const loadLocalePool: LocaleType[] = [];

export function setHtmlPageLang(locale: LocaleType) {
  document.querySelector('html')?.setAttribute('lang', locale);
}

export function setLoadLocalePool(cb: (loadLocalePool: LocaleType[]) => void) {
  cb(loadLocalePool);
}

export function genMessage(langs: Record<string, Record<string, any>>, prefix = 'lang') {
  const obj: Recordable = {};

  Object.keys(langs).forEach((key) => {
    const langFileModule = langs[key].default; // json format
    let fileName = key.replace(`./${prefix}/`, '').replace(/^\.\//, ''); // remove lang prefix such as 'en', 'zh-CN' and  begining '.'
    // remove file extension
    const lastIndex = fileName.lastIndexOf('.'); 
    fileName = fileName.substring(0, lastIndex);
    // some path is nested 
    const keyList = fileName.split('/');
    const moduleName = keyList.shift();
    // '/' => '.'
    const objKey = keyList.join('.'); 
    // ex.  './en/routes/basic.json' => routes: {basic: {...}}
    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {});
        set(obj[moduleName], objKey, langFileModule);
      } else { // objkey already shift from keyList
        set(obj, moduleName, langFileModule || {});
      }
    }
  });
  return obj;
}
