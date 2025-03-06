import TailwindIndicator from '@/components/povider/tailwind-indicator'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/cn'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import { notFound } from 'next/navigation'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'auto',
})

/* const noto_jp = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-jp',
  display: 'swap',
})
 */
interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const { locale } = await props.params
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' })
  return {
    title: t('title'),
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={
        cn(
          inter.variable,
          // noto_jp.variable,
          'min-h-screen antialiased',
        )
      }
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <TailwindIndicator />
      </body>
    </html>
  )
}
