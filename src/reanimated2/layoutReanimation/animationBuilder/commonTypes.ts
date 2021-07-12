import { ViewStyle, TextStyle } from 'react-native';
import { EasingFn } from '../../Easing';

export type StyleProps =
  | ViewStyle
  | TextStyle
  | { originX?: number; originY?: number };

export type KeyFrameProps = StyleProps | { easing?: EasingFn };

export type LayoutAnimation = {
  initialValues: StyleProps;
  animations: StyleProps;
};

export type AnimationFunction = (a?: any, b?: any, c?: any) => any; // this is just a temporary mock

export interface EntryExitAnimationsValues {
  originX: number;
  originY: number;
  width: number;
  height: number;
  globalOriginX: number;
  globalOriginY: number;
}

export type EntryExitAnimationFunction = (
  targetValues: EntryExitAnimationsValues
) => LayoutAnimation;

export type EntryExitAnimationBuild = () => EntryExitAnimationFunction;

export interface LayoutAnimationsValues {
  originX: number;
  originY: number;
  width: number;
  height: number;
  globalOriginX: number;
  globalOriginY: number;
  boriginX: number;
  boriginY: number;
  bwidth: number;
  bheight: number;
  bglobalOriginX: number;
  bglobalOriginY: number;
}

export type LayoutAnimationFunction = (
  targetValues: LayoutAnimationsValues
) => LayoutAnimation;

export type LayoutAnimationBuild = () => LayoutAnimationFunction;

export interface ILayoutAnimationBuilder {
  build: () => LayoutAnimationFunction;
}

export interface BaseLayoutAnimationConfig {
  duration?: number;
  easing?: EasingFn;
  type?: AnimationFunction;
  damping?: number;
  mass?: number;
  stiffness?: number;
  overshootClamping?: number;
  restDisplacementThreshold?: number;
  restSpeedThreshold?: number;
}

export interface BaseBuilderAnimationConfig extends BaseLayoutAnimationConfig {
  rotate?: number | string;
}

export type LayoutAnimationAndConfig = [
  AnimationFunction,
  BaseBuilderAnimationConfig
];

export interface BounceBuilderAnimationConfig {
  duration?: number;
}

export interface IEntryExitAnimationBuilder {
  build: EntryExitAnimationBuild;
}
