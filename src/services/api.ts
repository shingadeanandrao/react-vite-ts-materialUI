import { AxiosResponse } from 'axios';
import axiosInstance from './axiosMiddleware';

export const fetchOpenApi = async (path: string) => {
  const response: AxiosResponse = await axiosInstance.get(`${path}`, {
    headers: {
      'Skip-Authorization': true, // Skip adding Authorization header
    },
  });
  return response;
};

export const fetchApi = async (path: string) => {
  const response: AxiosResponse = await axiosInstance.get(`${path}`, {
    headers: {},
  });
  return response;
};

export const PostOpenApi = async (
  path: string,
  payload: object,
  extraHeaders?: string
) => {
  const response: AxiosResponse = await axiosInstance.post(`${path}`, payload, {
    headers: {
      'Skip-Authorization': true, // Skip adding Authorization header

      'Content-Type': extraHeaders ?? 'application/json',
    },
  });
  return response;
};

export const PostApi = async (
  path: string,
  payload: object | File,
  extraHeaders?: string
) => {
  const response: AxiosResponse = await axiosInstance.post(`${path}`, payload, {
    headers: {
      'Content-Type': extraHeaders ?? 'application/json',
    },
  });
  return response.data;
};

export const PutApi = async (path: string, data?: unknown) => {
  const response: AxiosResponse = await axiosInstance.put(`${path}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};
