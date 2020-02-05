import { Selector } from "testcafe";

fixture`testing test`.page`../build/index.html`;

test("TEST #1", async t => {
  console.log("FIRING THE TEST!");
  const test = await Selector("#testingReact").innerText;
  await t.expect(test).eql("Testing File");
});
