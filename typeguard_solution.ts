import branch, {
  BranchParams,
  BranchSubscriptionEvent,
} from 'react-native-branch';

interface BranchSubscriptionEventBase {
  params: BranchParams | undefined;
  error: string | null | undefined;
  uri: string | undefined;
}
interface BranchSubscriptionEventError extends BranchSubscriptionEventBase {
  error: string;
}

function isErrorEvent(
  event: BranchSubscriptionEvent,
): event is BranchSubscriptionEventError {
  return typeof event.error === 'string';
}

function doSomethingWithParams(params: BranchParams) {
  console.log(params);
}

branch.subscribe((event: BranchSubscriptionEvent) => {
  if (isErrorEvent(event)) {
    console.log(event.error);
  } else {
    // param cannot be undefined
    doSomethingWithParams(event.params);
  }
});
