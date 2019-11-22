import lexer from "./lexer";
import { latex_rules, whitespace_rule } from "./latex-to-ast";

export class LatexToAstRelaxed {
  constructor() {
    this.lexer = new lexer(latex_rules, whitespace_rule);
  }

  convert(input) {
    this.lexer.set_input(input);
    const list = [];
    let t;
    do {
      t = this.lexer.advance();
      list.push(t);
    } while (t.token_type !== "EOF");

    console.log("list:", list);
  }
}
