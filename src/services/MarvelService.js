

class MarvelService{

    _firstPartUrl = 'https://gateway.marvel.com:443/v1/public/characters';
    _secondPartUrl = 'apikey=b67ab1d35c15d867c96d86041443af32';
    _id = '1011400';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error ('Ошибка')
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._firstPartUrl}?limit=9&${this._secondPartUrl}`)
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._firstPartUrl}/${id}?${this._secondPartUrl}`)
        return this._getState(res.data.results[0]);
    }

    _getState = (res) => {
        console.log(res.description.length)
        const char = {
            name: res.name,
            descr: (res.description ? res.description: 'Нет данных о герое').length > 80 ? (res.description ? res.description: 'Нет данных о герое').slice(0,80) + '...' : (res.description ? res.description: 'Нет данных о герое'),
            img: res.thumbnail.path + '.' + res.thumbnail.extension,
            homepage: res.urls[0].url,
            wiki: res.urls[1].url
        }
        return char;
    }
}

export default MarvelService;