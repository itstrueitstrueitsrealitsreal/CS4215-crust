import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from "antlr4ng";

import { CrustLexer } from "./parser/src/CrustLexer";
import { CrustParser, ProgramContext } from "./parser/src/CrustParser";
// Import your custom visitor:
import { CrustEvaluatorVisitor } from "./CrustEvaluatorVisitor";

export class CrustEvaluator extends BasicEvaluator {
  private visitor: CrustEvaluatorVisitor;

  constructor(conductor: IRunnerPlugin) {
    super(conductor);
    this.visitor = new CrustEvaluatorVisitor();
  }

  async evaluateChunk(chunk: string): Promise<void> {
    try {
      const inputStream = CharStream.fromString(chunk);
      const lexer = new CrustLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new CrustParser(tokenStream);
      const tree = parser.program() as ProgramContext;
      const result = tree.toStringTree(parser);
      console.log("PRINTING TREE");
      console.log(result);

      // const result = this.visitor.visit(tree);
      // this.conductor.sendOutput(`Result: ${result}`);
    } catch (error) {
      this.conductor.sendOutput(
        `Error: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
}
