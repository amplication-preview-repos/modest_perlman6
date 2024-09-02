import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HintModuleBase } from "./base/hint.module.base";
import { HintService } from "./hint.service";
import { HintController } from "./hint.controller";
import { HintResolver } from "./hint.resolver";

@Module({
  imports: [HintModuleBase, forwardRef(() => AuthModule)],
  controllers: [HintController],
  providers: [HintService, HintResolver],
  exports: [HintService],
})
export class HintModule {}
