import PetCard from "./PetCard/PetCard";

export default function PetList({
    pets
}){
   return (
    <>
        {pets.length > 0
            ? (<ul className="other-pets-list">
                {pets.map(p => <PetCard key={p._id} pet={p}/> )}
              </ul>)
            : <p className="no-pets">No pets in database!</p>
        }
   </>
   ) 
}