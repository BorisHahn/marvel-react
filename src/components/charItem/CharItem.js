import "./CharItem.scss";

const CharItem = ({ card }) => {
  return (
    <li className="char__item">
      <img src={card.thumbnail} alt="abyss" />
      <div className="char__name">{card.name}</div>
    </li>
  );
};

export default CharItem;
