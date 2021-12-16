import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as petService from '../../services/petService';
import usePetState from '../../hooks/usePetState';
import { Alert } from 'react-bootstrap';

const types = [
    {value: 'Cat',text: 'Cat'},
    {value: 'Dog',text: 'Dog'},
    {value: 'Parrot',text: 'Parrot'},
    {value: 'Reptile',text: 'Reptile'},
    {value: 'Other',text: 'Other'}
]

export default function Edit() {
    const {petId} = useParams();
    const [errors, setErrors] = useState({name: false})
    const [pet, setPet] = usePetState(petId);

    const onEditSubmitHandler= (e) => {
        e.preventDefault();

        let petData = Object.fromEntries(new FormData(e.currentTarget))
        petService.update(pet._id, petData);
    }

    const nameChangeHandler = (e) => {
        e.preventDefault();

        let currentName = e.target.value;
        if (currentName.length < 3 ) {
            setErrors(state => ({...state, name: 'Your name should be at least 3 characters'}))
        } else {
            setErrors(state => ({...state, name: false}))
        }
    }
    return (
        <section id="edit-page" className="edit">
        <form id="edit-form"  method="POST" onSubmit={onEditSubmitHandler}>
            <fieldset>
                <legend>Edit my Pet</legend>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    <span className="input" style={{borderColor : errors.name ?  'red' : 'inherit'}}>
                        <input type="text" name="name" id="name" defaultValue={pet.name} onBlur={nameChangeHandler}/>
                    </span>
                    <Alert variant='danger' show={errors.name}> {errors.name} </Alert>
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea name="description"
                            id="description" defaultValue={pet.description}></textarea>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" defaultValue={pet.imageUrl} />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="type">Type</label>
                    <span className="input">
                        <select id="type" name="type" defaultValue={pet.type} onChange={(e) => setPet(s => ({...s, type: e.target.value}))}>
                            {types.map(t => 
                                <option key={t.value} value={t.value}> {t.text} </option>)}
                        </select>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Save" />
            </fieldset>
        </form>
    </section>
    )
}