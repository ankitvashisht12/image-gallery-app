import React from 'react'
import styles from './Photo.module.css';
import { FaRegHeart } from 'react-icons/fa';

const Photo = ({id, refer, name, username, urls, likes, profile_image}) => {



	return (
		<div 
			ref={refer} 
			class={`card rounded m-2 ${styles.photo}`}
		>
			<img src={urls.thumb} alt='thumbnail' class={`card-img-top ${styles.thumbnail}`} />

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
