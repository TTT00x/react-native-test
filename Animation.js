import React from 'react';
import { Animated, Easing, Text, View } from 'react-native';

class FadeInView extends React.Component {
  state = {
    position: new Animated.ValueXY(0, 0),
    twirl: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.sequence([
      // Animated.decay(this.state.position, {
      //   velocity: {x: 6000, y: 6000},
      //   deceleration: 0.997,
      // }),
      Animated.parallel([
        Animated.spring(this.state.position, {
          toValue: {x: 100, y: 500}
        }),
        Animated.timing(this.state.twirl, {
          toValue: 360,
        }),
      ]),
    ]).start();
  }

  render() {
    let { position, twirl } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          left: position.x,
          top: position.y,
          transform: [{ rotateY: `${twirl}deg` }]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class Animation extends React.Component {
  render() {
    return (
      <FadeInView style={{width: 250, height: 50, backgroundColor: '#000'}}>
        <Text style={{color: '#fff', fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    )
  }
}
