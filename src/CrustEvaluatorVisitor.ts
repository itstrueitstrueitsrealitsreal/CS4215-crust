import { AbstractParseTreeVisitor } from "antlr4ng";
import { CrustVisitor } from "./parser/src/CrustVisitor";
import {
  ProgramContext,
  FunctionDeclarationContext,
  ExpressionContext,
  BlockContext,
  // ... other contexts as needed
} from "./parser/src/CrustParser";

interface FunctionValue {
  parameters: string[];
  body: BlockContext;
  // Optionally, add an environment snapshot here for closures
}

export class CrustEvaluatorVisitor
  extends AbstractParseTreeVisitor<any>
  implements CrustVisitor<any>
{
  // A simple environment for variables and functions
  private env: Record<string, any> = {};

  // Visit the top-level program rule
  visitProgram(ctx: ProgramContext): any {
    let result = null;
    for (const stmt of ctx.statement()) {
      result = this.visit(stmt);
    }
    return result;
  }

  // Function Declaration: store the function definition in the environment
  visitFunctionDeclaration(ctx: FunctionDeclarationContext): any {
    const funcName = ctx.Identifier().getText();
    // Assume parameters are defined in a parameterList rule that returns a list of Identifier tokens
    let parameters: string[] = [];
    if (ctx.parameterList()) {
      parameters =
        ctx.parameterList().children?.map((child) => child.getText()) || [];
    }
    const body = ctx.block();
    // Save the function as an object in our environment
    this.env[funcName] = {
      parameters,
      body,
    } as FunctionValue;
    return null; // Declarations might not produce a value
  }

  // Example for evaluating a function call, if your grammar supports it:
  // (You might need to add a rule for function calls in your grammar.)
  visitFunctionCall(ctx: ExpressionContext): any {
    // Get the function name from the first child (the Identifier)
    const funcName = ctx.getChild(0).getText();

    // Determine the positions of arguments based on your grammar structure.
    // For example, if your structure is: Identifier '(' (arg (',' arg)*)? ')'
    // Then the arguments might be from index 2 to index ctx.getChildCount() - 2.
    const args: any[] = [];
    for (let i = 2; i < ctx.getChildCount() - 1; i++) {
      // Skip commas if they exist:
      if (ctx.getChild(i).getText() === ",") continue;
      args.push(this.visit(ctx.getChild(i) as ExpressionContext));
    }

    // Now lookup the function from your environment and call it:
    const func = this.env[funcName] as FunctionValue;
    if (!func) {
      throw new Error(`Function ${funcName} is not defined.`);
    }
    const oldEnv = { ...this.env };
    func.parameters.forEach((param, index) => {
      this.env[param] = args[index];
    });
    const result = this.visit(func.body);
    this.env = oldEnv; // Restore the environment
    return result;
  }

  // Implement or override other visit methods as needed…
  // For example, for expressions, variable declarations, etc.

  protected defaultResult(): any {
    return null;
  }

  protected aggregateResult(aggregate: any, nextResult: any): any {
    return nextResult;
  }
}
