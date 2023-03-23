import React from 'react'
import Image from 'next/image'
import type { IChampion } from '~/interfaces'
import { kChampionLoadingUrl, kChampionSplashUrl } from '~/const/api'
import style from './styles.module.scss'

interface IProps {
    champion: IChampion | undefined
}

export const ChampionListItem: React.FC<IProps> = (props) => {
    const { champion } = props

    return (
        <div className={style['champion-item']}>
            <Image
                //   loader={}
                src={kChampionLoadingUrl(champion?.id,0)}
                alt={champion?.key ?? ''}
                width={500}
                height={500}
                priority
            />
            {champion?.name}
        </div>
    )
}
