import React, { useContext } from 'react';

import { SongContext } from '../Contexts/SongContext';
import Album from './Album';
import Banner from './Banner';
import SuggestList from './SuggestList';


const SidebarCenter = () => {
    const { suggestList } = useContext(SongContext)

    return (
        <>
        <Banner/>
        <Album/>
        <SuggestList listRender={suggestList}/>
        </>
    )
};

export default SidebarCenter;
