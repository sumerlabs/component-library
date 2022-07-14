import styled from 'styled-components';

export const CustomerProfileContainer = styled.div`
	padding: 1.1rem;
	margin-top: 4rem;
	.box-img-profile {
		display: flex;
		justify-content: flex-start;
		gap: 1rem;
		align-items: center;
		border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.gr10};
		padding-bottom: 1rem;
	}

	.name-profile {
		font-size:24px;
		line-height:140%;
		font-weight: 400;
	}

	.phone-profile {
		font-size:18px;
		line-height:140%;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.primaryColorScale.p2};
	}

	.box-sign-out {
		display: flex;
		justify-content: flex-start;
		gap: 0.5rem;
		cursor: pointer;
		align-items: center;
		color: ${({ theme }) => theme.colors.redScale.r5};
		margin-top: 1rem;
	}

	.customer-phone{
		color: ${({ theme }) => theme.colors.primaryColorScale.p2};
	}
`;
