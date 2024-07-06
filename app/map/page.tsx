import { NavBar } from "@/components/NavBar";
import GoogleMapComponent from "./MapPage";

export default function Page() {
    return (
        <div className="h-screen">
            <div className="drawer lg:drawer-open drawer-end">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <GoogleMapComponent />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><span className="text-md font-bold">Overlay Options</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}