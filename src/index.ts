import { initialise } from "conductor/dist/conductor/runner/util/";
import { CrustEvaluator } from "./CrustEvaluator";

const { runnerPlugin, conduit } = initialise(CrustEvaluator);
