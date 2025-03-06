import type { Props } from '@/types'
import Header from '@/components/home/header'
import React from 'react'

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="grow pt-20">
        { children}
      </main>
    </>
  )
}
