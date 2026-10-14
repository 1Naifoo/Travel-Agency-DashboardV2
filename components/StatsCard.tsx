import { calculateTrendPercentage } from "~/lib/utils"


const StatsCard = ({
    headerTitle,
    total,
    lastMonthCount,

    currentMonthCount}:StatsCard)=> {
        const  { trend, percentage} = calculateTrendPercentage 
        (currentMonthCount,lastMonthCount);

             const isDecrement = trend === 'decrement';
            return (
              <article className="stats-card">
                <h3 className="text-base font-medium">
                    {headerTitle}
                </h3>
                <div className=" content">
                    <div className=" flex flex-4 gap-4">
                        <h2 className="text-4xl font semi-bold">{total}</h2>
                        <div className="flex items-center gap-2">
                            <figure className=" flex items-center gap-2">
                                <img src={`/assets/icons/ `} alt="" />

                            </figure>
                        </div>
                    </div>

                </div>
              </article>
            )
        }
export default StatsCard 