import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import s from "../../HW11.module.css";

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            className={s.srClass}
            sx={{ // стили для слайдера // пишет студент

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
