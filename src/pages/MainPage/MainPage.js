import './MainPage.scss'

import BeansDivider from "../../components/BeansDivider/BeansDivider"
import { Container } from "../../components/Container"

import first from '../../assets/OurBest/1.png'
import second from '../../assets/OurBest/2.png'
import third from '../../assets/OurBest/3.png'


const MainPage = () => {
	return (
		<>
			<AboutUs />
			<OurBest />
		</>
	)
}

const AboutUs = () => {
	return (
		<section className="about-us">
			<Container>
				<div className="title">About Us</div>
				<BeansDivider />
				<div className="about-us__text">
					Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
					Afraid at highly months do things on at. Situation recommend objection do intention
					so questions. As greatly removed calling pleased improve an. Last ask him cold feel
					met spot shy want. Children me laughing we prospect answered followed. At it went
					is song that held help face.
					<br /><br />
					Now residence dashwoods she excellent you. Shade being under his bed her, Much
					read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
					horrible but confined day end marriage. Eagerness furniture set preserved far
					recommend. Did even but nor are most gave hope. Secure active living depend son
					repair day ladies now.
				</div>
			</Container>
		</section>
	)
}

const OurBest = () => {
	const coffeeCards = [
		{ src: first, title: 'Solimo Coffee Beans 2 kg', price: '10.73$' },
		{ src: second, title: 'Presto Coffee Beans 1 kg', price: '15.99$' },
		{ src: third, title: 'AROMISTICO Coffee 1 kg', price: '6.99$' },
	]

	return (
		<section className="our-best">
			<Container>
				<div className="title">Our best</div>
				<div className="our-best__items">
					{coffeeCards.map(({ src, title, price }) => {
						return (
							<div className="our-best__item">
								<img src={src} alt={title} className="item__img" />
								<div className="item__text">
									<div className="item__title">{title}</div>
									<div className="item__price">{price}</div>
								</div>
							</div>
						)
					})}
				</div>
			</Container>
		</section>
	)
}
export { MainPage }