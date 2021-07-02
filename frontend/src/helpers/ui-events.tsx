import { FormEvent } from 'react'

export function preventDefault(callback: () => void) {
  return (event: FormEvent) => {
    event.preventDefault()
    callback()
  }
}
