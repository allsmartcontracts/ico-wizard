import { observable, action } from 'mobx'
import {addLocaleData} from "react-intl"
import en from './translations/en'
import ru from './translations/ru'
import enLocale from 'react-intl/locale-data/en'
import ruLocale from 'react-intl/locale-data/ru'

class locale {

@observable locale


addLocaleData([...ruLocale, ...enLocale]);
const localeStore = new LocaleStore("en", {en, ru});
    const store = {
    locale: localeStore,
};
export default locale;
export { locale };
