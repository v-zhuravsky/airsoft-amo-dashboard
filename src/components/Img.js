import React, { PureComponent } from 'react';

class Img extends PureComponent {
	componentDidMount() {
		this.observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				const { isIntersecting } = entry;

				if (isIntersecting) {
					this.element.src = this.props.src;
					this.observer = this.observer.disconnect();
				}
			});
		},
		{
			root: document.querySelector('.root'),
			rootMargin: '0px 0px 200px 0px'
		});

		this.observer.observe(this.element);
	}

	render() {
		return <img ref={el => this.element = el} className={this.props.className} alt={this.props.alt} />;
	}
}

export default Img;