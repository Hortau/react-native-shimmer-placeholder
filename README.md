
<h2 align="center">
  React Native Shimmer Placeholder
</h2>
<h5 align="center">
Placeholder for iOS, Android and Web
</h5>

<p align="center">
<img src="https://github.com/hortau/react-native-shimmer-placeholder/blob/master/example.gif?raw=true">
</p>

## Original Library
This package is a modern fork of [react-native-shimmer-placeholder](https://www.npmjs.com/package/react-native-shimmer-placeholder), but updated to use react-native-reanimated and react-native-svg.

## Get Started

### Installation

`yarn add @hortau/react-native-shimmer-placeholder react-native-reanimated react-native-svg`

### Usage

#### Simple

``` jsx
import ShimmerPlaceHolderfrom '@hortau/react-native-shimmer-placeholder'

<ShimmerPlaceHolder />
<ShimmerPlaceHolder visible={isFetched}>
  <Text>
    Wow, awesome here.
  </Text>
</ShimmerPlaceHolder>
```

More Detail see [this](https://github.com/hortau/react-native-shimmer-placeholder/blob/master/example/App.js)

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `visible` | Show child content instead of shimmer | boolean | false |
| `style` | Container style | ViewStyle | { backgroundColor: '#ebebeb', overflow: 'hidden' } |
| `shimmerStyle` | Style applied to the shimmer layer | ViewStyle | {} |
| `contentStyle` | Style applied to children when visible | ViewStyle | {} |
| `location` | Gradient stop positions | number[] | [0.3, 0.5, 0.7] |
| `width` | Width of placeholder (number or '100%') | number  string | 200 |
| `height` | Height of placeholder | number | 15 |
| `duration` | Base duration (ms) of one shimmer pass | number | 1000 |
| `shimmerWidthPercent` | Fraction (0..1) or percent (>1) controlling shimmer band width | number | 1 |
| `isReversed` | Reverse animation direction | boolean | false |
| `shimmerColors` | Colors used in the gradient | string[] | ['#ebebeb','#c5c5c5','#ebebeb'] |
| `containerProps` | Props passed to the outer container View | ViewProps | undefined |
| `shimmerContainerProps` | Props passed to shimmer container View | ViewProps | undefined |
| `childrenContainerProps` | Props passed to children container View | ViewProps | undefined |

### Contribute

Welcome help me to build this awesome lib.

## Publish to GitHub Packages
    yarn build
    export NPM_TOKEN=ghp_xxx
    npm publish --access public

### License

[MIT](https://github.com/hortau/react-native-shimmer-placeholder/blob/master/LICENSE)
