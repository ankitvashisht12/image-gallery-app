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

				let data;
				if(searchTerm.length === 0){
					data = response.data;
				}else data = response.data.results;

				setPhotos(photos => [...photos, ...data])

				setHasMore(data.length > 0 );
				setLoading(false);
				if(data.length === 0){
					setHasError(true);
					setErrorMsg('No Photos Found! Try another query 🤔');
				}
			} catch (err) {
				if(axios.isCancel(err)) return ;
				setHasError(true);
				setLoading(false);

				console.log(err);
				if(err.response.status === 404) setErrorMsg('No Photos found !');
				if(err.response.status === 403) setErrorMsg('😖 API Limit Exceeded! Try after 1 hour.')
				else setErrorMsg('Something Went Wrong ! Try Again.')

			}
		}
		getPhotosData();

		return () => {
			cancel();	
	};
	}, [searchTerm, pageNo]);



	return { loading, photos, hasMore, hasError, errorMsg };

}

export default useSearchImage;
