'use client'

import { Button } from '@/components/ui/button'
import { ArrowDownToLine } from 'lucide-react'

export default function DownloadButton({ user }: { user: any | null }) {
  return (
    <Button
      variant={user ? 'outline' : 'default'}
      size={`${user ? 'icon' : 'default'}`}
      className={user ? 'size-8 rounded-full' : 'h-8 rounded-lg px-3'}

    >
      {user ? <ArrowDownToLine size={15} /> : 'Download'}
    </Button>
  )
}
