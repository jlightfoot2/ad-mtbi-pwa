import React, {Component} from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
export default class HomePage extends Component {
  constructor (props) {
    super(props);
    this.props = props;
  }

  componentWillMount () {
    this.props.appBarTitle('Intro');
  }

  render () {
    return (
      <div>
        <Card>
          <CardTitle title="mild Traumatic Brain Injury" subtitle="Resource Guide" />
          <CardText>
This program has many tools to learn more about mTBI, strategies for handling the
frustrations that go with this kind of injury, and opportunities to hear from others
who have struggled with this challenge.
          </CardText>
          <CardActions>
            <RaisedButton containerElement={<Link to="/main/home" />} primary={true} label="Get Started!" />
          </CardActions>
        </Card>
      </div>
    );
  }
}
