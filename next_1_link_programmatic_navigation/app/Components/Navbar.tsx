import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <Link href="/about" className='btn-primary'>About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/dashboard">Dashboard</Link>
        </div>
    );
};

export default Navbar;