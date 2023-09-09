import {NavLink} from "react-router-dom";

const categories = [
    {
        id: 1,
        name: "Пластикові контейнери",
        sub_cat: '1100l'
    },
    {
        id: 2,
        name: "Залізні контейнери"
    },
    {
        id: 3,
        name: "Підземні системи"
    }
];
const Sidebar = () => {
    return <ul className={'border-r-2 flex flex-col basis-1/4'}>
        {
            categories.map(item => <li
                className={'font-semibold'}>
                <NavLink className={'flex justify-between p-2'} to={'/category/' + item.id}>
                    {item.name}
                    {item.sub_cat &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    }
                </NavLink>
            </li>)
        }
    </ul>
}

export default Sidebar;
