import lexer from "../lib/converters/lexer";
import { LatexToAstRelaxed } from "../lib/converters/latex-to-text-relaxed";
import { latex_rules } from "../lib/converters/latex-to-ast";
describe("lexer", () => {
  const assemble = (lexer, list) => {
    let t;
    do {
      t = lexer.advance();
      list.push(t);
    } while (t.token_type !== "EOF");
  };

  // it("fo", () => {
  //   console.log("..");

  //   const l = new lexer(
  //     [
  //       ["a", "a"],
  //       ["%", "PERCENT"]
  //     ],
  //     " "
  //   );
  //   l.set_input("%");

  //   const list = [];

  //   assemble(l, list);

  //   console.log("list:", list);
  // });

  // it("relaxed", () => {
  //   const r = new LatexToAstRelaxed();
  //   r.convert("\\frac{12}{200}");
  // });

  // it.only("%", () => {
  //   const l = new lexer([["%", "PERCENT"]]);

  //   l.set_input("%");
  //   const t = l.advance();
  //   console.log("t:", t);
  // });
  it("\\%", () => {
    const l = new lexer([["\\\\%", "PERCENT"]]);

    l.set_input("\\%");
    const t = l.advance();
    console.log("t:", t);
  });

  it.only("mixed number", () => {
    // const rules = [latex_rules[0]];
    // console.log("rules:", rules[0]);
    const l = new lexer(latex_rules);

    l.set_input("3     \\frac{1}{3}");
    // const t = l.advance();

    const tokens = [];
    let t = {};
    do {
      t = l.advance();
      tokens.push(t);
    } while (t && t.token_type !== "EOF");

    console.log("t:", tokens);
  });

  it.only("frac", () => {
    const l = new lexer(latex_rules);
    l.set_input("\\frac{1}{2}");
    const t = l.advance();
    console.log(t);
  });
});
