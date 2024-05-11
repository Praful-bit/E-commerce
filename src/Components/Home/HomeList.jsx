import React from "react";

function HomeList() {
  return (
    <div className="flex justify-center pt-8">
      <ul className="space-y-4">
        <li className="list-none flex justify-between space-x-8 items-center">
          <div>JUL16</div>
          <div>DETROIT, MI</div>
          <div>DTE ENERGY MUSIC THEATRE</div>
          <button className="bg-blue-500 rounded-lg text-white">
            BUY TICKETS
          </button>
        </li>
        <hr className="font-bold text-lg text-black" />
        <li className="list-none flex space-x-8">
          <div>JUL19</div>
          <div>TORONTO, ON</div>
          <div>BUDWEISER STAGE</div>
          <button className="bg-blue-500 rounded-lg text-white">
            BUY TICKETS
          </button>
        </li>
        <hr className="font-bold text-lg text-black" />
        <li className="list-none flex space-x-8">
          <div>JUL22</div>
          <div>BRISTOW, VA</div>
          <div>JIGGY LUBE LIVE</div>
          <button className="bg-blue-500 rounded-lg text-white">
            BUY TICKETS
          </button>
        </li>
        <hr className="font-bold text-lg text-black" />
        <li className="list-none flex space-x-8">
          <div>JUL29</div>
          <div>PHOENIX, AZ</div>
          <div>AK-CHIN PAVILION</div>
          <button className="bg-blue-500 rounded-lg text-white">
            BUY TICKETS
          </button>
        </li>
        <hr className="font-bold text-lg text-black" />
        <li className="list-none flex space-x-8">
          <div>AUG2</div>
          <div>LAS VEGAS, NV</div>
          <div>T-MOBILE ARENA</div>
          <button className="bg-blue-500 rounded-lg text-white">
            BUY TICKETS
          </button>
        </li>
        <hr className="font-bold text-lg text-black" />
        <li className="list-none flex space-x-8">
          <div>AUG7</div>
          <div>CONCORD, CA</div>
          <div>CONCORD PAVILION</div>
          <button className="bg-blue-500 rounded-lg text-white">
            BUY TICKETS
          </button>
        </li>
        <hr className="font-bold text-lg text-black" />
      </ul>
    </div>
  );
}

export default HomeList;
