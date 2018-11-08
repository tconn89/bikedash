import {Card as RCard, CardMedia, CardPrimaryAction} from '@rmwc/card';

import React from 'react';
import {Typography} from '@rmwc/typography';

/*PropTypes
* title: string
* subTitle: string
* image: string
* description: string
*/
export default class Card extends React.Component {
    render() {
        const props = this.props
        return (
            <RCard style={{width: '100%'}}>
                <CardPrimaryAction>
                    <CardMedia
                        sixteenByNine
                        style={{backgroundImage: `url(${props.image?props.image:'https://via.placeholder.com/800x450'})`}}
                    />
                    <div style={{padding: '0 1rem 1rem 1rem'}}>
                        <Typography use="headline6" tag="h2">
                            {props.title}
                        </Typography>
                        <div style={{height: '5px'}}/>
                        <Typography
                            use="subtitle2"
                            tag="h3"
                            theme="text-secondary-on-background"
                            style={{marginTop: '-1rem'}}
                        >
                            {props.subTitle}
                        </Typography>
                        <Typography use="body1" tag="div" theme="text-secondary-on-background">
                            {props.children}
                        </Typography>
                    </div>
                </CardPrimaryAction>
            </RCard>
        );
    }
}
