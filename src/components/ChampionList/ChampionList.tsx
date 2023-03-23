import React from 'react'
import type { IChampions, IScreenStatus } from '~/interfaces'
import { ChampionListItem } from '..'
import styles from './styles.module.scss'

interface IProps {
    champions: IChampions
}

export const ChampionList: React.FC<IProps & IScreenStatus> = (props) => {
    const { champions } = props
    const championKeys = Object.keys(champions)


    return (
        <div className={`${styles['champion-list'] ?? ''} main-content`}>
            {championKeys.map(key => {
                const champion = champions[key]
                return <ChampionListItem key={key} champion={champion} />
            })}
        </div>
    )
}

