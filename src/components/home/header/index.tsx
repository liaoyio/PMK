import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { PMK as PMKIcon } from '@/assets/icons'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { cn } from '@/lib/cn'

import Link from 'next/link'
import AuthButton from './auth-button'
import DarkModeToggle from './darkmode-toggle'
import DownloadButton from './download-button'
import MobileMenu from './mobile-menu'

function NavItem({
  href,
  target = '_self',
  children,
}: {
  href: string
  target?: React.HTMLAttributeAnchorTarget
  children: ReactNode
}) {
  return (
    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()} href={href} target={target}>
      <Link href={href}>{children}</Link>
    </NavigationMenuLink>
  )
}

function DropdownNavItem({ trigger, children }: { trigger: string, children: ReactNode }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
      <NavigationMenuContent>{children}</NavigationMenuContent>
    </NavigationMenuItem>
  )
}

function ListItem({ ref, className, title, children, href, ...props }: ComponentPropsWithoutRef<'a'> & { title: string, href: string } & { ref?: React.RefObject<HTMLAnchorElement | null> }) {
  return (
    <li className="px-1">
      <NavigationMenuLink asChild className="border-none">
        <Link
          ref={ref}
          href={href}
          className={cn(
            'hover:bg-secondary-300/10 focus:bg-secondary-300/10 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600/90 dark:text-gray-500">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default async function Header() {
  return (
    //
    <header className="fixed inset-x-0 top-0 bg-transparent z-50 md:p-4 py-2 transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-screen-xl px-6 md:px-10">
        <nav
          className="px-2 transition-all duration-300 ease-in-out "
          aria-label="Main navigation"
        >
          <div className="flex h-12 items-center justify-between">
            <Link href="/" aria-label="PMK Logo" className="flex flex-shrink-0 items-center gap-2">
              <PMKIcon className="h-6" />
              <h3 className="text-2xl font-bold">PMK</h3>
            </Link>

            <nav className="hidden md:block" aria-label="Main menu">
              <NavigationMenu>
                <NavigationMenuList className="text-black/60 dark:text-gray-500">
                  <DropdownNavItem trigger="Resources">
                    <ul className="grid w-[400px] border-none gap-3 bg-background p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="/about" title="About" className="h-full">
                        Learn more about PearAI
                      </ListItem>
                      <ListItem href="/blog" title="Blog" className="h-full">
                        Read insights on PearAI&apos;s development by our contributors
                      </ListItem>
                      <ListItem href="/faq" title="FAQ" className="h-full">
                        Frequently asked questions about PearAI
                      </ListItem>
                      <ListItem href="/changelog" title="Changelog" className="h-full">
                        See what&apos;s new in PearAI
                      </ListItem>
                    </ul>
                  </DropdownNavItem>
                  <NavItem href="/pricing">Pricing</NavItem>
                  <NavItem href="/docs">Documentation</NavItem>
                  <NavItem href="https://github.com/trypear/pearai-master" target="_blank">
                    GitHub
                  </NavItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            <div className="hidden items-center space-x-4 lg:flex">
              <DownloadButton user={null} />
              <DarkModeToggle />
            </div>
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
