import React from 'react'
import styles from './Square.module.scss'
type Props = {
    value: string
    onClick: (value: any) => void
}

export default function Square({ value, onClick }: Props) {
    return (
        <button data-testid="square" onClick={onClick} className={styles.square}>
            {value}
        </button>
    )
}
