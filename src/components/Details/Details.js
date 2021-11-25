import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from '../../services/petService'

export default function Details() {
    const [pet, setPet] = useState({});
    let {petId} = useParams();

    useEffect(async () => {
        let petResult = await petService.getOne(petId);
        setPet(petResult)
    },[])

    return (
        <section id="details-page" className="details">
        <div className="pet-information">
            <h3>Name: {pet.name}</h3>
            <p className="type">Type: {pet.type}</p>
            <p className="img"><img src={pet.imageUrl} /></p>
            <div className="actions">

                <a className="button" href="#">Edit</a>
                <a className="button" href="#">Delete</a>
                
                <a className="button" href="#">Like</a>
                
          
                <div className="likes">
                    <img className="hearts" src="/images/heart.png" />
                    <span id="total-likes">Likes: {pet.likes}</span>
                </div>

            </div>
        </div>
        <div className="pet-description">
            <h3>Description:</h3>
            <p>{pet.description}</p>
        </div>
    </section>
    )
}