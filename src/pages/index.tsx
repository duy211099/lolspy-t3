import useSWR from 'swr'
import type { Fetcher } from 'swr'
import { ChampionList } from '~/components';
import { kChampionsUrl } from '~/const/api';
import type { IChampionResponse } from '~/interfaces';

const fetcher: Fetcher<IChampionResponse> = (input: RequestInfo | URL, init?: RequestInit | undefined) => fetch(input, init).then(res => res.json())

const Home = () => {
    const { data, error, isLoading } = useSWR<IChampionResponse, Error>(kChampionsUrl, fetcher)

    const champions = data?.data ?? {}

    if (isLoading)
        return <p>Loading...</p>
    return (
        <main>
            <ChampionList isLoading={isLoading} error={error} champions={champions}/>
        </main>
    )
};

export default Home