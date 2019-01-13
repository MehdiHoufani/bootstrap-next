import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';


class BlockSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slideIdx: 1
		};
	}

	render = () => {
		const { text } = this.props;
		return (
			<div className={'block-slide'}>
				<div className={'block-slide-header'}>
					<div className={'block-slide-header-title'}>
						<h3>{text[0]|| ''}</h3>
						<h3>{text[1]|| ''}</h3>
					</div>
				</div>
				<Slider>
					<div>
						<img src={'https://via.placeholder.com/150x150'} />
					</div>
					<div>
						<img src={'https://via.placeholder.com/150x150'} />
					</div>
					<div>
						<img src={'https://via.placeholder.com/150x150'} />
					</div>
				</Slider>
			</div>);

	}
}

BlockSlider.propTypes = {
	text: PropTypes.array,
	settings : PropTypes.object
};

BlockSlider.defaultProps = {
	text: [],
	settings: {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}
};

export default BlockSlider;