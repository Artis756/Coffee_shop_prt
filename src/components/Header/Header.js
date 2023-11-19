import BeansDivider from "../BeansDivider/BeansDivider"
import { Container } from "../Container"
import Navigation from '../Navigation'

import './Header.scss'

export const Header = ({ pageType }) => {
	return (
		<header className={`header header_${pageType}`}>
			<Navigation type='header' />
			<Container>
				<MainView />
			</Container>
		</header>
	)
}

const MainView = () => {
	return (
		<>
			<h1 className="header__title">Everything You Love About Coffee</h1>
			<BeansDivider type='header' />
			<div className="header__text">
				We makes every day full of energy and taste
				<br /><br />
				Want to try our beans?
			</div>
			<a href="#" className="header__more">More</a>
		</>
	)
}