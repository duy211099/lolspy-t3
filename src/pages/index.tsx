import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { HomePage } from './Home/HomePage';
import { Navbar } from '~/components';

const Home: NextPage = () => {
    return (
        <>
            <Navbar />
            <HomePage />
        </>
    );
};

export default Home;
