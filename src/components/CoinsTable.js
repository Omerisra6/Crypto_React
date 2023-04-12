import Coin from './Coin'
import useCoins from '../hooks/useCoinCurrency'

export default function CoinsTable() 
{
    const coins = useCoins()
    return (
        <div key="table-container" className="table-container">
            <table key="table">
                <thead>
                    <tr className="title-row">
                        <th classsName="title"></th>
                        <th className="title">Price</th>
                        <th className="title">Highet</th>
                        <th className="title">Lowest</th>
                        <th className="title">Latest</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map( crypto => {

                        return <Coin coin={ crypto }/>
                    })}
                </tbody>
            </table>
        </div>
    )
}
