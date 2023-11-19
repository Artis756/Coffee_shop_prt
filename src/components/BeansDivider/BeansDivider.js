import whiteBeans from '../../assets/WhiteBeans.svg';
import blackBeans from '../../assets/BlackBeans.svg';
import './BeansDivider.scss'

const BeansDivider = ({ type }) => {
	const src = type === 'header' ? whiteBeans : blackBeans
	const classes = type === 'header' ? ' divider_header' : ' divider_footer'
	return (
		<div className={`divider${classes}`}>
			<img src={src} alt="beans" className='divider__img' />
		</div>
	)
}

export default BeansDivider