"use client";
import React, { useState } from "react";
import GoogleMapComponent from "./MapPage";
import Checkbox from "@/components/Checkbox";
import { getGroundTypeEntries } from "@/server/data";

export default function Main() {
    const [groundLevelCheck, setGroundLevelCheck] = useState(false);
    const [groundTypeCheck, setGroundTypeCheck] = useState(false);
    const [birdMigrationCheck, setBirdMigrationCheck] = useState(false);
    const [habitatsCheck, setHabitatsCheck] = useState(false);
    const [coralReefsCheck, setCoralReefsCheck] = useState(false);
    
    const fetchGroundTypeData = async () => {
        const data = await getGroundTypeEntries();
        console.log(data);
    }

    return (
        <div className="drawer lg:drawer-open drawer-end">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <GoogleMapComponent />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="flex flex-col gap-3 px-5 bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><span className="text-md font-bold">Overlay Options</span></li>
                    <Checkbox checked={groundLevelCheck} setChecked={setGroundLevelCheck} name="Ground Level" />
                    <Checkbox checked={groundTypeCheck} setChecked={setGroundTypeCheck} name="Ground Type" />
                    <Checkbox checked={birdMigrationCheck} setChecked={setBirdMigrationCheck} name="Bird Migration" />
                    <Checkbox checked={habitatsCheck} setChecked={setHabitatsCheck} name="Habitats" />
                    <Checkbox checked={coralReefsCheck} setChecked={setCoralReefsCheck} name="Coral Reefs" />
                    <button className="btn btn-secondary" onClick={() => fetchGroundTypeData()}>Click Me!</button>
                </ul>
            </div>
        </div>
    )
}