import  { Suspense } from "react";
import Spinner from "../../../../views/spinner/Spinner";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;

export function MyLoadable(Component: any) {
  return function ReturnComponent(props: any) {
    return (
      <Suspense fallback={<Spinner />}>
        <Component {...props} />
      </Suspense>
    );
  };
}
