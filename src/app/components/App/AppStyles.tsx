import styled from "styled-components";

export const AppWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #f5f5f5;
`;

export const ToDoWindow = styled.div`
	position: absolute;
	width: 400px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 10px;
	background-color: white;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3), 0 20px 40px 0 rgba(0, 0, 0, 0.1);
`;
