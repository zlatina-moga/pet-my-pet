import { useState, useEffect } from "react";
import * as petService from '../../services/petService';
import PetList from '../PetList/PetList';

export default function Dashboard() {
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
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <section>
                <PetList pets={pets}/>
            </section>   
        </section>
    )
}