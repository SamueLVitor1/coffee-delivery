import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export function DefaultLayout() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Header  />

        <Outlet />
      </div>
    </div>
  )
}