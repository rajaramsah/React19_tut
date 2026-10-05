function Avatar() {
  const avatar = "https://react.dev/images/docs/scientists/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  const name = "Gregorio Y. Zara";
  return (
    <div>
      <h1>Avatar Component</h1>
      <img src={avatar} alt={description} />
      <p>{name}</p>
    </div>
  );
}

export default Avatar;
