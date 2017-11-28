import React from 'react'
import '../../assets/stylesheets/application.css';
import { getStepClass } from '../../utils/utils'
import { NAVIGATION_STEPS } from '../../utils/constants'
const { CROWDSALE_CONTRACT, TOKEN_SETUP, CROWDSALE_SETUP, PUBLISH, CROWDSALE_PAGE } = NAVIGATION_STEPS

export const StepNavigation = ({activeStep}) => (
	<div className="steps-navigation">
		<div className="container">
			<div className={getStepClass(CROWDSALE_CONTRACT, activeStep)}>Контракт кампании</div>
			<div className={getStepClass(TOKEN_SETUP, activeStep)}>Параметры токена</div>
			<div className={getStepClass(CROWDSALE_SETUP, activeStep)}>Параметры кампании</div>
			<div className={getStepClass(PUBLISH, activeStep)}>Публикация</div>
			<div className={getStepClass(CROWDSALE_PAGE, activeStep)}>Страница кампании</div>
		</div>
	</div>
)
