import getWineList from "@/dal/wine";

export default async function getWineNames(): Promise<string[]> {
    const wineList = await getWineList();
    let wineName = wineList.map(x => x.name)
    return wineName;
}