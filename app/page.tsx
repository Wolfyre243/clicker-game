'use client'

import App from "next/app"
import ButtonPrinter from "./ui/button"

export default function mainPage() {

  function outputStuff() {
    console.log("I'm touched!");
  }

  return (
    <main>
      <div className="flex p-6 max-w-full m-5 bg-white rounded-xl flex-col space-y-2">
        <h1 className="text-black text-4xl text-left">Clicker Game</h1>
        <p className="text-black text-lg text-left">Click on the box below to gain money, then purchase upgrades from the shop!</p>
      </div>
      <div>
        <div className="p-6 max-w-96 h-96 m-5 bg-white rounded-xl flex-auto space-y-4">
          <ButtonPrinter />
        </div>
      </div>
    </main>
  )
}

