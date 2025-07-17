import { useState } from "react"
import { motion } from 'framer-motion'
import type { SideBarItem } from "../../libs/types"

export const SidebarItem = ({ item }: { item: SideBarItem }) => {
  const [open, setOpen] = useState(false)

  return (
    <li className='cursor-pointer'>
      <button
        onClick={() => item.children && setOpen(!open)}
        className="flex justify-between w-full text-left font-medium"
      >
        {item.label}
        {item.children && <span>{open ? '−' : '+'}</span>}
      </button>
      {item.children && open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: open ? 0 : '100%' }}
          transition={{ type: 'tween', stiffness: 300 }}
        >
          <ul className="pl-4 mt-1 space-y-1">
            {item.children.map((sub, idx) => (
              <li key={idx}>{sub.label}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </li>
  )
}