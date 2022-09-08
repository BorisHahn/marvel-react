

class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = '509e3ac47273a4681fea6e4019413114';

  getResources = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      console.log(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResources(
      `${this._apiBase}characters?limit=9&offset=210&apikey=${this._apiKey}`
    );
    return res.data.results.map(this._transformCharecter)
  };

  getCharacter = async (id) => {
    const res = await this.getResources(
      `${this._apiBase}characters/${id}?&apikey=${this._apiKey}`
    );
    return this._transformCharecter(res.data.results[0]);
  };

  _transformCharecter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
    }
  }
}

export default MarvelService;
