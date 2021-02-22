import React, { useContext } from 'react';
import ModalContext from '../../context/ModalContext/ModalContext';
import Modal from 'react-bootstrap/Modal';
import styles from './DetailView.module.css';
import { AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai';

const DetailView =  () => {

	const [modal, setModal] = useContext(ModalContext);

	const cancelModalHandler = () => {
		const newModal = {...modal};
		newModal.showModal = !newModal.showModal;
		newModal.photo= {}
		setModal(newModal);
	}
	const photo= modal.photo;
	console.log(photo);
	return (
		 <Modal size='lg' 
      aria-labelledby="contained-modal-title-vcenter"
      centered show={modal.showModal} onHide={cancelModalHandler}>
        <Modal.Header closeButton>Detail View</Modal.Header>
        <Modal.Body>
					<div className={styles.imgContainer}>
						<img src={photo.urls.small} alt='Raw' />
					</div>
					<div className={styles.userInfo}>
						<img src={photo.profile_image.medium} alt='user profile' className={`rounded-circle p-3 ${styles.profileImage}`}/>
						<div className={styles.user}>
							<h2>{photo.name}</h2>
							<h3>@{photo.username}</h3>
							<div className={styles.userContact}>
								<AiOutlineTwitter className={styles.icons}/> 	
								<h4>@{photo.twitter}</h4>
								<AiFillInstagram className={styles.icons}/>
								<h4>@{photo.instagram}</h4>
							</div>
						</div>
					</div>
					<hr />
					<div className={styles.linkContainer}>
						<a href={photo.download} target='_blank' rel='noreferrer'><button className='btn btn-primary'>Download Image</button></a>

						<a href={photo.urls.raw} target='_blank' rel='noreferrer'><button className='btn btn-secondary'>Get Raw Image</button></a>
					</div>
       </Modal.Body>
      </Modal>	
	)
}

export default DetailView; 
