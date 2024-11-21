import { WithoutUseMemo } from "../WithoutUseMemo";
import { WithUseMemo } from "../WithUseMemo";

export const HookUseMemo = () => {
  return (
    <section>
      <h1 className="pt-20">Le hook useMemo()</h1>
      <WithoutUseMemo />
      <WithUseMemo />
    </section>
  );
};
