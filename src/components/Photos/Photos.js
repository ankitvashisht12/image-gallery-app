import React, { useCallback, useRef } from 'react'
import Photo from '../Photo/Photo';

const Photos = ({ photos, loading, more, setPageNo}) => {

	const observer = useRef();

	console.log('photos', photos);

	const lastPhoto = useCallback(node => {
		if(loading) return ;
		if(observer.current) observer.current.disconnect();


		observer.current = new IntersectionObserver(entries => {
			if(entries[0].isIntersecting && more) {
				console.log('Calling next', more, entries[0].isIntersecting);
				setPageNo(prevPageNo => prevPageNo + 1);
			}
		})

		if(node) observer.current.observe(node);
	}, [loading, more]);

	const photosList = photos.map((photo, idx) => {
		if(photos.length === idx+1){
			return (
				<Photo key={photo.id}
				refer={lastPhoto}
				id={photo.id}
				name={photo.user.name}
				username={photo.user.username}
				urls={photo.urls}
				likes={photo.likes}
				twitter={photo.user.twitter_username}
				instagram={photo.user.instagram_username}
				download={photo.links.download}
				profile_image={photo.user.profile_image} />
			)
		}

		return (
			<Photo key={photo.id}
				id={photo.id}
				name={photo.user.name}
				username={photo.user.username}
				urls={photo.urls}
				likes={photo.likes}
				twitter={photo.user.twitter_username}
				instagram={photo.user.instagram_username}
				download={photo.links.download}
				profile_image={photo.user.profile_image} />
		);
	});
	return (
		<div className='d-flex flex-row flex-wrap mx-4 justify-content-center'>
			{photosList}
		</div>
	); 
}

export default Photos
