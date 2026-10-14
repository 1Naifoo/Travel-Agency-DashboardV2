import react from "react";
import Header from "../../../components/Header";
import { TripCard } from "../../../components";
import { StatsCard } from "../../../components";
import { totalmem } from "os";

const Dashboard = () => {
  const user = { name: 'Naif'}
  const dashboardStats = {
    totalUsers: 12321,
    usersJoined: {currentMonth: 218, lastMonth: 176},
    totalTrips: 2324,
    tripsCreated: { currentMonth: 160, lastMonth: 250 },
    userRole: {total: 65, currentMonth:26, lastMonth: 21}
  }

  const {totalUsers, usersJoined, totalTrips, tripsCreated,userRole } = dashboardStats
  return (
    <main className="dashboard wrapper">
<Header
    title={`Welcome ${user ?.name ?? "Guest"} 👋`}
    description = "Track activity, trends and popular destinations in real time "
/>
  <section className="flex flex-col gap-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
  <StatsCard
          headerTitle=" Total Users"
          total={totalUsers}
          currentMonthCount = {usersJoined.currentMonth}

          lastMonthCount = {usersJoined.lastMonth}
          />
    <StatsCard
        headerTitle=" Total Trips"
        total={totalTrips}
        currentMonthCount = {tripsCreated.currentMonth}

        lastMonthCount = {tripsCreated.lastMonth}
        />
   
     <StatsCard
        headerTitle="Active Users"
        total={userRole.total}
        currentMonthCount = {userRole.currentMonth}

        lastMonthCount = {userRole.lastMonth}
        />

    </div>


  </section>
    
    <TripCard/>
    </main>
  )
}

export default Dashboard