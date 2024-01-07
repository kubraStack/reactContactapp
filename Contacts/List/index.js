import { useState } from 'react';

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

 //Filtreleme işlemi için değişten tanımladık ve buna bilgiler contacts içinden filter ile atadık.
  const filtered = contacts.filter((item) => {
    return Object.values(item).some((value) => {
      return value.toString().toLowerCase().includes(filterText.toLowerCase());
    });
  });

  console.log(filtered);

  return (
    <div>    
      <input
        placeholder='Filter Contact'
        className='ınput'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <br />
      <ul className='list'>
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>

      <p>Total contacts ({filtered.length})</p>
    </div>
  );
}

export default List;