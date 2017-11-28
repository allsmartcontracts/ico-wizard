import React from 'react'
import '../../assets/stylesheets/application.css';
import { getStepClass } from '../../utils/utils'
import { NAVIGATION_STEPS } from '../../utils/constants'
const { CROWDSALE_PAGE } = NAVIGATION_STEPS

export const StepNavigation = ({activeStep}) => (
	<div className="steps-navigation">
		<div className="container">
			<div className={getStepClass(CROWDSALE_PAGE, activeStep)}>Статистика кампании</div>
		</div>
	</div>
)
