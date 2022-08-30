import "./charList.scss";
import { Component } from "react/cjs/react.production.min";
import CharItem from "../charItem/CharItem";
import MarvelService from "../../services/MarvelService";

class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  updateChar = () => {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharListLoaded)
      .catch(this.onError);
  };

  onCharListLoaded = (charList) => {
    this.setState({
      charList,
      loading: false,
    });
  };

  componentDidMount = () => {
    this.updateChar();
  };

  render() {
    const { charList } = this.state;
    const text = charList.map((item, index) => {
      return <CharItem card={item} key={index} />;
    });

    return (
      <div className="char__list">
        <ul className="char__grid">{text}</ul>
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
