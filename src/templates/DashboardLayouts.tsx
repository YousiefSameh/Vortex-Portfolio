import Header from "@components/dashboard/Header"
import { Outlet } from "react-router"

const DashboardLayouts = () => {
  return (
    <div className="flex">
      <Header />
      <main className="w-[85%] bg-dark-color text-white p-8"><Outlet /></main>
    </div>
  )
}

export default DashboardLayouts