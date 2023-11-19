import './Navigation.scss'
import whiteBeans from '../../assets/LogoWhiteBeans.svg'
import blackBeans from '../../assets/LogoBlackBeans.svg'

const Navigation = ({ type }) => {
	return (
		<nav className={`menu ${type === 'header' ? 'menu_header' : 'menu_footer'}`}>
			<ul>
				<li><a href="#">
					<img src={type === 'header' ? whiteBeans : blackBeans} alt="" className='menu__logo' />
					Coffee house
				</a></li>
				<li><a href="#">Our coffee</a></li>
				<li><a href="#">For your pleasure</a></li>
			</ul>
		</nav>
	)
}

export default Navigation