import { Skeleton } from '@mui/material'
import React from 'react'

interface IUserFormSkeletonProps {
	length: number
}

const UserFormSkelton = ({ length }: IUserFormSkeletonProps) => {
	return (
		<>
			{[...Array(length)].map((_, index) => (
				<Skeleton
					key={index}
					variant='text'
					animation='pulse'
					height='55px'
					width={'100%'}
					sx={{
						marginBottom: '1.4rem',
						transform: 'scale(1, 1)',
						backgroundColor: 'grey.100',
					}}
				/>
			))}
		</>
	)
}

export default UserFormSkelton
