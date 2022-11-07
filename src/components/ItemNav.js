const ItemNav = ({ link, dataUrl, item, active }) => {
  return (
    <a href={link} data-url={dataUrl} className={`menu ${active}`}>
      <span></span>
      {item}
    </a>
  );
};

export default ItemNav;
