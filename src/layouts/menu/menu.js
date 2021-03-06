import React from 'react';
import './../../styles/menu.css';
import MenuItem from './menuItem';

const Menu = () => {
    return (
        <ul className="sidebar-menu">
            <MenuItem path='#' label='Início' icon='home'/>
            <MenuItem path='/categories/list' label='Categorias' icon='list-ol'/>
            <MenuItem path='/subcategories/list' label='Subcategorias' icon='list-ul'/>
            <MenuItem path='/posts/list' label='Post' icon='align-left'/>
        </ul>
    )
}

export default Menu
