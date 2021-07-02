import React, { HTMLAttributes, ReactNode } from 'react'
import { DetailedHTMLProps } from 'react'

export interface iModal
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean
  handleRequestClose: () => void
}

export default function Modal({
  children,
  isOpen,
  handleRequestClose,
}: iModal) {
  return (
    <div
      className={`fixed w-full h-full bg-black bg-opacity-50 grid place-items-center z-10 ${
        isOpen ? 'block' : 'hidden'
      }`}
      onClick={handleRequestClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex items-center justify-center"
      >
        {children}
      </div>
    </div>
  )
}
