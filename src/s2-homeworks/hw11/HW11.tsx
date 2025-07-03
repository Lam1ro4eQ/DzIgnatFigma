import React, {useState} from 'react'
import s from './HW11.module.css'

import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'


/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const change = (event: Event, value: number | number[]) => {
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
        if (Array.isArray(value)) {
            setValue1(value[0])
            setValue2(value[1])
        } else {
            setValue1(value)
        }
    }

    return (
        <div id={'hw11'}>
            <div className={s.hwTitle}>Homework #11</div>

            <div className={s.container}>
                {/* Одиночный слайдер */}
                <div className={s.wrapper}>
                    <span className={s.number}>{value1}</span>
                    <SuperRange
                        className={s.slider}
                        value={value1}
                        onChange={(event, newValue) => change(event, newValue as number)}
                    />
                </div>

                {/* Двойной слайдер */}
                <div className={s.wrapper}>
                    <span className={s.number}>{value1}</span>
                    <SuperRange
                        className={s.slider}
                        value={[value1, value2]}
                        onChange={(event, newValue) => change(event, newValue as number[])}
                    />
                    <span className={s.number}>{value2}</span>
                </div>
            </div>
        </div>
    )
}

export default HW11
