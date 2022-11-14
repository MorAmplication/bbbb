import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NewblablaService } from "./newblabla.service";
import { NewblablaControllerBase } from "./base/newblabla.controller.base";

@swagger.ApiTags("newblablas")
@common.Controller("newblablas")
export class NewblablaController extends NewblablaControllerBase {
  constructor(
    protected readonly service: NewblablaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
