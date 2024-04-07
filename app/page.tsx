import App from "next/app"
import SideBar from '@/app/ui/sidebar';

export default function mainPage() {
  return (
    <main>
      <div className="p-6 max-w-screen m-5 bg-white rounded-xl flex-auto space-y-4">
        <h1 className="text-black text-4xl text-left">Clicker Game</h1>
        <p className="text-black text-lg text-left">Click on the box below to gain money, then purchase upgrades from the shop!</p>
      </div>
      <div>
        <div className="p-6 max-w-96 h-96 m-5 bg-white rounded-xl flex-auto space-y-4">
          <SideBar />
        </div>
      </div>
    </main>
  )
}
