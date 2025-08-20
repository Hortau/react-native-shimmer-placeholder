
<h2 align="center">
  React Native Shimmer Placeholder
</h2>
<h5 align="center">
Placeholder for both IOS and Android
</h5>

<p align="center">
<img src="https://github.com/hortau/react-native-shimmer-placeholder/blob/master/example.gif?raw=true">
</p>

## Original Library
This package is a modern fork of [react-native-shimmer-placeholder](https://www.npmjs.com/package/react-native-shimmer-placeholder), but updated for React Native Reanimated.

## Get Started

### Installation

`yarn add @hortau/react-native-shimmer-placeholder`


### Usage

#### Simple

For `expo`
``` jsx
import { createShimmerPlaceholder } from '@hortau/react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

<ShimmerPlaceHolder />
<ShimmerPlaceHolder visible={isFetched}>
  <Text>
    Wow, awesome here.
  </Text>
</ShimmerPlaceHolder>
```

or 

``` jsx
import ShimmerPlaceHolder from '@hortau/react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient';


<ShimmerPlaceHolder LinearGradient={Linear} />
<ShimmerPlaceHolder visible={isFetched} LinearGradient={Linear}>
  <Text>
    Wow, awesome here.
  </Text>
</ShimmerPlaceHolder>
```

For `react-native-linear-gradient`
``` jsx
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from '@hortau/react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

...

<ShimmerPlaceHolder />
```
or
```jsx
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from '@hortau/react-native-shimmer-placeholder'

...

<ShimmerPlaceHolder
  LinearGradient={LinearGradient}
/>
```

#### Connect more components

<p align="center">
<img src="https://github.com/hortau/react-native-shimmer-placeholder/blob/master/facebook-load-data.gif?raw=true">
</p>

```jsx
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
const FacebookContent = () => {

  // Handle animation
  const avatarRef = React.createRef()
  const firstLineRef = React.createRef()
  const secondLineRef = React.createRef()
  const thirdLineRef = React.createRef()

  React.useEffect(() => {
    const facebookAnimated = Animated.stagger(
      400,
      [
        avatarRef.current.getAnimated(),
        Animated.parallel([
          firstLineRef.current.getAnimated(),
          secondLineRef.current.getAnimated(),
          thirdLineRef.current.getAnimated()
        ])
      ]
    );
    Animated.loop(facebookAnimated).start();
  }, [])

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <ShimmerPlaceholder
          ref={avatarRef}
          stopAutoRun
        />
        <View style={{ justifyContent: "space-between" }}>
          <ShimmerPlaceholder
            ref={firstLineRef}
            stopAutoRun
          />
          <ShimmerPlaceholder
            ref={secondLineRef}
            stopAutoRun
          />
          <ShimmerPlaceholder
            ref={thirdLineRef}
            stopAutoRun
          />
        </View>
      </View>
    </View>
  )
}
```

More Detail see [this](https://github.com/hortau/react-native-shimmer-placeholder/blob/master/example/App.js)

### Props

| Prop                         | Description                                                                                            | Type      | Default                                           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------ | --------- | ------------------------------------------------- |
| **`LinearGradient`**         | Linear Gradient components ('react-native-linear-gradient' or 'expo-linear-gradient')                  | Component | undefined                                         |
| **`visible`**                | Visible child components                                                                               | boolean   | false                                             |
| **`style`**                  | Container Style                                                                                        | Style     | `{backgroundColor: '#ebebeb',overflow: 'hidden'}` |
| **`shimmerStyle`**           | Shimmer Style only                                                                                     | Style     | {}                                                |
| **`contentStyle`**           | Content Style when visible                                                                             | Style     | {}                                                |
| **`location`**               | Locations of shimmer                                                                                   | number[]  | *[0.3, 0.5, 0.7]*                                   |
| **`width`**                  | Width of row                                                                                           | number    | 200                                               |
| **`duration`**               | Duration of shimmer over a row                                                                         | number    | 1000                                              |
| **`height`**                 | Height of row                                                                                          | number    | 15                                                |
| **`shimmerWidthPercent`**    | Percent of shimmer width                                                                               | number    | 1.0                                               |
| **`isReversed`**             | Reverse direction of animation                                                                         | boolean   | `false`                                           |                                         |
| **`shimmerColors`**          | Colors of the shimmer.                                                                                 | string[]  | *['#ebebeb', '#c5c5c5', '#ebebeb']*                 |
| **`containerProps`**         | Props passed to the outermost View                                                                     | ViewProps | undefined                                         |
| **`shimmerContainerProps`**  | Props passed to the View which contains the loading animation                                          | ViewProps | undefined                                         |
| **`childrenContainerProps`** | Props passed to the View which contains the children                                                   | ViewProps | undefined                                         |

### Helpers

`createShimmerPlaceholder`

```
/**
 * To create ShimmerPlaceholder by Linear Gradient. Only useful when you use 3rd party,
 * For example: react-native-linear-gradient
 * @param {Linear Gradient Component} LinearGradient - 'expo-linear-gradient' by default
 *
 * @example
 *
 * import LinearGradient from 'react-native-linear-gradient';
 * import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
 *
 * const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
 *
 * ...
 *
 * <ShimmerPlaceHolder />
 */
 ```

### Contribute

Welcome help me to build this awesome lib.

## Publish to GitHub Packages
    npm login --scope=@hortau --auth-type=legacy --registry=https://npm.pkg.github.com
    npm publish --access public

### License

[MIT](https://github.com/hortau/react-native-shimmer-placeholder/blob/master/LICENSE)
