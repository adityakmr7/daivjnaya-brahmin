import * as React from "react";
import Svg, { Defs, G, Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent() {
  return (
    <Svg width={36.482 / 2} height={35.779 / 2} viewBox="0 0 36.482 35.779">
      <Defs></Defs>
      <G transform="translate(8952.884 5581)">
        <Circle cx={10} cy={10} r={10} transform="translate(-8945 -5573)" />
        <Path d="M-8934.5-5581l3.5 6h-7zM-8923.399-5576.53l-1.333 7.095-5.421-4.55zM-8917.017-5566.428l-5.58 4.578-1.228-6.97zM-8919.356-5553.694l-7.217-.08 3.539-6.129zM-8928.26-5546.43l-5.477-4.701 6.65-2.42zM-8941.027-5546.431l-1.175-7.123 6.652 2.42zM-8950.93-5554.693l3.678-6.21 3.538 6.129zM-8952.268-5567.428l6.811-2.391-1.231 6.97zM-8945.69-5577.726l6.755 2.543-5.42 4.55z" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
