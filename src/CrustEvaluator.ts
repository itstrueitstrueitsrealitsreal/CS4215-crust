import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from "antlr4ng";

import { CrustLexer } from "./parser/src/CrustLexer";
import { CrustParser, ProgramContext } from "./parser/src/CrustParser";
import { CrustVisitor } from "./parser/src/CrustVisitor";

export class CrustEvaluator extends BasicEvaluator {
  // Must specify the type param, e.g. `number`
  private visitor: CrustVisitor<number>;

  constructor(conductor: IRunnerPlugin) {
    super(conductor);
    this.visitor = new CrustVisitor();
  }

  async evaluateChunk(chunk: string): Promise<void> {
    try {
      // Create the lexer and parser using ANTLR
      const inputStream = CharStream.fromString(chunk);
      const lexer = new CrustLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new CrustParser(tokenStream);

      // Call the top-level rule that matches your grammar:
      // If your grammar's rule is 'program', then do:
      const tree = parser.program() as ProgramContext;

      // Evaluate with your visitor
      const result = this.visitor.visit(tree);

      // Output the result
      this.conductor.sendOutput(`Result: ${result}`);
    } catch (error) {
      this.conductor.sendOutput(
        `Error: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
}
