import {Property} from 'csstype';

export interface IUnionStyledComponent {
  $marginTop?: Property.Margin;
  $marginRight?: Property.Margin;
  $marginBottom?: Property.Margin;
  $marginLeft?: Property.Margin;
  $paddingTop?: Property.Padding;
  $paddingRight?: Property.Padding;
  $paddingBottom?: Property.Padding;
  $paddingLeft?: Property.Padding;
  $background?: Property.Background;
  $width?: Property.Width;
  $height?: Property.Height;
  $flexDirection?: Property.FlexDirection;
  $flexWrap?: Property.FlexWrap;
}
