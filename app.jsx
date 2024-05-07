import { useState } from 'react';

function SearchableVideoList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);

  return (
    <>
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
      <videoList
        videos={foundVideos}
        emptyHeading={
          `No matches for “${searchText}”`
          } />
    </>
  );
}

SearchableVideoList();

const obj = {
    hola: 'hola'
}

const infoCurso = {
    imagen: cursoSeleccionado.querySelector('img').src,
    titulo: cursoSeleccionado.querySelector('h4').textContent,
    precio: cursoSeleccionado.querySelector('.precio span').textContent,
    id: cursoSeleccionado.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
}
