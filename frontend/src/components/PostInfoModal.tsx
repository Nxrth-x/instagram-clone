import React from 'react'
import Modal from './Modal'

type PostModalProps = {
  isOpen: boolean
  handleRequestClose: () => void
}

export default function PostInfoModal({
  isOpen,
  handleRequestClose,
}: PostModalProps) {
  return (
    <Modal handleRequestClose={handleRequestClose} isOpen={isOpen}>
      <div className="flex flex-col w-[100rem] max-w-sm text-sm bg-white rounded-lg overflow-hidden">
        <button className="border-b py-3 font-semibold text-red-500">
          Denunciar
        </button>
        <button className="border-b py-3 font-semibold text-red-500">
          Deixar de seguir
        </button>
        <button className="border-b py-3">Ir para a publicação</button>
        <button className="border-b py-3">Compartilhar em...</button>
        <button className="border-b py-3">Copiar link</button>
        <button className="border-b py-3">Incorporar</button>
        <button className="border-b py-3" onClick={handleRequestClose}>
          Cancelar
        </button>
      </div>
    </Modal>
  )
}
