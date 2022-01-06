import api from './api';

interface ParamsProps {
  index: number;
  text: string;
}

export default {
  async get(path?: string, params?: ParamsProps, id?: string) {
    const url = `${path}${
      params ? `?q=${params.text}&startIndex=${params.index}` : ''
    }${id ? `/${id}` : ''}`;

    return api.get(url);
  },
};
