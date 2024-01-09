import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";

const categories = [
    {
        id: 1,
        name: "Пластикові контейнери",
        sub_cat: ['120 л', '240 л', '1100 л']
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

    const [subcategories, setSubcategories] = useState<Array<string> | undefined>()
    useEffect(() => {
    }, []);
    function handleClick (items : Array<string> | undefined, e : React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();
        setSubcategories(items);
    }

    return <ul className={'border-r-2 flex flex-col basis-1/4'}>
        {!subcategories ? categories.map(item => <li key={item.id}
                className={'font-semibold'}>
                <NavLink className={'flex justify-between p-2'} to={'/category/' + item.id} onClick={(e) => item.sub_cat && handleClick(item.sub_cat, e)}>
                    {item.name}
                    {item.sub_cat &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    }
                </NavLink>
            </li>)
        :<div>
                <button onClick={() => setSubcategories(undefined)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </button>
                {subcategories.map(item => <li className={'font-semibold'}>
                <NavLink className={'flex justify-between p-2'} to={'/category/'}>
                    {item}
                </NavLink>
            </li>) }
            </div>

        }
    </ul>
}

export default Sidebar;
