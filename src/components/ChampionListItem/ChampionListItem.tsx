import React from 'react'
import type { IChampion } from '~/interfaces'

interface IProps {
    champion: IChampion | undefined
}

export const ChampionListItem: React.FC<IProps> = (props) => {
    const { champion } = props

    return (
        <div>
            {champion?.name}
        </div>
    )
}
