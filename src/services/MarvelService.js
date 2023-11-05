

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

    getCharacter = (id) => {
        return this.getResource(`${this._firstPartUrl}/${id}?${this._secondPartUrl}`)
    }
}

export default MarvelService;