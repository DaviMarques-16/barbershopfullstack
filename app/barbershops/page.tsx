import BarbershopItem from "../_components/barbershop-item";
import { db } from "../_lib/prisma";

interface BarbershopsPageProps {
    searchParams:  {
        search? : string
    }
}

const BarbershopsPage = async ({searchParams} : BarbershopsPageProps) => {
      const barbershops = await db.barbershop.findMany({
        where: {
            name: {
                contains: searchParams?.search,
                mode: 'insensitive'
            }
        }
      })
    return (

    <div>
        <h2 className="uppercase font-bold text-gray-400 text-xs mt-6 mb-3">
            Resultados para &quot;{searchParams.search}&quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
            {barbershops.map((barbershop) => (
                <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
        </div>
    </div>

     );
}
 
export default BarbershopsPage;