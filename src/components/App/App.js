import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../../pages";
import Layout from "../Layout";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<MainPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;
