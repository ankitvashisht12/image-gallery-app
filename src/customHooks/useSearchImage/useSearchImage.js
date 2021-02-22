import { useState, useEffect } from 'react';
import axios from 'axios';

const useSearchImage = (searchTerm, pageNo) => {
	
	const [loading, setLoading] = useState(true);
	const [photos, setPhotos] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [hasError, setHasError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');


	useEffect(() => {
		setPhotos([]);
	}, [searchTerm]);

	useEffect(() => {

		setHasError(false);
		setLoading(true);

		let cancel;
		let url = 'photos/';
		const parameters = {
			client_id: process.env.REACT_APP_UNSPLASH_KEY,
			page: pageNo,
		}
		if(searchTerm.length !== 0){
			url = 'search/photos/';
			parameters.query = searchTerm;
		}

		const getPhotosData = async () => {
			try{
				const response = await axios.get(url, {
					params: parameters, 
					cancelToken: new axios.CancelToken(function executor(c) {
						cancel = c;
					}) 
				});

				setPhotos(photos => [...photos, ...response.data])

				setHasMore(response.data.length > 0 );
				setLoading(false);
			} catch (err) {
				if(axios.isCancel(err)) return ;
				setHasError(true);
				setLoading(false);
				//if(err.response.status === 404) setErrorMsg('No Character found !');
				//else setErrorMsg('Something Went Wrong ! Try Again.')
				console.log(err);

			}
		}
		getPhotosData();

		return () => {
			cancel();	
	};
	}, [searchTerm, pageNo]);

	console.log(photos);


	return { loading, photos, hasMore, hasError, errorMsg };

}

export default useSearchImage;
