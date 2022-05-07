import * as React from 'react';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export function navigate(name, params) {
//   console.log(isReadyRef.current, navigationRef.current)
  console.log( navigationRef.current)

  // isReadyRef.current && navigationRef.current
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    console.log('cant navigate')
  }
}