import Navigation from '../Navigation'
import BeansDivider from '../BeansDivider'
import './Footer.scss'


const Footer = () => {
	return (
		<footer className="footer">
			<Navigation type='footer' />
			<BeansDivider type='footer' />
		</footer>
	)
}

export default Footer