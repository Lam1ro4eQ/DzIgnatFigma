import React, {useState} from 'react'
import s from './HW11.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

function HW11() {
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const change = (event: Event, value: number | number[]) => {
        if (Array.isArray(value)) {
            // Гарантируем точное совпадение значений
            const roundedValue1 = Math.round(value[0] * 100) / 100
            const roundedValue2 = Math.round(value[1] * 100) / 100
            setValue1(roundedValue1)
            setValue2(roundedValue2)
        } else {
            const roundedValue = Math.round(value * 100) / 100
            setValue1(roundedValue)
        }
    }

    return (
        <div id={'hw11'}>
            <div className={s.hwTitle}>Homework #11</div>

            <div className={s.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            value={value1}
                            onChange={change}
                            style={{ width: '300px' }} // Фиксированная ширина
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            value={[value1, value2]}
                            onChange={change}
                            style={{ width: '300px' }} // Такая же ширина
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11