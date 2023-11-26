'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const MenuItem = ({
  title,
  path,
  classnames,
}: {
  title: string
  path: string
  classnames: string
}) => {
  console.log(classnames)
  return (
    <Link href={path}>
      <div className={cn('p-3', classnames)}>{title}</div>
    </Link>
  )
}

export default MenuItem
