import react from "react";
import Header from "../../../components/Header";

const Dashboard = () => {
  const user = { name: 'Naif'}
  return (
    <main className="dashboard wrapper">
<Header
    title={'Welcome ${user?. name ?? "Guest"}👋 '}
    description = "Track activity, trends and popular destinations in real time "
/>
  

    Dashboard page content
    </main>
  )
}

export default Dashboard