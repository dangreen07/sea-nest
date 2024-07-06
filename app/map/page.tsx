import { getGroundLevelEntries, getGroundTypeEntries, getHabitatEntries } from "@/server/data";
import Main from "./Main";

export default async function Page() {
    const groundLevelData = await getGroundLevelEntries();
    const groundTypeData = await getGroundTypeEntries();
    const habitatData = await getHabitatEntries();

    return (
        <div className="h-screen">
            <Main habitatData={habitatData} heatmapData={groundLevelData} />
        </div>
    )
}