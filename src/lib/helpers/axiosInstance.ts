import httpCodes from '$lib/constants/httpCodes';
import axios from 'axios';

const getAxiosInstance = (baseUrl: string) => {
	return axios.create({
		validateStatus: (status) => status >= httpCodes.OK && status < httpCodes.INTERNAL_SERVER_ERROR,
		baseURL: baseUrl,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
};

export default getAxiosInstance;
