import {useParams, useNavigate} from 'react-router-dom';
import { useState} from 'react';
import { Button } from 'react-bootstrap';
import usePetState from '../../hooks/usePetState';
import {useNotificationContext, types} from '../../contexts/NotificationContext'
import * as petService from '../../services/petService';
import * as likeService from '../../services/likeService';
import { useAuthContext } from '../../contexts/AuthContext';
import ConfirmDialog from '../Common/ConfirmDialog';


export default function Details() {
    const navigate = useNavigate()
    const {user} = useAuthContext();
    const {addNotification} = useNotificationContext();

    let {petId} = useParams();
    const [pet, setPet] = usePetState(petId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const deleteHandler = (e) => {
        e.preventDefault();

        petService.destroy(petId, user.accessToken)
            .then(() => {
                navigate('/')
            })
            .finally(() => {
                setShowDeleteDialog(false)
            })
    }

    const deleteClickHandler = (e) => {
        e.preventDefault();

        setShowDeleteDialog(true)
    }

    const likeButtonClick = () => {
        likeService.like(user._id, petId)
            .then(addNotification('Successfully liked a pet', types.success))

        /*if (pet.likes.includes(user._id)){
            console.log('User already liked')
            return;
        }
        let likes = [...pet.likes, user._id];
        let likedPet = {...pet, likes};

        petService.like(pet._id, likedPet, user.accessToken)
            .then((resdata) => {
                console.log(resdata)
                setPet(state => ({
                    ...state,
                   likes
                }))
            })*/
    }

    const ownerButtons = (
        <>
            <a className="button" href={`/edit/${pet._id}`}>Edit</a>
            <a className="button" href="#" onClick={deleteClickHandler}>Delete</a>
        </>
    );

    const userButtons = <Button onClick={likeButtonClick} className="button">Like</Button>;

    return (
        <>
        <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler}/>
         <section id="details-page" className="details">
        <div className="pet-information">
            <h3>Name: {pet.name}</h3>
            <p className="type">Type: {pet.type}</p>
            <p className="img"><img src={pet.imageUrl} /></p>
            <div className="actions">

                { user._id && (user._id === pet._ownerId
                    ? ownerButtons
                    : userButtons
                )}
          
                <div className="likes">
                    <img className="hearts" src="/images/heart.png" />
                    <span id="total-likes">Likes: {pet.likes?.length}</span>
                </div>

            </div>
        </div>
        <div className="pet-description">
            <h3>Description:</h3>
            <p>{pet.description}</p>
        </div>
      </section>
    </>
    )
}