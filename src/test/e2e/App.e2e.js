import { Selector } from "testcafe";

fixture`App.e2e.js testing...`.page`../../../build/index.html`;

test("Testcafe test!", async t => {
  console.log("Testcafe test!");
  const test = await Selector("#testTestcafe");
  await t.expect(test.value).eql("Testcafe test!");
});
