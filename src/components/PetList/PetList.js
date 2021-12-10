import { useState, useEffect } from "react";
import * as petService from '../../services/petService';
import PetCard from "./PetCard/PetCard";

export default function PetList(){
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result)
            }).catch(err => {
                console.log(err)
            })
    }, [])
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