import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from "antlr4ng";

import { CrustLexer } from "./parser/src/CrustLexer";
import { CrustParser, ProgContext } from "./parser/src/CrustParser";
// Import your custom visitor:
import { CrustEvaluatorVisitor } from "./CrustEvaluatorVisitor";
import { run } from "./InstructionRunner";
// import { TypeCheckerVisitor } from "./TypeCheckerVisitor";

export class CrustEvaluator extends BasicEvaluator {
  private evaluatorVisitor: CrustEvaluatorVisitor;
  // private typeCheckerVisitor: TypeCheckerVisitor;

  constructor(conductor: IRunnerPlugin) {
    super(conductor);
    // this.typeCheckerVisitor = new TypeCheckerVisitor();
    this.evaluatorVisitor = new CrustEvaluatorVisitor();
  }

  async evaluateChunk(chunk: string): Promise<void> {
    try {
      console.log(`Evaluating chunk: ${chunk}`);
      const inputStream = CharStream.fromString(chunk);
      const lexer = new CrustLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new CrustParser(tokenStream);
      const tree = parser.prog() as ProgContext;
      const stringTree = tree.toStringTree(parser);
      console.log("PRINTING TREE:");
      console.log(stringTree);

      // let type = this.typeCheckerVisitor.visit(tree);
      // console.log("Type checking done: ", type);
      this.evaluatorVisitor.visit(tree);
      const instrs = this.evaluatorVisitor.getInstrs();
      instrs.push({ tag: "DONE" });

      console.log("PRINTING INSTRS:");
      console.log(instrs)
      const result = run(instrs);

      // const result = this.visitor.visit(tree);
      console.log(`Result: ${result}`);
      // this.conductor.sendOutput(`Result: ${result}`);
    } catch (error) {
      this.conductor.sendOutput(
        `Error: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
}
