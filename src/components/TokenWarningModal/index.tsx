import React from 'react'

import { Token } from 'libs/sdk/src'
import Modal from '../Modal'
import { ImportToken } from 'components/SearchModal/ImportToken'

export default function TokenWarningModal({
  isOpen,
  tokens,
  onConfirm,
  onDismiss
}: {
  isOpen: boolean
  tokens: Token[]
  onConfirm: () => void
  onDismiss: () => void
}) {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={100}>
      <ImportToken tokens={tokens} handleCurrencySelect={onConfirm} />
    </Modal>
  )
}
