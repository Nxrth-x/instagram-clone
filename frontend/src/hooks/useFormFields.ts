import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

type HTMLInputElementProps<T> = {
  value: T[keyof T]
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

type CreateHTMLInputElementProps<T> = (key: keyof T) => HTMLInputElementProps<T>

type SetFormFields<T> = Dispatch<SetStateAction<T>>

type UseFormFields<T> = [T, CreateHTMLInputElementProps<T>, SetFormFields<T>]

/**
 * ## Hook for creating forms in React
 *
 * ```jsx
 * // Example usage
 * const [formFields, createFormFieldsProps, _setFormFields] = useFormFields({
 *  name: 'Eder',
 *  nickname: 'Nxrth-x',
 * })
 *
 * return (
 *  <div>
 *    <p>{formFields.name} is actually {formFields.nickname}</p>
 *    <input type="text" {...createFormFieldProps('name')} />
 *    <input type="text" {...createFormFieldProps('nickname')} />
 *  </div>
 * )
 * ```
 *
 *
 * @param initialValues Initial form values for the object
 * @returns A stateful value, a form field props generator and a function to set the inner state
 * @see https://gist.github.com/
 */
export default function useFormFields<T>(initialValues: T): UseFormFields<T> {
  const [formFields, setFormFields] = useState(initialValues)

  const createChangeEventHandlerProps = (key: keyof T) => ({
    value: formFields[key],
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      setFormFields((previous) => ({
        ...previous,
        [key]: event.target.value,
      }))
    },
  })

  return [formFields, createChangeEventHandlerProps, setFormFields]
}
