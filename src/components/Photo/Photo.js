import React, { useContext } from 'react'
import styles from './Photo.module.css';
import { FaRegHeart } from 'react-icons/fa';
import ModalContext from '../../context/ModalContext/ModalContext';

const Photo = ({id, refer, name, username, twitter, instagram, urls, likes, download, profile_image}) => {


	const [modal, setModal] = useContext(ModalContext);
	const modalHandler = () => {
		const newModal = {...modal}
		newModal.showModal = !newModal.showModal;
		newModal.photo = {
			id, 
			name,
			username,
			urls,
			likes,
			twitter,
			instagram,
			download,
			profile_image
		}

		console.log(newModal)


		setModal(newModal);
	}

	return (
		<div 
			ref={refer} 
			className={`card rounded m-2 ${styles.photo}`}
			onClick={modalHandler}
		>
			<img src={urls.thumb} alt='thumbnail' className={`card-img-top ${styles.thumbnail}`} />

			<div className='card-body d-flex align-items-center justify-content-between'>
				<div className='row'>
					<div className='col'>
						<h2>{name}</h2>
						<h3>@{username}</h3>
					</div>
					<div className='col'>
						<div className={styles.likes}>
						< FaRegHeart  className={styles.icons}/>
						<h2>{likes}</h2>
						</div>
				</div>
				</div>
			</div>

		</div>
	)
}

export default Photo
