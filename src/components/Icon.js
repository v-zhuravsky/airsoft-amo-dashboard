import React from 'react';

const Icon = props => (
	<i className={"fa fa-" + props.name} {...props}></i>
);

export default Icon;