import {View, Text} from 'react-native';
import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {COLORS} from '../../utils';

const MenuIcon = (props: any) => {
  let width = props?.width || 30;
  let height = props?.height || 40;
  let color = props?.color || COLORS.grey;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      color={color}
      fill="currentColor"
      class="bi bi-list"
      viewBox="0 0 16 16">
      <Path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </Svg>
  );
};

export default MenuIcon;
