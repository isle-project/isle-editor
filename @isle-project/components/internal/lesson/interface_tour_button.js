/**
* Copyright (C) 2016-present The ISLE Authors
*
* The isle-dashboard program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

// MODULES //

import React, { Fragment, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import InterfaceTour from '@isle-project/components/internal/interface-tour';
import { addResources } from '@isle-project/locales';
import './interface_tour_button.css';


// MAIN //

const InterfaceTourButton = () => {
	const { t } = useTranslation( 'Lesson' );
	const [ showTour, setShowTour ] = useState( false );
	const handleFinish = useCallback( () => {
		setShowTour( false );
	}, [] );
	const handleTourToggle = useCallback( () => {
		if ( !showTour ) {
			addResources( 'InterfaceTour' );
			setShowTour( true );
		} else {
			setShowTour( false );
		}
	}, [ showTour ] );
	return (
		<Fragment>
			{showTour ? <InterfaceTour
				run={showTour}
				onFinish={handleFinish}
			/> : null}
			<OverlayTrigger placement="left" overlay={<Tooltip id="interface-tour-button">{t('start-interface-tour')}</Tooltip>} >
				<button
					onClick={handleTourToggle}
					onMouseOver={InterfaceTour.preload}
					onFocus={InterfaceTour.preload}
					className="interface-tour-button"
					aria-label={t( showTour ? 'end-interface-tour' : 'start-interface-tour')}
				>
					<i className="fas fa-info-circle"></i>
				</button>
			</OverlayTrigger>
		</Fragment>
	);
};


// EXPORTS //

export default InterfaceTourButton;
