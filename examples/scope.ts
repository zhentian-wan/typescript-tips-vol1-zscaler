async function main() {
  let result: string | undefined;
  result = await fetchData();
  if (!result) {
    return;
  }
  setState((state) => ({ ...state, ui: result }));
}

function setState(
  fn: (oldState: { ui: string }) => { ui: string }
) {}

declare function fetchData(): Promise<string | undefined>;
