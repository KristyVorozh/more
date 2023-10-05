import {useLocation, useNavigate} from "react-router-dom";

const Select = () => {
    const navigate = useNavigate()
    const location = useLocation();

    return (
        <select value={location.pathname.split('/')[1]}
        onChange={e => {
            navigate(`/${e.target.value}`)
        }}>
            <option value="movies">Фильмы</option>
            <option value="serials">Сериалы</option>
            <option value="tv-shows">Шоу</option>
        </select>
    );
};

export default Select;
