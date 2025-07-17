import { useState } from "react"
import { Sidebar } from "../../components/SidebarMenu"

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
}

const elements = [
  { label: 'Home' },
  {
    label: 'Services',
    children: [
      { label: 'Web Dev' },
      { label: 'Mobile Dev' },
      { label: 'Design' },
    ],
  },
  {
    label: 'Blog',
  },
  {
    label: 'Contact',
  },
]

export const Default = () => {
  const [open, setOpen] = useState(true)
  return (
    <>
      <button
        className="mb-4 bg-gray-800 text-white px-4 py-2 rounded"
        onClick={() => setOpen(!open)}
      >
        Toggle Sidebar
      </button>
      <Sidebar open={open} onClose={() => setOpen(false)} elements={elements} />
    </>
  )
}
