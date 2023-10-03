import { useState } from 'react'

function App() {
  const [filter, setFilter] = useState('movies')

  return (
    <>
        <select name={filter} onChange={e => setFilter(e.target.value)}>
            <option value="movies">Фильмы</option>
            <option value="serials">Сериалы</option>
            <option value="tv-shows">Шоу</option>
        </select>
        <div>
            {
                filter === 'movies' && (
                    <div>
                        <h2>Фильмы</h2>
                        <ul>
                            <li>Аватар</li>
                            <li>Побег из Шоушенка</li>
                            <li>Зверополис</li>
                        </ul>
                    </div>
                )
            }
            {
                filter === 'serials' && (
                    <div>
                        <h2>Сериалы</h2>
                        <ul>
                            <li>Игра престолов</li>
                            <li>Шерлок</li>
                            <li>Во все тяжкие</li>
                        </ul>
                    </div>
                )
            }
            {
                filter === 'tv-shows' && (
                    <div>
                        <h2>Шоу</h2>
                        <ul>
                            <li>Пять ужинов</li>
                            <li>Забота о важном</li>
                            <li>Любимый Новый год</li>
                        </ul>
                    </div>
                )
            }
        </div>
    </>
  )
}

export default App
