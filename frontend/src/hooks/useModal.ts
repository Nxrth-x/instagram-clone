import { Dispatch, SetStateAction, useState } from 'react'

type UseModal = [boolean, () => void, Dispatch<SetStateAction<boolean>>]

export default function useModal(defaultValue = false): UseModal {
  const [state, setState] = useState(defaultValue)

  const toggleState = () => setState((previous) => !previous)

  return [state, toggleState, setState]
}
