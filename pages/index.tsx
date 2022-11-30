import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => {
	return (
		<>
			<Button color="gradient">Hola Mundo</Button>
		</>
	);
};

export default HomePage;
