import foods from "../data/data";

export default function ResultsList({ query }) {

  const list = () => {
    const filteredList = foods.filter((food) => 
      food.name.toLowerCase().includes(query.toLowerCase())
    );

    if (query == "") return foods;
    else return filteredList;
  }

  function highlight(text) {
    const search = new RegExp(`(${query})`, "gi");
    const parts = text.split(search);

    return (
      <>
        {parts.map((part, i) =>
          <span
            key={i}
            style={part.toLowerCase() === query.toLowerCase()
              ? { backgroundColor: 'yellow' }
              : {}
            }
          >
            {part}
          </span>
        )}
      </>
    );
  }

  return (
    <table>
      <tbody>
        {list().map((food) =>
          <tr key={food.id}>
            <td>{highlight(food.name)}</td>
            <td>{highlight(food.description)}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}