
import React from 'react';

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MKInput
import MKInputRoot from "./MKInputRoot";

const MKInput = forwardRef(({ ...rest }, ref) => (
  <MKInputRoot />
));


export default MKInput;
