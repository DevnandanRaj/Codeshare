import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Routes } from 'rea';
import HomePage from "./../Admin/Pages/HomePage";
import BooksPage from "./../Admin/Pages/BooksPage";
import Users from "./../Admin/Pages/Users";
import styled from "@emotion/styled";

const AdminRoutes = () => {
	return (
		<DIV>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/admin/books" element={<BooksPage />} />
				<Route path="/admin/users" element={<Users />} />
				<Route path="/admin/profile" element={<Users />} />
			</Routes>
		</DIV>
	);
};
const DIV = styled.div`
	width: 100%;
`;
export default AdminRoutes;
