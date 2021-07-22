import React from 'react'
import { FormattedRelativeTime } from 'react-native-globalize'
import { getTimeAgo } from '../helpers/getTimeAgo'

export function FormattedTime({unixTime}){

    const {unit, value} = getTimeAgo(unixTime)

    return <FormattedRelativeTime
                unit={unit}
                value={-value}
            />
}