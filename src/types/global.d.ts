import type en from '../../languages/messages/en.json'

type Messages = typeof en

declare global {
  interface IntlMessages extends Messages {}
}
