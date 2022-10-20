import React from 'react'

const SideHeader = () => {
    return (
        <div className='side-header'>
            <div className='sd-bg'>
                <img src="https://pokemon-dict.web.app/assets/icons/pokemon-logo-small.webp" alt='no-img' height='64px' width='156px' />
            </div>
            <div className='header-items'>
                <a className='item' href="/" style={{textDecorationLine: 'none', color: 'black'}}>Pokemon</a>
                 {/* eslint-disable-next-line no-restricted-globals */}
                <a className='item' href="https://github.com/dhruv217/pokedex" rel='noreferrer' target="_blank" style={{textDecorationLine: 'none', color: 'black'}}>About</a>
            </div>
        </div>
    )
}

export default SideHeader