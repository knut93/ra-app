import React from 'react';

function Nav() {
    return (
        <nav className="bg-blue-800 text-white text-lg space-x-3 p-4">
            <a href="/">Home</a>
            <a href="/users">Users</a>
        </nav>
    );
}

export default Nav;