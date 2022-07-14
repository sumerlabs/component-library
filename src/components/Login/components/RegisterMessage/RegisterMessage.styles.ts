import styled from 'styled-components';

export const RegisterMessageContainer = styled.div`
	padding: 1.1rem;
	text-align: center;

	.box-ready-account {
		margin-top: 4rem;
	}
	.great {
		color: ${({ theme }) => theme.colors.primaryColorScale.p2};
		font-size:34px;
		line-height:140%;
		font-weight: 700;
		padding-top: 2rem;
	}

	.ready-account {
		font-size:24px;
		line-height:140%;
		font-weight: 400;
	}
`;
