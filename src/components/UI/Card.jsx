import "./Card.css";

const Card = function (prp) {
  const classes = `card ${prp.className}`;
  return <div className={classes}>{prp.children}</div>;
};

export default Card;
