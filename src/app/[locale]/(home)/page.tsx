import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('LocaleLayout')
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('title')}</Link>
    </div>
  )
}
