"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePathname } from 'next/navigation';

const SubHeader: React.FC = () => {
    const pathname = usePathname();
    const [LanguageRoute, setLanguageRoute] = useState("")

    useEffect(() => {
        const lang = localStorage.getItem("language");
        if (lang) {
            setLanguageRoute(`/${lang}/`);
        }
    }, [pathname])

    const menuItems = [
        { icon: 'columns', text: 'Dashboard', href: `${LanguageRoute}dashboard` },
        { icon: 'user-edit', text: 'Update Profile', href: `${LanguageRoute}dashboard/user-details` },
        { icon: 'id-card', text: 'My Membership', href: `${LanguageRoute}dashboard/membership-details` },
        { icon: 'money-bill-transfer', text: 'Donation', href: `${LanguageRoute}dashboard/membership-donation` },
        { icon: 'user-friends', text: 'Refer Member', href: `${LanguageRoute}dashboard/referred-member` },
        { icon: 'envelope', text: 'Write to Party', href: `${LanguageRoute}dashboard/write` },
    ];

    const handleLogout = () => {
        sessionStorage.removeItem('auth_token');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light subheader pt-lg-4 pt-xl-2" style={{ backgroundColor: '#CB392C' }}>
            <div className="container-fluid">
                <ul className="navbar-nav d-flex flex-wrap justify-content-center mx-lg-auto mx-1">
                    {menuItems.map((item, index) => (
                        <li key={index} className="nav-item mx-3 my-2">
                            <Link
                                href={item.href}
                                className="nav-link d-flex align-items-center text-white text"
                            >
                                <i className={`fas fa-${item.icon} me-2`}></i>
                                <span>{item.text}</span>
                            </Link>
                        </li>
                    ))}
                    <li className="nav-item mx-3 my-2">
                        <Link
                            href={`/join`}
                            onClick={handleLogout}
                            className="nav-link d-flex align-items-center text-white text"
                        >
                            <i className="fa-solid fa-right-from-bracket me-2"></i>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SubHeader;