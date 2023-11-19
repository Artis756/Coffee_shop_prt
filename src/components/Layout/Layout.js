import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import Footer from "../Footer"

const Layout = () => {
	return (
		<>
			<Header pageType='main' />
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout