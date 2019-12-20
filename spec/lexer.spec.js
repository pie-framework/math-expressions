import lexer from "../lib/converters/lexer";
import { LatexToAstRelaxed } from "../lib/converters/latex-to-text-relaxed";
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
  it.only("\\%", () => {
    const l = new lexer([["\\\\%", "PERCENT"]]);

    l.set_input("\\%");
    const t = l.advance();
    console.log("t:", t);
  });
});
