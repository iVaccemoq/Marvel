import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {

    const {loading, request, error, clearError, comicsRequest} = useHttp();

    const _firstPartUrl = 'https://gateway.marvel.com:443/v1/public/characters';
    const _secondPartUrl = 'apikey=b67ab1d35c15d867c96d86041443af32';

    const _firstPartComicsURL = 'https://gateway.marvel.com:443/v1/public/comics';
    const _secondPartComicsURL = 'apikey=b67ab1d35c15d867c96d86041443af32'

    const getAllCharacters = async (limit = 9) => {
        const res = await request(`${_firstPartUrl}?limit=${limit}&${_secondPartUrl}`)
        return await res.data.results.map(res => _getState(res))
    }

    const getCharacter = async (id) => {
        const res = await request(`${_firstPartUrl}/${id}?${_secondPartUrl}`)
        return _getState(res.data.results[0]);
    }

    const getComic = async (id) => {
        const res = await comicsRequest(`${_firstPartComicsURL}/${id}?${_secondPartUrl}`)
        return res;
    }

    const loadMore = async (limit) => {
        const res = await request(`${_firstPartUrl}?limit=${limit}&${_secondPartUrl}`)
        return await res.data.results.map(res => _getState(res))
    }

    const getComicses = async () => {
        const res = await comicsRequest(`${_firstPartComicsURL}?limit=8&${_secondPartComicsURL}`);
        return await res;
    }

    const loadMoreComicses = async (limit) => {
        const res = await comicsRequest(`${_firstPartComicsURL}?limit=${limit}&${_secondPartComicsURL}`)
        return await res;
    }

    const _getState = (res) => {
        const char = {
            name: res.name,
            descr: (res.description ? res.description: 'Нет данных о герое').length > 80 ? (res.description ? res.description: 'Нет данных о герое').slice(0,80) + '...' : (res.description ? res.description: 'Нет данных о герое'),
            img: res.thumbnail.path + '.' + res.thumbnail.extension,
            homepage: res.urls[0].url,
            wiki: res.urls[1].url,
            id: res.id,
            comics: res.comics.items
        }
        return char;
    }

    return {getAllCharacters,getCharacter,loadMore,loading,error, clearError, getComicses, loadMoreComicses, getComic}
}

export default useMarvelService;