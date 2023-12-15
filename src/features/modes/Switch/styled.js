import styled from "styled-components";
import { ReactComponent as Brightness } from "../../../images/brightness.svg";
import { ReactComponent as Slider } from '../../../images/slider.svg';

export const SliderWrapper = styled.div`
	position: relative;
	width: fit-content;
	height: 28px;
`;

export const StyledSlider = styled(Slider)`
  	path {
    	fill: ${({ theme: { darkMode, color } }) => (
			darkMode ? color.lightMineShaft : color.mercury)};
    	border: ${({ theme: { darkMode, color } }) => (
			darkMode ? color.white : color.slateGray)};
  }
`;

export const StyledBrightness = styled(Brightness)`
  	path {
    	fill: ${({ theme: { darkMode, color } }) =>
			darkMode ? color.mineShaft : color.white};
    	border: ${({ theme: { darkMode, color } }) =>
			darkMode ? color.white : color.slateGray};
  }
  && {
    background-color: ${({ theme: { darkMode, color } }) =>
		darkMode ? color.white : color.slateGray};
    color: ${({ theme: { darkMode, color } }) =>
		darkMode ? color.slateGray : color.white};
    height: 20px;
    width: 20px;
    padding: 3px;
    border-radius: 10px;
    position: absolute;
    top: 3px;
	left: ${({ theme: { darkMode } }) =>
		darkMode ? '' : '3px'};
    right: ${({ theme: { darkMode } }) =>
		darkMode ? '3px' : ''};
  }
`;

export const SwitchIcon = styled.div`
	position: relative;
`;

export const StyledSwitch = styled.button`
	border: none;
	text-align: left;
	cursor: pointer;
	position: absolute;
	background-color: transparent;
	right: 0;
	display: flex;
	gap: 12px;
	justify-content: end;
	align-items: center;
	padding: 0;
`;

export const SwitchText = styled.span`
    color: ${({ theme: { darkMode, color } }) => (
		darkMode ? color.white : color.slateGray)};
    font-size: ${({ theme }) => theme.fontSize.font12};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font700};
    line-height: 1.3;
    text-transform: uppercase;
`;

export const Container = styled.div`
	width: 100%;
	margin: 115px 0 -115px;
	display: grid;
	position: relative;
`;