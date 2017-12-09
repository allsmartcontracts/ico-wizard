import { observable, action } from 'mobx'
import {addLocaleData} from "react-intl"
import en from './translations/en'
import ru from './translations/ru'
import enLocale from 'react-intl/locale-data/en'
import ruLocale from 'react-intl/locale-data/ru'

export class locale extends Component {

@observable locale;


addLocaleData([...ruLocale, ...enLocale]);
  constructor() {
const localeStore = new LocaleStore("en", {en, ru});
    const store = {
    locale: localeStore,
};
  }
  
export default locale;
export { locale };
