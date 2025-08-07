import React, { useEffect, useState } from 'react'
import { Time, TimeWrapper } from './style'

const Timer = () => {
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let status = ""
    if (hour > 12) status = "PM"
    else status = "AM"
    if (hour > 12) hour = hour % 12
    if (hour < 10) hour = "0" + hour
    if (minute < 10) minute = "0" + minute

    const [time, setTime] = useState({ hour, minute, status })


    useEffect(() => {
        setInterval(() => {

            const date = new Date()
            let hour = date.getHours()
            let minute = date.getMinutes()
            if (hour > 12) status = "PM"
            else status = "AM"
            if (hour > 12) hour = hour % 12
            if (hour < 10) hour = "0" + hour
            if (minute < 10) minute = "0" + minute
            setTime({ hour, minute, status })
        }, 1000)
    }, [])

    return (
        <TimeWrapper>
            <Time>{time.hour}:{time.minute}</Time>
            <Time $status="true">{time.status}</Time>
        </TimeWrapper>
    )
}

export default Timer
