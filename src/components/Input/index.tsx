import type React from "react"
import { useState } from "react"
import { Eye, EyeOff, X } from "lucide-react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean
  onClear?: () => void
  label?: string
  error?: string
}

export const Input = ({ className = "", type, clearable = false, onClear, value, onChange, label, error, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [valueLocal, setValueLocal] = useState(value || "")

  const isPassword = type === "password"
  const inputType = isPassword && showPassword ? "text" : type
  const hasValue = Boolean(value || valueLocal)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueLocal(e.target.value)
    onChange?.(e)
  }

  const handleClear = () => {
    const syntheticEvent = {
      target: { value: "" },
      currentTarget: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>

    setValueLocal("")
    onChange?.(syntheticEvent)
    onClear?.()
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const baseInputClasses = `
      w-full px-3 py-2 border rounded-md
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
      transition-colors duration-200
      ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"}
      ${(clearable && hasValue) || isPassword ? "pr-20" : "pr-3"}
    `

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}

      <div className="relative">
        <input
          type={inputType}
          className={`${baseInputClasses} ${className}`}
          value={value !== undefined ? value : valueLocal}
          onChange={handleChange}
          {...props}
        />

        <div className="absolute inset-y-0 right-0 flex items-center">
          {clearable && hasValue && (
            <button
              type="button"
              className="h-full px-3 py-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors duration-200 cursor-pointer"
              onClick={handleClear}
            >
              <X className="h-4 w-4" />
            </button>
          )}

          {isPassword && (
            <button
              type="button"
              className="h-full px-3 bg-transparent py-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors duration-200 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          )}
        </div>
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
