'use strict';

import React from 'react';
import {dateFormatter} from '../../utils/date-formatter';

export default class Gist extends React.PureComponent {
  render() {
    const {owner, html_url, description, updated_at} = this.props.gist;
    const updatedDate = new Date(updated_at);
    return (
      <section className="gistRowContainer">
        <span>{owner ? owner.login : 'Anonymous User'}</span>
        <span>{description}</span>
        <span><a target="_tab" href={html_url}>Github link</a></span>
        <span>{dateFormatter(updatedDate)}</span>
      </section>
    );
  }
}

Gist.propTypes = {
  gist: React.PropTypes.shape({
    owner: React.PropTypes.shape({
      login: React.PropTypes.string,
      starred_url: React.PropTypes.string,
    }),
    html_url: React.PropTypes.string,
  }),
};