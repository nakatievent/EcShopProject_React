import { FC, ReactNode }  from 'react';
import { Container, Box } from '@mui/material';

type Props = {
  children: ReactNode;
}

export const BaseLayout: FC<Props> = ({ children }) => (
	<Container component="main" maxWidth="xs">
		<Box
			sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			{children}
		</Box>
	</Container>
);
