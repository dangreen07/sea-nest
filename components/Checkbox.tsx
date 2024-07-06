import React, { Dispatch, SetStateAction } from "react";

export default function checkbox({checked, setChecked, name}: {checked: boolean, setChecked: Dispatch<SetStateAction<boolean>>, name: string}) {
    return (
        <li>
            <div className="flex gap-3">
                <input className="checkbox" type="checkbox" checked={checked} onChange={(current) => setChecked(current.target.checked)} />
                <span className="text-md">{name}</span>
            </div>
        </li>
    )
}