import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import type { Nullable, SideBarItem } from '../../libs/types'
import { SidebarItem } from '../SidebarItem'

type SidebarProps = {
  elements: SideBarItem[]
  open: boolean
  onClose: () => void
}

export const Sidebar = ({ elements, open, onClose }: SidebarProps) => {
  const ref = useRef<Nullable<HTMLDivElement>>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onClose])

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: open ? 0 : '100%' }}
      transition={{ type: 'tween', stiffness: 300 }}
      className="fixed top-0 right-0 p-5 h-full w-64 bg-white shadow-lg z-50"
      ref={ref}
    >
      <ul className="p-4">
        {elements.map((elem, i) => (
          <SidebarItem key={i} item={elem} />
        ))}
      </ul>
    </motion.div>
  )
}
