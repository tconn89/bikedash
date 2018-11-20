import '@patternfly/react-core/dist/styles/base.css';
import '@rmwc/icon/icon.css';
import React from 'react';
import { Icon } from '@rmwc/icon'

import { GridItem } from '@patternfly/react-core'

export default class Metric extends React.PureComponent {
    render() {
        const props = this.props
        return (
            <GridItem md={4} xl={2} span={6} >
              <div className="wrapper count-title d-flex">
                <Icon icon='star' className='icon-margin'/>
                <div className="name"><strong className="text-uppercase">{ props.name }</strong>
                  <div className="metric-data">{props.data}</div>
                </div>
              </div>
            </GridItem>
        );
    }
}
