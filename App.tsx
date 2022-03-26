/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import branch, {BranchParams} from 'react-native-branch';

function doSomethingWithParams(params: BranchParams) {
  console.log(params);
}

const App = () => {
  branch.subscribe(({error, params}) => {
    if (error) {
      console.log(error);
    } else {
      // params could still be undefined here, thus require force non-null
      doSomethingWithParams(params);
    }
  });
  return <></>;
};

export default App;
