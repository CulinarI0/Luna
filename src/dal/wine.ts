import prisma from "@/lib/db";
import { wineList } from "@/mock/cardlistitems";


export default async function getWineList(){
 
    try {
        if (process.env.NO_DB == "true"){
            return wineList;
        }

        const wines = await prisma.wine.findMany();
        return wines;
    } catch (error) {
        console.error("Failed to fetch the wine list:", error);
        throw new Error("Failed to fetch the wine list");
    }
}