'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

type MenuItem = {
  url: string
  title: string
}

const menuItems: MenuItem[] = [
  { url: '/', title: 'Home' },
  { url: '/bio', title: 'Bio' },
  { url: '/resume', title: 'Resume' },
  { url: '/work', title: 'My Work' },
]

const Menu = () => {
  const path = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <nav className="hidden lg:block h-full">
        <ul className="flex flex-col justify-center h-full gap-8 pl-12 text-right">
          {menuItems.map((item) => (
            <li
              key={item.url}
              className={cn(
                'transition ease-in-out delay-150 opacity-70',
                'hover:opacity-95 hover:scale-110 hover:-translate-y-1 hover:translate-x-1 duration-300',
                'motion-reduce:transition-none motion-reduce:hover:transform-none',
              )}
            >
              <Link
                href={item.url}
                className={cn(
                  'text-4xl',
                  path === item.url ? 'opacity-25' : '',
                )}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden absolute top-8 left-8"
          >
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-transparent border-none p-2">
          <SheetHeader>
            <SheetTitle hidden>Mobile Menu</SheetTitle>
          </SheetHeader>
          <nav className="h-full opacity-100">
            <ul className="flex flex-col gap-2 justify-start h-full">
              <li className="text-4xl py-4 pl-4 bg-gradient-to-r from-background/90 to-background/0">
                &nbsp;
              </li>
              {menuItems.map((item) => (
                <li
                  key={'mobile' + item.url}
                  className="py-4 pl-4 bg-gradient-to-r from-background/90 to-background/20"
                >
                  <Link
                    href={item.url}
                    className="text-4xl block"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </React.Fragment>
  )
}

export default Menu