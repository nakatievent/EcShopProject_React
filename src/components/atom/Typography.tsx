import React, { FC, ReactNode, ElementType } from 'react';
import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/system';

type Props = {
	variant?      :
	'body1'
	|'body2'
	|'button'
	|'caption'
	|'h1'
	|'h2'
	|'h3'
	|'h4'
	|'h5'
	|'h6'
	|'inherit'
	|'overline'
	|'subtitle1'
	|'subtitle2'
	color?       : string
	noWrap?      : boolean
	gutterBottom?: boolean
	align?       :
	'center'
	|'inherit'
	|'justify'
	|'left'
	|'right'
	component?   : ElementType
	sx?: SxProps
	fontWeight?  : number
	mt?          : SxProps
	children     : ReactNode
}

export const CustomTypography: FC<Props> = (props) => {
	const { variant, color, align, noWrap, component = 'div', sx, fontWeight, children } = props
	
	return (
		<Typography
			variant={variant}
			color={color}
			align={align}
			noWrap={noWrap}
			component={component}
			sx={sx}
			fontWeight={fontWeight}
		>
			{children}
		</Typography>
	);
}
