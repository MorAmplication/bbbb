import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BbbbResolverBase } from "./base/bbbb.resolver.base";
import { Bbbb } from "./base/Bbbb";
import { BbbbService } from "./bbbb.service";

@graphql.Resolver(() => Bbbb)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BbbbResolver extends BbbbResolverBase {
  constructor(
    protected readonly service: BbbbService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
