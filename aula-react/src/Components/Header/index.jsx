import "./style.css"

export function Header(props) {
    console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
      <h2>{props.subTitulo}</h2>
    </header>
  );
}
