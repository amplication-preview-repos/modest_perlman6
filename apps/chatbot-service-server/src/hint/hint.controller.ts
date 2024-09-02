import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HintService } from "./hint.service";
import { HintControllerBase } from "./base/hint.controller.base";

@swagger.ApiTags("hints")
@common.Controller("hints")
export class HintController extends HintControllerBase {
  constructor(
    protected readonly service: HintService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
