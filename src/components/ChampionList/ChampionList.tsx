import React from 'react'
import type { IChampions, IScreenStatus } from '~/interfaces'
import { ChampionListItem } from '..'

interface IProps {
    champions: IChampions
}

export const ChampionList: React.FC<IProps & IScreenStatus> = (props) => {
    const { champions } = props
    const championKeys = Object.keys(champions)


    return (
        <div>
            {championKeys.map(key => {
                const champion = champions[key]
                return <ChampionListItem key={key} champion={champion} />
            })}
        </div>
    )
}

