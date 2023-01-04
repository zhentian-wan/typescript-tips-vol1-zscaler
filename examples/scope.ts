async function main() {
  let result: string | undefined;
  result = await fetchData();
  // if (!result) {
  //   return;
  // }
  //  setState((state) => ({ ...state, ui: result }));

  // solution 1:
  setState((state) => {
    return result ? { ...state, ui: result } : state;
  });

  // solution 2:
  if (!result) {
    return;
  }
  const ui = result;
  setState((state) => ({ ...state, ui }));
}

function setState(
  fn: (oldState: { ui: string }) => { ui: string }
) {}

declare function fetchData(): Promise<string | undefined>;
