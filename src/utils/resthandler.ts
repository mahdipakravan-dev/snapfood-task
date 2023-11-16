import axios, { AxiosResponse } from 'axios';

export const restHandler = async <T>(
    initialUrl: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    params: Record<string, any>
): Promise<T> => {
    const queryString = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');

    const urlWithParams = queryString ? `${initialUrl}?${queryString}` : initialUrl;

    if (method === 'GET') {
        try {
            const response: AxiosResponse<T> = await axios.get(urlWithParams);
            return response.data;
        } catch (error) {
            console.error('Error making GET request:', error);
            throw error;
        }
    }

    const response: AxiosResponse<T> = await axios(urlWithParams, {
        method,
        ...params
    });

    return response.data;
};
